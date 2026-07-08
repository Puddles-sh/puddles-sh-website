import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Pipeline } from "./components/Pipeline";
import { Roadmap } from "./components/Roadmap";
import { Terminal } from "./components/Terminal";

function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="section content-section" id={id}>
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if (event.key === "`") {
        event.preventDefault();
        setIsTerminalOpen((current) => !current);
      }
    }

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <div className="app">
      <Nav onOpenTerminal={() => setIsTerminalOpen(true)} />
      <main>
        <Hero />
        <Section id="problem" eyebrow="The Problem It Solves" title="Delegate the repeatable work without losing control.">
          <div className="copy-columns">
            <p>
              IT operations work is repetitive, high-stakes, and hard to delegate. Most AI tools
              require sending your data to someone else's server - which is a non-starter for
              healthcare, legal, financial, and government clients.
            </p>
            <p>
              Puddles runs on your infrastructure. Client credentials stay in Azure Key Vault.
              Requests never leave your network. Every action is logged, reversible, and approved by
              a human before it executes.
            </p>
            <p>The goal isn't to replace the engineer. It's to eliminate the 50-hour week.</p>
          </div>
        </Section>
        <Section id="what" eyebrow="What is Puddles" title="Seven agents. One local runtime.">
          <div className="copy-columns">
            <p>
              PUDDLES provides secure local AI software and workflow systems for IT operations.
              Everything runs on your hardware — models, context retrieval, script execution, and
              audit logs. Nothing leaves your network.
            </p>
            <p>
              We specialize in the design and development of private AI software for organizations
              that cannot use public cloud AI — healthcare, legal, financial services, and government
              clients where tenant data must stay on-premises.
            </p>
            <p>
              Services include local AI system design, private model orchestration, AI workflow
              automation, and IT support tooling — with a mandatory human approval gate before
              anything executes.
            </p>
          </div>
        </Section>
        <Section id="how" eyebrow="How It Works" title="A visible path from request to revert.">
          <Pipeline />
          <p className="section-note">
            Every step is logged. Every action has a revert. Nothing executes without your sign-off.
          </p>
        </Section>
        <Section id="features" eyebrow="Features" title="Compliance controls where the work happens.">
          <Features />
        </Section>
        <Section id="who" eyebrow="Who It's For" title="Built for operators with real constraints.">
          <div className="audience-grid">
            <article>
              <h3>MSPs and IT consultants</h3>
              <p>
                Who manage multiple client tenants and need automation that is auditable, reversible,
                and client-isolated.
              </p>
            </article>
            <article>
              <h3>Regulated industries</h3>
              <p>
                Healthcare, legal, financial services, government - where client data cannot be
                processed by third-party AI services.
              </p>
            </article>
            <article>
              <h3>IT engineers</h3>
              <p>
                Who are done sacrificing 50 hours a week to stay on top of repetitive operational
                tasks and want to build a system that scales without them.
              </p>
            </article>
          </div>
        </Section>
        <Section id="roadmap" eyebrow="Roadmap" title="The path from local runtime to live automation.">
          <Roadmap />
        </Section>
        <section className="section content-section" id="contact">
          <Contact />
        </section>
      </main>
      <footer>
        <p>Puddles.sh - Local AI that works for IT.</p>
      </footer>
      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
}
