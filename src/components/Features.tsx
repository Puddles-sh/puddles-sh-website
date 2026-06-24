export const features = [
  {
    name: "Runs Locally",
    body: "Models run on your hardware via Ollama. No data leaves your network. Built for industries that legally cannot use cloud AI."
  },
  {
    name: "Human Approval Gate",
    body: "Every action requires explicit approval via Telegram before execution. Approve or reject from your phone in one tap - no laptop required."
  },
  {
    name: "Full Audit Trail",
    body: "Every agent decision, every retrieved document, every executed script is logged with a timestamp and request ID. Compliance-ready from day one."
  },
  {
    name: "Azure Key Vault Integration",
    body: "Credentials never touch a log file. Secrets are pulled from Key Vault into memory at runtime and discarded after use. Per-client isolation built in."
  },
  {
    name: "Self-Improving Routing",
    body: "Claude Opus scores model outputs against a rubric. Scored results train a local Scorer agent that routes requests to the best model for each task - without touching the cloud API on every run."
  },
  {
    name: "Script Library + GitHub Scout",
    body: "A validated PowerShell library covers common Intune/Graph/Entra operations. When a task has no local match, the system searches GitHub for candidates, scores them, and surfaces the best one for your review."
  }
];

export function Features() {
  return (
    <div className="feature-grid">
      {features.map((feature) => (
        <article className="feature-card" key={feature.name}>
          <h3>{feature.name}</h3>
          <p>{feature.body}</p>
        </article>
      ))}
    </div>
  );
}
