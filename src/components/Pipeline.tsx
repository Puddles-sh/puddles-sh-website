const steps = [
  ["Request", "Starts the workflow"],
  ["Parser", "classifies intent and extracts entities"],
  ["Scout", "retrieves memory, script templates, prior context"],
  ["Auditor", "verifies cmdlets are current, flags knowledge gaps"],
  ["Scorer", "rates confidence and risk, recommends routing"],
  ["Planner", "generates PowerShell or automation script"],
  ["Approval", "You approve via Telegram"],
  ["Dispatcher", "executes, snapshots state for revert"],
  ["Curator", "surfaces memory candidates from the completed run"]
];

export function Pipeline() {
  return (
    <div className="pipeline" aria-label="Puddles agent pipeline">
      {steps.map(([name, description]) => (
        <div className="pipeline-step" key={name}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}
