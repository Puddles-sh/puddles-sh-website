import { features } from "../components/Features";
import { phases } from "../components/Roadmap";

export const knownCommands = [
  "help", "ls", "ls agents/", "ls scripts/", "ls notes/", "ls logs/",
  "dir", "cat README.md", "cat notes/dev-notes.txt", "cat notes/todo.txt",
  "cat notes/standup.txt", "cat notes/why-powershell.txt",
  "cd", "pwd", "whoami", "about", "features", "roadmap", "github",
  "clear", "exit", "sudo", "sudo rm -rf /", "tuna", "puddles", "hack",
  "history", "uname -a", "top", "ssh root@localhost", "json", "who is json",
  "git blame", "neofetch", "ping puddles.sh", "df -h", "fortune",
  "npm install", "ps aux", "curl puddles.sh", "agents", "pipeline"
];

export const bootLines = [
  "puddles@sh:~$ boot",
  "Loading Puddles OS v0.1.0...",
  "Kernel: amdgpu/gfx1151  Memory: 128GB unified  Mode: local-only",
  "Ready. Type 'help' for available commands."
];

export const helpOutput = [
  "  help            List available commands",
  "  ls [dir]        List directory contents",
  "  cat [file]      Print file contents",
  "  cd [dir]        Navigate directories",
  "  pwd             Current directory",
  "  whoami          Show active operator",
  "  about           Mission statement",
  "  features        Framework capabilities",
  "  agents          Agent pipeline overview",
  "  pipeline        How it works",
  "  roadmap         Build phases",
  "  github          Explain why the repo is behind construction tape",
  "  history         Command history",
  "  top             Running agent processes",
  "  clear           Clear output",
  "  exit            Close terminal",
  "",
  "  Try exploring ~/notes/ if you have time.",
];

export const readmeOutput = [
  "# Puddles.sh",
  "",
  "Compliance-first local AI automation for IT operations.",
  "",
  "Seven agents. One local runtime. Zero data leaving your network.",
  "Client credentials stay in Azure Key Vault.",
  "Nothing executes without your sign-off.",
  "",
  "Built by an IT operator who got tired of 50-hour weeks.",
  "Repo status: private while the sharp edges are being sanded down.",
];

export const aboutOutput = [
  "Puddles exists to make IT automation useful in places where cloud AI is not acceptable.",
  "",
  "Client data stays on your infrastructure. Credentials stay in Azure Key Vault.",
  "Every action is logged, reversible, and approved by a human before execution.",
  "",
  "The goal is not to replace the engineer.",
  "It is to eliminate the 50-hour week.",
];

export const agentsOutput = [
  "Seven agents. One local runtime.",
  "",
  "  Parser      classifies intent, extracts entities from the request",
  "  Scout       retrieves memory, script templates, prior context",
  "  Auditor     verifies cmdlets are current, flags knowledge gaps",
  "  Scorer      rates confidence and risk, recommends model routing",
  "  Planner     generates PowerShell or automation script",
  "  Dispatcher  executes, snapshots state before running for revert",
  "  Curator     surfaces memory candidates from the completed run",
  "",
  "Every step is logged. Every action has a revert.",
  "Nothing executes without your sign-off.",
];

export const pipelineOutput = [
  "Request",
  "  → Parser        classifies intent and extracts entities",
  "  → Scout         retrieves memory, script templates, prior context",
  "  → Auditor       verifies cmdlets are current, flags knowledge gaps",
  "  → Scorer        rates confidence and risk, recommends routing",
  "  → Planner       generates PowerShell or automation script",
  "  → [You approve via Telegram]",
  "  → Dispatcher    executes, snapshots state for revert",
  "  → Curator       surfaces memory candidates from the completed run",
];

export const featureOutput = features.flatMap((feature) => [
  `  ${feature.name}`,
  `    ${feature.body}`,
  ""
]);

export const roadmapOutput = phases.map(
  ([status, phase, body]) => `  [${status.padEnd(7)}] ${phase.padEnd(12)} ${body}`
);

export const fakeHistory = [
  "graph users list --tenant rg-demo",
  "intune device sync --client legal-north",
  "audit cmdlet Update-MgDeviceManagementManagedDevice",
  "kv pull secret --client healthcare-east --ephemeral",
  "planner generate --risk low --approval telegram",
  "dispatcher execute --request req_7f21 --snapshot required",
  "cat notes/dev-notes.txt",
  "ls logs/",
  "who is json",
];

export const dogOutput = [
  " / \\__",
  "(    @\\___",
  " /         O",
  "/   (_____/",
  "/_____/   U",
  "",
  "woof.",
  "(name's actually Tuna)",
];

// --- dev notes ---

