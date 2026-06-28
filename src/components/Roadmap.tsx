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
  ["COMPLETE", "Phase 10", "Training loop closed — apply_corrections.py, SQLite audit log, DevHelper pipe, first curator script promotion, ops dashboard"],
  ["ACTIVE",   "Phase 11", "Hardening — SSH Tailscale lockdown, local encrypted backups, dashboard backend wiring, ExchangeOnline auth"],
  ["PENDING",  "Phase 12", "Untropy — watches MS Graph SDK releases, patches corpus before breaking changes land"],
  ["PENDING",  "Phase 13", "Expand scope: Zendesk, Teams vision, LiteLLM routing"],
  ["PENDING",  "Phase 14", "Self-extending script library, GitHub candidate scout"],
  ["PENDING",  "Phase 15", "Support research bot — Reddit, whitepapers, vendor forums"],
  ["PENDING",  "Phase 16", "Audio training pipeline — Whisper hot mic, scored transcript corpus ingestion"],
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
