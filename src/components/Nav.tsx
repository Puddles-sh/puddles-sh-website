const navItems = [
  { id: "problem", label: "Problem" },
  { id: "what", label: "What" },
  { id: "how", label: "How" },
  { id: "features", label: "Features" },
  { id: "roadmap", label: "Roadmap" },
  { id: "contact", label: "Contact" }
];

export function Nav({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  return (
    <header className="site-nav">
      <a className="brand" href="#top" aria-label="Puddles home">
        <img src="/puddleslogo.png" alt="" />
        <span>Puddles.sh</span>
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={`#${item.id}`} key={item.id}>
            {item.label}
          </a>
        ))}
      </nav>
      <button className="terminal-open" type="button" onClick={onOpenTerminal}>
        <span aria-hidden="true">&gt;_</span> Terminal
      </button>
    </header>
  );
}