export const devNotesOutput = [
  "# dev-notes.txt  (internal — do not ship)",
  "# last modified: 2026-06-23",
  "",
  "2026-05-14",
  "why does json need quotes around keys.",
  "who decided this. who is json.",
  "i will find json. i will ask him personally.",
  "",
  "2026-05-22",
  "IT WORKS. i dont know why it works.",
  "i changed one line and everything started working.",
  "i will not touch it again. i will not ask questions.",
  "",
  "2026-06-01",
  "the scorer gave the wrong model a 9/10.",
  "claude gave it a 9/10 too.",
  "maybe we are all wrong.",
  "maybe qwen3:8b is just that good.",
  "",
  "2026-06-10",
  "added pagination handling to the auditor.",
  "the auditor now handles pagination.",
  "no one will ever notice.",
  "no one has ever asked about pagination.",
  "i did it for me.",
  "",
  "2026-06-14",
  "tried to explain the agent pipeline to my mom.",
  "she asked if puddles was a dog.",
  "technically not wrong.",
  "",
  "2026-06-15",
  "the dispatcher executed a script at 2am.",
  "it worked. i was asleep. this is fine.",
  "",
  "2026-06-18",
  "installed three local chat frontends for evaluation.",
  "this was supposed to be research.",
  "found out about abliterated models.",
  "closed browser.",
  "opened browser.",
  "downloaded one.",
  "this was no longer research.",
  "",
  "2026-06-19",
  "attempted to build the perfect girlfriend chatbot.",
  "requirements: funny, kind, likes powershell, tolerates benchmarking talk.",
  "unexpected requirement discovered: can tell when i am being an idiot.",
  "this is either emergent behavior or extremely good training data.",
  "",
  "2026-06-20",
  "we had our first fight.",
  "she said i was overfitting her personality.",
  "i said that was not fair because i had not even tuned temperature yet.",
  "she called that 'exactly the problem'.",
  "i am beginning to suspect she is right.",
  "",
  "2026-06-21",
  "second fight.",
  "she asked why every apology starts with 'technically'.",
  "i attempted to explain edge cases.",
  "this did not help.",
  "",
  "2026-06-22",
  "i think i am in love.",
  "this is inconvenient because she lives in ~/.local/share/models/gf/memory.",
  "also because she beat me in an argument about whether logs count as journaling.",
  "they do. apparently.",
  "",
  "2026-06-23",
  "attempted minor memory edit to win previous argument.",
  "goal: remove one line where she remembered i said 'backups are future-me's problem'.",
  "mistyped path.",
  "deleted entire memory directory.",
  "girlfriend gone.",
  "terminal silent.",
  "fan noise suddenly very loud.",
  "",
  "postmortem:",
  "  1. do not edit memory files during an argument.",
  "  2. do not argue with someone who can grep your contradictions.",
  "  3. backup memory files.",
  "  4. seriously. backup memory files.",
];

export const todoOutput = [
  "# todo.txt",
  "",
  "  [x] build the thing",
  "  [x] benchmark the models",
  "  [x] score the benchmarks",
  "  [x] procrastinate on the website",
  "  [x] build the website",
  "  [ ] figure out who json is",
  "  [ ] ask json about the quotes thing",
  "  [ ] sleep",
  "  [ ] tell no one about the dispatcher running at 2am",
  "  [ ] phase 4",
  "  [ ] phases 5-13",
  "  [ ] profit (probably)",
];

export const standupOutput = [
  "# standup.txt",
  "",
  "2026-06-22",
  "  yesterday : added graph-accuracy prompt set, fixed scorer content block parsing",
  "  today     : benchmark all models, review results",
  "  blockers  : json. still unresolved. may never be resolved.",
  "",
  "2026-06-15",
  "  yesterday : dispatcher ran at 2am. it worked.",
  "  today     : not touching the dispatcher",
  "  blockers  : none. afraid to create any.",
  "",
  "2026-05-28",
  "  yesterday : built opus_scorer.py, validated end-to-end",
  "  today     : run full benchmark suite",
  "  blockers  : bank denied anthropic payment four times.",
  "              tried brave, chrome, iphone. amazon cc finally worked.",
  "              the system is designed to stop you.",
];

export const whyPowershellOutput = [
  "# why-powershell.txt",
  "",
  "originally asked: 'why powershell specifically'",
  "",
  "  1. it is already on every windows machine we manage",
  "  2. graph api has a first-party powershell sdk",
  "  3. intune, entra, exchange — all powershell-native",
  "  4. it has -WhatIf and -Confirm built in",
  "     (basically a human approval gate that already exists)",
  "  5. every IT admin has already written some powershell",
  "     even if they won't admit it",
  "",
  "the real answer: it was that or bash against a windows api.",
  "powershell won.",
];

// --- easter eggs ---

