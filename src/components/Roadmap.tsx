export const phases = [
  ["ACTIVE", "Phase 1-3", "Hardware, models, benchmarking, git standards"],
  ["PENDING", "Phase 4", "First support agent, manual output mode, Azure Key Vault"],
  ["PENDING", "Phase 5", "Training review, routing table validation"],
  ["PENDING", "Phase 6", "Telegram approval gate, Tailscale remote access, Open WebUI"],
  ["PENDING", "Phase 7", "Foundation complete"],
  ["PENDING", "Phase 8", "Memory Librarian, Qdrant migration"],
  ["PENDING", "Phase 9", "Automated execution with human confirmation"],
  ["PENDING", "Phase 10", "Expand scope: Zendesk, Teams vision, LiteLLM routing"],
  ["PENDING", "Phase 11", "Live RAG pipeline (MS Graph source of truth)"],
  ["PENDING", "Phase 12", "Self-extending script library, GitHub candidate scout"],
  ["PENDING", "Phase 13", "Support research bot (Reddit, whitepapers, vendor forums)"]
];

export function Roadmap() {
  return (
    <div className="roadmap">
      {phases.map(([status, phase, body]) => (
        <article className="roadmap-item" key={phase}>
          <span>{status}</span>
          <h3>{phase}</h3>
          <p>{body}</p>
        </article>
      ))}
    </div>
  );
}
