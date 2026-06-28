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
    body: "A local Scorer agent rates every output on confidence and cmdlet coverage. Operator corrections feed a training loop that applies confirmed patterns back to the classifier — no cloud API required on any run."
  },
  {
    name: "Script Library + Curator",
    body: "Validated PowerShell scripts are promoted from candidates to a production library through a structured review flow. Once promoted, the Planner skips generation and serves the validated script directly — no hallucination risk on covered intents."
  },
  {
    name: "DevHelper Training Mode",
    body: "A separate WebUI pipe runs the full pipeline without executing anything. Use it to build corpus and validate scripts before an integration is wired. Every session generates training data automatically through normal use."
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
