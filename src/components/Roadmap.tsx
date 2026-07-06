export const phases = [
  ["COMPLETE", "Phase 1", "Hardware, OS, kernel 6.16.9, ROCm drivers, GPU memory unlock"],
  ["COMPLETE", "Phase 2", "Model benchmarking, Opus scoring, routing table drafted"],
  ["COMPLETE", "Phase 3", "RAG pipeline — Scout, Indexer, Qdrant, Retriever, three-model stack locked"],
  ["COMPLETE", "Phase 4", "Task-specific system prompts, routing config, 16 intent types"],
  ["COMPLETE", "Phase 5", "Parser agent — intent classification, entity extraction, vision path"],
  ["COMPLETE", "Phase 6", "Azure Key Vault integration, ephemeral credential injection"],
  ["COMPLETE", "Phase 7", "Telegram approval gate, risk-tiered timeouts, persistent BotListener"],
  ["COMPLETE", "Phase 8", "Planner + Dispatcher agents, audit log, snapshot/revert"],
  ["COMPLETE", "Phase 9", "Foundation complete — all 7 agents live, first production run"],
  ["COMPLETE", "Phase 10", "Script library + multi-operator support — 25 validated scripts covering Graph API and Exchange Online, NOC role with scoped access, two-step approval for destructive operations"],
  ["COMPLETE", "Phase 11", "Production hardening — Tailscale network isolation, encrypted backups, ops dashboard live, Exchange Online cert-based auth"],
  ["COMPLETE", "Phase 12", "Untropy — nightly MS Graph SDK watcher, corpus impact scanning, surfaces replacement script candidates before breaking changes reach production"],
  ["ACTIVE",   "Phase 13", "Open source release — fork production into puddles-framework, generalize for hardware beyond EVO-X2, build deployment scripts that provision a fully running instance without requiring a local Claude session"],
];

export function Roadmap() {
  return (
    <div className="roadmap">
      {phases.map(([status, phase, body]) => (
        <article
          className={`roadmap-item roadmap-item--${status.toLowerCase()}`}
          key={phase}
        >
          <span>{status}</span>
          <h3>{phase}</h3>
          <p>{body}</p>
        </article>
      ))}
    </div>
  );
}
