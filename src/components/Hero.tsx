import { useState, useEffect } from 'react';

const LINES = [
  'puddles@sh:~$ ./puddles --init',
  'Initializing Puddles v1.0.0...',
  'Local AI runtime: online',
  'Compliance mode: enforced',
  'Human approval gate: active',
  'Ready.',
];

const FULL_TEXT = LINES.join('\n');
const CHAR_DELAY = 50;
const LINE_PAUSE = 380;

export function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let cancelled = false;

    const typeNext = () => {
      if (cancelled) return;
      if (i >= FULL_TEXT.length) {
        setDone(true);
        return;
      }
      const char = FULL_TEXT[i];
      i++;
      setDisplayed(FULL_TEXT.slice(0, i));
      setTimeout(typeNext, char === '\n' ? LINE_PAUSE : CHAR_DELAY);
    };

    setTimeout(typeNext, 300);
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="hero section" id="top">
      <div className="hero-copy">
        <pre className="terminal-hero" aria-label="Puddles initialization output">
          <span>{displayed}</span>
          <span className={`terminal-cursor${done ? ' terminal-cursor--blink' : ''}`}>█</span>
        </pre>

        <div className="hero-bottom">
          <div className="hero-text">
            <p className="eyebrow">Compliance-first local AI automation</p>
            <h1>Local AI that works for IT.</h1>
            <p className="hero-subhead">
              Puddles is a compliance-first agentic automation framework for IT operations. Built
              for MSPs and regulated industries where data never leaves your infrastructure.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Request Access
              </a>
              <a className="button secondary" href="#what">
                Read the Docs
              </a>
            </div>
          </div>

          <div className="home-logo" aria-hidden="true">
            <img src="/puddleslogo.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
