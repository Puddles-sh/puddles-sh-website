export const phases = [
  ["COMPLETE", "Phase 1", "Hardware, OS, kernel 6.16.9, ROCm drivers, GPU memory unlock"],
  ["COMPLETE", "Phase 2", "Model benchmarking, Opus scoring, routing table drafted"],
  ["ACTIVE",   "Phase 3", "RAG pipeline — Scout, Indexer, Qdrant, Retriever, model stack validation"],
  ["PENDING",  "Phase 4", "Model routing locked, task-specific system prompts built"],
  ["PENDING",  "Phase 5", "First support agent — Parser, intent classification"],
  ["PENDING",  "Phase 6", "Azure Key Vault integration, credential isolation"],
  ["PENDING",  "Phase 7", "Telegram approval gate, Tailscale remote access"],
  ["PENDING",  "Phase 8", "Planner + Dispatcher agents, human-in-the-loop execution"],
  ["PENDING",  "Phase 9", "Foundation complete — all 7 agents operational"],
  ["PENDING",  "Phase 10", "Expand scope: Zendesk, Teams vision, LiteLLM routing"],
  ["PENDING",  "Phase 11", "Self-extending script library, GitHub candidate scout"],
  ["PENDING",  "Phase 12", "Support research bot — Reddit, whitepapers, vendor forums"],
  ["PENDING",  "Phase 13", "Memory Librarian, Open WebUI deep integration"],
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
