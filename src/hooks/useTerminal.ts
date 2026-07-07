import { useCallback, useMemo, useState } from "react";
import {
  aboutOutput,
  agentsOutput,
  curlOutput,
  dfOutput,
  devNotesOutput,
  dogOutput,
  fakeHistory,
  featureOutput,
  fortuneOutput,
  gitBlameOutput,
  helpOutput,
  jsonOutput,
  knownCommands,
  neofetchOutput,
  npmInstallOutput,
  pingOutput,
  pipelineOutput,
  psAuxOutput,
  readmeOutput,
  roadmapOutput,
  standupOutput,
  todoOutput,
  whyPowershellOutput,
  whoIsJsonOutput,
} from "../data/terminalCommands";

export type TerminalLine = {
  id: number;
  kind: "boot" | "command" | "output" | "error";
  text: string;
};

type FakeNode = {
  kind: "dir" | "file";
  entries?: string[];
  content?: string[];
};

const filesystem: Record<string, FakeNode> = {
  "~": {
    kind: "dir",
    entries: ["agents/", "scripts/", "logs/", "notes/", "secrets/", "README.md"]
  },
  "~/agents": {
    kind: "dir",
    entries: ["parser", "scout", "auditor", "scorer", "planner", "dispatcher", "curator"]
  },
  "~/agents/parser": {
    kind: "file",
    content: [
      "agent: parser  version: 0.3.1",
      "role: classifies intent and extracts entities from incoming requests",
      "model: qwen3:14b (routing pending scorer validation)",
      "avg latency: 1.2s  accuracy: 94%",
    ]
  },
  "~/agents/scorer": {
    kind: "file",
    content: [
      "agent: scorer  version: 0.2.0",
      "role: rates model confidence and risk, recommends routing",
      "trained on: claude-opus-4-8 scored benchmark outputs",
      "dimensions: accuracy, completeness, format, hallucination_risk, overall",
      "note: hallucination_risk >= 7 disqualifies from powershell routing",
    ]
  },
  "~/agents/auditor": {
    kind: "file",
    content: [
      "agent: auditor  version: 0.1.8",
      "role: verifies cmdlets against current ms graph / intune api versions",
      "flags: deprecated params, incorrect pagination, missing error handling",
      "dev note: added pagination support 2026-06-10. no one noticed. i noticed.",
    ]
  },
  "~/scripts": {
    kind: "dir",
    entries: ["intune/", "graph/", "entra/", "azure-kv/"]
  },
  "~/scripts/intune": {
    kind: "dir",
    entries: ["sync-device.ps1", "assign-policy.ps1", "remediate-app.ps1"]
  },
  "~/scripts/graph": {
    kind: "dir",
    entries: ["get-user-risk.ps1", "license-report.ps1", "tenant-snapshot.ps1"]
  },
  "~/scripts/entra": {
    kind: "dir",
    entries: ["group-cleanup.ps1", "stale-device-review.ps1"]
  },
  "~/scripts/azure-kv": {
    kind: "dir",
    entries: ["pull-secret.ps1", "rotate-client-key.ps1", "kv-health.ps1"]
  },
  "~/logs": {
    kind: "dir",
    entries: ["req_7f21.log", "audit-2026-06-23.log", "dispatcher.log"]
  },
  "~/logs/req_7f21.log": {
    kind: "file",
    content: [
      "[2026-06-22 14:32:01] request received: sync intune device — client: legal-north",
      "[2026-06-22 14:32:02] parser: intent=device_sync entity=legal-north confidence=0.97",
      "[2026-06-22 14:32:04] scout: retrieved sync-device.ps1 from library",
      "[2026-06-22 14:32:06] auditor: cmdlets verified — no deprecated params found",
      "[2026-06-22 14:32:08] scorer: risk=low confidence=0.94 routing=local",
      "[2026-06-22 14:32:11] planner: script generated — 43 lines",
      "[2026-06-22 14:32:11] dispatcher: AWAITING APPROVAL via telegram",
      "[2026-06-22 14:33:04] dispatcher: approved by charles",
      "[2026-06-22 14:33:05] dispatcher: snapshot saved — req_7f21.snapshot",
      "[2026-06-22 14:33:09] dispatcher: execution complete — 14 devices synced",
      "[2026-06-22 14:33:10] curator: 1 memory candidate surfaced",
    ]
  },
  "~/logs/dispatcher.log": {
    kind: "file",
    content: [
      "[2026-06-15 02:14:37] dispatcher: armed — approval received",
      "[2026-06-15 02:14:38] dispatcher: snapshot created",
      "[2026-06-15 02:14:41] dispatcher: script executed successfully",
      "[2026-06-15 02:14:41] dispatcher: operator was asleep",
      "[2026-06-15 02:14:41] dispatcher: this is fine",
    ]
  },
  "~/logs/audit-2026-06-23.log": {
    kind: "file",
    content: [
      "audit log — 2026-06-23",
      "requests processed : 3",
      "scripts executed   : 3",
      "approvals required : 3",
      "approvals granted  : 3",
      "reversions used    : 0",
      "data left network  : 0 bytes",
      "secrets logged     : 0",
      "close calls        : 1 (see dispatcher.log)",
    ]
  },
  "~/notes": {
    kind: "dir",
    entries: ["dev-notes.txt", "todo.txt", "standup.txt", "why-powershell.txt"]
  },
  "~/notes/dev-notes.txt": {
    kind: "file",
    content: devNotesOutput
  },
  "~/notes/todo.txt": {
    kind: "file",
    content: todoOutput
  },
  "~/notes/standup.txt": {
    kind: "file",
    content: standupOutput
  },
  "~/notes/why-powershell.txt": {
    kind: "file",
    content: whyPowershellOutput
  },
  "~/secrets": {
    kind: "dir",
    entries: [".sealed", "azure-key-vault.link", "tenant-isolation.policy"]
  },
  "~/README.md": {
    kind: "file",
    content: readmeOutput
  },
  "~/secrets/tenant-isolation.policy": {
    kind: "file",
    content: [
      "per-client isolation : enforced",
      "runtime secret logging: disabled",
      "approval gate         : required",
      "revert snapshot       : required before execution",
    ]
  },
  "~/secrets/azure-key-vault.link": {
    kind: "file",
    content: [
      "credentials fetched from Azure Key Vault at runtime.",
      "discarded from memory after use.",
      "never written to disk. never logged.",
    ]
  },
  "~/secrets/.sealed": {
    kind: "file",
    content: ["sealed: local operator clearance required"]
  }
};

