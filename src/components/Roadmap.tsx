export const phases = [
  ["COMPLETE", "Phase 1", "Hardware, OS, kernel 6.16.9, ROCm drivers, GPU memory unlock"],
  ["COMPLETE", "Phase 2", "Model benchmarking, Opus scoring, routing table drafted"],
  ["COMPLETE", "Phase 3", "RAG pipeline — Scout, Indexer, Qdrant, Retriever, three-model stack locked"],
  ["ACTIVE",   "Phase 4", "Task-specific system prompts, Parser agent, production runtime"],
  ["PENDING",  "Phase 5", "First support agent — Parser, intent classification"],
  ["PENDING",  "Phase 6", "Azure Key Vault integration, credential isolation"],
  ["PENDING",  "Phase 7", "Telegram approval gate, Tailscale remote access"],
  ["PENDING",  "Phase 8", "Planner + Dispatcher agents, human-in-the-loop execution"],
  ["PENDING",  "Phase 9", "Foundation complete — all 7 agents operational"],
  ["PENDING",  "Phase 10", "Untropy — watches MS Graph SDK releases, patches corpus before breaking changes land"],
  ["PENDING",  "Phase 11", "Expand scope: Zendesk, Teams vision, LiteLLM routing"],
  ["PENDING",  "Phase 12", "Self-extending script library, GitHub candidate scout"],
  ["PENDING",  "Phase 13", "Support research bot — Reddit, whitepapers, vendor forums"],
  ["PENDING",  "Phase 14", "Memory Librarian, Open WebUI deep integration"],
  ["PENDING",  "Phase 15", "Audio training pipeline — Whisper hot mic, scored transcript corpus ingestion"],
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