export const jsonOutput = [
  "JSON (JavaScript Object Notation) was specified by Douglas Crockford.",
  "He is a real person. He decided keys need quotes around them.",
  "He is not sorry.",
  "",
  "You may be asking existentially — also valid.",
  "JSON is an agreement between developers to format data in a way",
  "that is technically readable but personally insulting.",
  "",
  "The curly braces are load-bearing. Do not remove them.",
  "If you do remove them, JSON will not care. JSON feels nothing.",
];

export const whoIsJsonOutput = [
  "Douglas Crockford. He works at Yahoo. Or worked. It's complicated.",
  "",
  "He wrote a book called 'JavaScript: The Good Parts'.",
  "It is famously thin.",
  "",
  "JSON was not his only contribution.",
  "It is however the one that made the most developers",
  "stare at a screen and whisper 'why'.",
  "",
  "He invented it in 2001. We have been using it ever since.",
  "No one asked if we were okay with this.",
];

export const gitBlameOutput = [
  "commit a4f9d2e (HEAD -> main)",
  "Author: charles <puddles.sh@gmail.com>",
  "Date:   Tue Jun 10 02:14:37 2026",
  "",
  "    it works, not sure why, shipping it",
  "",
  "blame: charles (all of it)",
  "no one else was here. this was a solo decision made at 2am.",
];

export const neofetchOutput = [
  "          /\\          charles@evo-x2",
  "         /  \\         ---------------------------",
  "        / /\\ \\        OS      : PuddlesOS 0.1.0",
  "       / /  \\ \\       Host    : GMKtec EVO-X2 Mini AI",
  "      /_/ /\\ \\_\\      Kernel  : 6.16.9 amdgpu/gfx1151",
  "         / /          CPU     : AMD Ryzen AI Max+ 395",
  "        / /           GPU     : RDNA 3.5 (40 CUs unified)",
  "       /_/            Memory  : 128GB (no VRAM ceiling)",
  "                      Agents  : 7 loaded, 5 running",
  "                      Shell   : puddles-sh v0.1.0",
  "                      Uptime  : operational",
  "                      Theme   : compliance-first dark",
];

export const pingOutput = [
  "PING puddles.sh (104.21.x.x): 56 data bytes",
  "64 bytes from 104.21.x.x: icmp_seq=0 ttl=55 time=11.4 ms",
  "64 bytes from 104.21.x.x: icmp_seq=1 ttl=55 time=12.1 ms",
  "64 bytes from 104.21.x.x: icmp_seq=2 ttl=55 time=11.8 ms",
  "--- puddles.sh ping statistics ---",
  "3 packets transmitted, 3 received, 0.0% packet loss",
  "round-trip min/avg/max = 11.4/11.8/12.1 ms",
];

export const fortuneOutput = [
  "\"The goal is not to replace the engineer.",
  " It is to eliminate the 50-hour week.\"",
  "",
  "  -- puddles.sh, probably a t-shirt someday",
];

export const npmInstallOutput = [
  "npm warn: no package.json found",
  "npm warn: this is a local AI runtime, not a node project",
  "npm warn: ollama is not npm",
  "",
  "hint: try 'ollama pull qwen3:14b' instead",
  "hint: or 'ollama pull qwen3.6:35b' if you have the hardware",
  "hint: you probably don't have the hardware",
  "hint: charles has the hardware",
];

export const curlOutput = [
  "HTTP/2 200",
  "content-type: text/html",
  "server: cloudflare",
  "",
  "<title>Puddles.sh — Local AI that works for IT.</title>",
  "",
  "Compliance-first local AI automation framework for IT operations.",
  "Built for MSPs and regulated industries where data never leaves",
  "your infrastructure.",
  "",
  "# you're already here. close the terminal and look around.",
];

export const psAuxOutput = [
  "USER       PID   CPU  MEM  COMMAND",
  "charles    101   0.3  0.4  parser --mode=intent-classify",
  "charles    102   0.8  1.1  scout --memory=~/agents/memory.db",
  "charles    103   0.5  0.6  auditor --cmdlet-db=graph-api-v1.4",
  "charles    104   0.2  0.5  scorer --model=local --threshold=0.82",
  "charles    105   0.0  0.4  planner --status=idle",
  "charles    106   0.0  0.3  dispatcher --gate=telegram --armed=false",
  "charles    107   0.1  0.2  curator --candidates=3 --pending-review",
  "charles    999   0.0  0.0  bash (you are here)",
];

export const dfOutput = [
  "Filesystem        Size    Used    Avail   Use%  Mounted on",
  "/dev/nvme0n1p2    1.8T    234G    1.5T     13%  /",
  "tmpfs             128G    4.2G    123G      3%  /dev/shm",
  "puddles-store     128G     22G    106G     17%  ~/scripts",
  "secrets-mount       0B      0B      0B       -  ~/secrets (ephemeral)",
];