const directories = new Set(
  Object.entries(filesystem)
    .filter(([, node]) => node.kind === "dir")
    .map(([path]) => path)
);

const baseCommands = [
  "help",
  "ls",
  "dir",
  "cat",
  "cd",
  "pwd",
  "whoami",
  "about",
  "features",
  "roadmap",
  "github",
  "clear",
  "exit",
  "sudo",
  "tuna",
  "puddles",
  "hack",
  "history",
  "uname",
  "top",
  "ssh"
];

function joinPath(directory: string, part: string) {
  return directory === "~" ? `~/${part}` : `${directory}/${part}`;
}

function cleanPath(path: string) {
  if (path === "/" || path === "~") {
    return "~";
  }

  const parts = path
    .replace(/^\/+/, "")
    .replace(/^~\/?/, "")
    .split("/")
    .filter(Boolean);

  const resolved: string[] = [];
  for (const part of parts) {
    if (part === ".") {
      continue;
    }
    if (part === "..") {
      resolved.pop();
      continue;
    }
    resolved.push(part);
  }

  return resolved.length ? `~/${resolved.join("/")}` : "~";
}

function resolvePath(currentDirectory: string, target = "") {
  if (!target || target === ".") {
    return currentDirectory;
  }

  if (target.startsWith("~") || target.startsWith("/")) {
    return cleanPath(target);
  }

  return cleanPath(joinPath(currentDirectory, target));
}

function normalizeDirectory(currentDirectory: string, target: string) {
  const next = resolvePath(currentDirectory, target);
  return directories.has(next) ? next : null;
}

function formatEntries(path: string) {
  const node = filesystem[path];
  if (!node || node.kind !== "dir") {
    return null;
  }

  return node.entries?.join("   ") ?? "";
}

