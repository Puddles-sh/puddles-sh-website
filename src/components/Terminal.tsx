import { useEffect, useRef, useState } from "react";
import type { CSSProperties, FormEvent, KeyboardEvent as ReactKeyboardEvent } from "react";
import { bootLines } from "../data/terminalCommands";
import { useTerminal } from "../hooks/useTerminal";

function MatrixRain() {
  const columns = Array.from({ length: 42 }, (_, index) => index);
  return (
    <div className="matrix-rain" aria-hidden="true">
      {columns.map((column) => (
        <span key={column} style={{ animationDelay: `${(column % 9) * 120}ms` }}>
          10110 PUDDLES LOCAL ONLY 01001 APPROVAL
        </span>
      ))}
    </div>
  );
}

export function Terminal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [input, setInput] = useState("");
  const [bootIndex, setBootIndex] = useState(0);
  const [bootText, setBootText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const { autocomplete, historyStep, isHacking, lines, prompt, resetTerminal, runCommand, setLines } =
    useTerminal(onClose);

  function focusInput() {
    window.requestAnimationFrame(() => {
      inputRef.current?.focus({ preventScroll: true });
    });
  }

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    }

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setInput("");
      setBootIndex(0);
      setBootText("");
      return;
    }

    resetTerminal();
    focusInput();
  }, [isOpen, resetTerminal]);

  useEffect(() => {
    if (isOpen && bootIndex >= bootLines.length) {
      focusInput();
    }
  }, [bootIndex, isOpen]);

  useEffect(() => {
    if (!isOpen || bootIndex >= bootLines.length) {
      return;
    }

    const line = bootLines[bootIndex];
    if (bootText.length < line.length) {
      const timer = window.setTimeout(() => {
        setBootText(line.slice(0, bootText.length + 1));
      }, 40);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setLines((current) => [
        ...current,
        { id: Date.now() + bootIndex, kind: "boot", text: line }
      ]);
      setBootIndex((current) => current + 1);
      setBootText("");
    }, 180);
    return () => window.clearTimeout(timer);
  }, [bootIndex, bootText, isOpen, setLines]);

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight });
  }, [lines, bootText]);

  if (!isOpen) {
    return null;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    runCommand(input);
    setInput("");
  }

  function handleKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      runCommand(input);
      setInput("");
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setInput((current) => historyStep("up", current));
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setInput((current) => historyStep("down", current));
    }

    if (event.key === "Tab") {
      event.preventDefault();
      setInput((current) => autocomplete(current));
    }
  }

  const bootComplete = bootIndex >= bootLines.length;

  return (
    <div className="terminal-overlay" role="dialog" aria-modal="true" aria-label="Puddles terminal">
      <div className="terminal-scanline" aria-hidden="true" />
      {isHacking ? <MatrixRain /> : null}
      <header className="terminal-titlebar">
        <span>Puddles OS</span>
        <button type="button" onClick={onClose} aria-label="Close terminal">
          ✕
        </button>
      </header>
      <div className="terminal-output" ref={outputRef} onClick={() => inputRef.current?.focus()}>
        {lines.map((line) => (
          <pre className={`terminal-line ${line.kind}`} key={line.id}>
            {line.text}
          </pre>
        ))}
        {bootText ? <pre className="terminal-line boot">{bootText}</pre> : null}
        <form className="terminal-input-row" onSubmit={handleSubmit}>
          <label htmlFor="terminal-input">{prompt}</label>
          <input
            id="terminal-input"
            ref={inputRef}
            value={input}
            style={{ "--terminal-input-chars": input.length } as CSSProperties}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            readOnly={!bootComplete}
            aria-disabled={!bootComplete}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
          />
          <span className="terminal-cursor" aria-hidden="true" />
        </form>
      </div>
    </div>
  );
}