function listMatches(currentDirectory: string, partial: string, directoriesOnly = false) {
  const slashIndex = partial.lastIndexOf("/");
  const baseTarget = slashIndex >= 0 ? partial.slice(0, slashIndex + 1) : "";
  const needle = slashIndex >= 0 ? partial.slice(slashIndex + 1) : partial;
  const basePath = resolvePath(currentDirectory, baseTarget || ".");
  const baseNode = filesystem[basePath];

  if (!baseNode || baseNode.kind !== "dir" || !baseNode.entries) {
    return [];
  }

  return baseNode.entries
    .filter((entry) => entry.startsWith(needle))
    .filter((entry) => !directoriesOnly || entry.endsWith("/"))
    .map((entry) => `${baseTarget}${entry}`);
}

export function useTerminal(onClose: () => void) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [directory, setDirectory] = useState("~");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [isHacking, setIsHacking] = useState(false);

  const prompt = useMemo(() => `puddles@sh:${directory}$`, [directory]);

  const append = useCallback((items: Array<Omit<TerminalLine, "id">>) => {
    setLines((current) => [
      ...current,
      ...items.map((item, index) => ({ ...item, id: Date.now() + index + Math.random() }))
    ]);
  }, []);

  const runCommand = useCallback(
    (rawInput: string) => {
      const input = rawInput.trim().toLowerCase();
      if (!input) {
        append([{ kind: "command", text: prompt }]);
        return;
      }

      setHistory((current) => [...current, input]);
      setHistoryIndex(null);

      if (input === "clear") {
        setLines([]);
        return;
      }

      if (input === "exit") {
        onClose();
        return;
      }

      const commandLine = { kind: "command" as const, text: `${prompt} ${input}` };
      const output = (text: string, kind: TerminalLine["kind"] = "output") => ({ kind, text });

      if (input === "github") {
        window.open("https://github.com/Puddles-sh/puddles-framework", "_blank", "noopener,noreferrer");
        append([
          commandLine,
          output("opening https://github.com/Puddles-sh/puddles-framework"),
          output("puddles-framework v1.0.0 — MIT license"),
          output("clone it, deploy it, contribute scripts back."),
        ]);
        return;
      }

      if (input === "hack") {
        append([commandLine, output("Starting local visual diagnostic...")]);
        setIsHacking(true);
        window.setTimeout(() => {
          setIsHacking(false);
          setLines([]);
        }, 3000);
        return;
      }

      const [command = "", ...args] = input.split(/\s+/);
      const target = args.join(" ");

      if (command === "cd") {
        const next = normalizeDirectory(directory, target);
        append([
          commandLine,
          next ? output(`directory: ${next}`) : output(`cd: no such directory: ${target}`, "error")
        ]);
        if (next) {
          setDirectory(next);
        }
        return;
      }

      if (command === "ls" || command === "dir") {
        const path = resolvePath(directory, target);
        const node = filesystem[path];
        if (!node) {
          append([commandLine, output(`${command}: cannot access '${target}': no such file or directory`, "error")]);
          return;
        }

        append([
          commandLine,
          output(node.kind === "dir" ? formatEntries(path) ?? "" : target || path.replace(/^~\//, ""))
        ]);
        return;
      }

      if (command === "cat") {
        const path = resolvePath(directory, target);
        const node = filesystem[path];
        if (!target) {
          append([commandLine, output("cat: missing file operand", "error")]);
          return;
        }
        if (!node) {
          append([commandLine, output(`cat: ${target}: no such file`, "error")]);
          return;
        }
        if (node.kind !== "file") {
          append([commandLine, output(`cat: ${target}: is a directory`, "error")]);
          return;
        }
        append([commandLine, ...(node.content ?? []).map((text) => output(text))]);
        return;
      }

      const outputs: Record<string, string[]> = {
        help: helpOutput,
        pwd: [directory],
        whoami: [
          "charles",
          "roles     : admin, operator",
          "clearance : local-only",
          "alias     : tuna (childhood), puddles (online)",
        ],
        about: aboutOutput,
        agents: agentsOutput,
        pipeline: pipelineOutput,
        features: featureOutput,
        roadmap: roadmapOutput,
        sudo: [
          "Permission denied.",
          "Approval gate is active. Telegram notification sent.",
          "charles has been notified. he is probably not happy about this.",
        ],
        "sudo rm -rf /": [
          "Dispatcher blocked.",
          "Revert snapshot required before destructive operations.",
          "This is by design. You're welcome.",
        ],
        tuna: [
          "Hey Tuna. You built this.",
          "Now go touch grass.",
        ],
        puddles: dogOutput,
        history: fakeHistory,
        "uname -a": ["PuddlesOS 0.1.0 evo-x2 amdgpu/gfx1151 RDNA3.5 #compliance-first SMP Tue Jun 10 02:14:37 UTC 2026"],
        top: [
          "PID   AGENT       STATE     CPU    MEMORY",
          "101   parser      running   03%    512MB",
          "102   scout       running   08%    1.4GB",
          "103   auditor     running   05%    768MB",
          "104   scorer      running   02%    620MB",
          "105   planner     idle      00%    490MB",
          "106   dispatcher  waiting   00%    360MB",
          "107   curator     running   01%    200MB",
          "",
          "approval gate: armed   telegram: connected   revert: ready",
        ],
        "ps aux": psAuxOutput,
        "ssh root@localhost": [
          "Access denied.",
          "Use Telegram approval gate.",
          "Seriously. That's the whole point.",
        ],
        json: jsonOutput,
        "who is json": whoIsJsonOutput,
        "git blame": gitBlameOutput,
        neofetch: neofetchOutput,
        "ping puddles.sh": pingOutput,
        "df -h": dfOutput,
        fortune: fortuneOutput,
        "npm install": npmInstallOutput,
        "curl puddles.sh": curlOutput,
      };

      append([
        commandLine,
        ...(outputs[input] ?? [`command not found: ${input}`]).map((text) =>
          output(text, outputs[input] ? "output" : "error")
        )
      ]);
    },
    [append, directory, onClose, prompt]
  );

  const historyStep = useCallback(
    (direction: "up" | "down", currentInput: string) => {
      if (history.length === 0) {
        return currentInput;
      }

      const nextIndex =
        direction === "up"
          ? historyIndex === null
            ? history.length - 1
            : Math.max(0, historyIndex - 1)
          : historyIndex === null
            ? null
            : historyIndex + 1 >= history.length
              ? null
              : historyIndex + 1;

      setHistoryIndex(nextIndex);
      return nextIndex === null ? "" : history[nextIndex];
    },
    [history, historyIndex]
  );

  const autocomplete = useCallback(
    (input: string) => {
      const hasTrailingSpace = /\s$/.test(input);
      const parts = input.split(/\s+/);
      const command = parts[0] ?? "";

      if (!input.trim()) {
        return input;
      }

      if (!hasTrailingSpace && parts.length === 1) {
        const matches = baseCommands.filter((candidate) => candidate.startsWith(command));
        return matches.length === 1 ? matches[0] : input;
      }

      const partial = hasTrailingSpace ? "" : parts[parts.length - 1] ?? "";
      const prefixParts = hasTrailingSpace ? parts.filter(Boolean) : parts.slice(0, -1);
      const prefix = `${prefixParts.join(" ")}${prefixParts.length ? " " : ""}`;

      if (command === "cd") {
        const matches = listMatches(directory, partial, true);
        return matches.length === 1 ? `${prefix}${matches[0].replace(/\/$/, "")}` : input;
      }

      if (command === "ls" || command === "dir") {
        const matches = listMatches(directory, partial);
        return matches.length === 1 ? `${prefix}${matches[0]}` : input;
      }

      if (command === "cat") {
        const matches = listMatches(directory, partial).filter((match) => {
          const path = resolvePath(directory, match);
          return filesystem[path]?.kind === "file";
        });
        return matches.length === 1 ? `${prefix}${matches[0]}` : input;
      }

      const match = knownCommands.find((candidate) => candidate.startsWith(input.trim()));
      return match ?? input;
    },
    [directory]
  );

  const resetTerminal = useCallback(() => {
    setLines([]);
    setDirectory("~");
    setHistoryIndex(null);
    setIsHacking(false);
  }, []);

  return {
    autocomplete,
    directory,
    historyStep,
    isHacking,
    lines,
    prompt,
    resetTerminal,
    runCommand,
    setLines
  };
}
