# Puddles.sh — Website Build Brief

## Project

Build a marketing and documentation website for **Puddles.sh** — a compliance-first,
local AI automation framework for IT operations and MSP workflows.

**Domain:** puddles.sh
**Stack:** React + TypeScript + Vite
**Styling:** Tailwind CSS
**Deployment target:** Static site (Cloudflare Pages or Vercel)

---

## Design Direction

### Standard Mode (the only site mode)
- Clean, dark-first design. Think Vercel or Linear — minimal, precise, confident.
- Dark background (#0a0a0a or similar), off-white text, single accent color (cyan `#00d4ff` or muted teal)
- No gradients, no blur effects, no excessive animation
- Monospace font for code snippets and technical content (JetBrains Mono or similar)
- Sans-serif for body (Inter or Geist)
- Grid-based layout, generous whitespace
- Subtle border lines, not shadows

**There is no full-site terminal mode or theme toggle.** The terminal experience is a separate overlay — see Terminal Mode section below.

### Hero Section Layout
- Full-width headline — do NOT split into left text / right logo card
- The logo card with dark-icon-on-dark-background is invisible and wastes space — remove it from the hero
- Instead, put a subtle terminal animation block below the headline (the `./puddles --init` sequence from the copy section) — this communicates the product personality without a floating logo card
- The logo mark appears only in the nav (top-left), small and sharp

---

## Site Structure

### Pages / Sections (single page with anchor nav)

1. **Hero**
2. **What is Puddles**
3. **The Problem It Solves**
4. **How It Works** (pipeline diagram)
5. **Features**
6. **Who It's For**
7. **Roadmap**
8. **Get Started / Contact**

---

## Copy

### Hero

**Headline:**
`Local AI that works for IT.`

**Subheadline:**
Puddles is a compliance-first agentic automation framework for IT operations.
Built for MSPs and regulated industries where data never leaves your infrastructure.

**CTA buttons:**
- `View on GitHub` → https://github.com/Puddles-sh/ai-runtime-starter
- `Read the Docs`

**Terminal mode hero:**
```
puddles@sh:~$ ./puddles --init
Initializing Puddles v0.1.0...
Local AI runtime: online
Compliance mode: enforced
Human approval gate: active
Ready.
```

---

### What is Puddles

Puddles is a seven-agent orchestration framework that runs entirely on your hardware.
It parses IT requests, retrieves relevant context, audits proposed actions for accuracy,
scores confidence and risk, generates a PowerShell or automation script, gets your
approval via Telegram, and executes — with a full audit trail and a revert on every action.

No cloud. No third-party AI processing your client data. No black box.

---

### The Problem It Solves

IT operations work is repetitive, high-stakes, and hard to delegate. Most AI tools
require sending your data to someone else's server — which is a non-starter for
healthcare, legal, financial, and government clients.

Puddles runs on your infrastructure. Client credentials stay in Azure Key Vault.
Requests never leave your network. Every action is logged, reversible, and approved
by a human before it executes.

The goal isn't to replace the engineer. It's to eliminate the 50-hour week.

---

### How It Works

**Render this as a horizontal pipeline diagram with connecting arrows:**

```
Request
  → Parser        (classifies intent and extracts entities)
  → Scout         (retrieves memory, script templates, prior context)
  → Auditor       (verifies cmdlets are current, flags knowledge gaps)
  → Scorer        (rates confidence and risk, recommends routing)
  → Planner       (generates PowerShell or automation script)
  → [You approve via Telegram]
  → Dispatcher    (executes, snapshots state for revert)
  → Curator       (surfaces memory candidates from the completed run)
```

Every step is logged. Every action has a revert. Nothing executes without your sign-off.

---

### Features

Present as a clean feature grid (3 columns, 2 rows):

**Runs Locally**
Models run on your hardware via Ollama. No data leaves your network. Built for
industries that legally cannot use cloud AI.

**Human Approval Gate**
Every action requires explicit approval via Telegram before execution. Approve or
reject from your phone in one tap — no laptop required.

**Full Audit Trail**
Every agent decision, every retrieved document, every executed script is logged
with a timestamp and request ID. Compliance-ready from day one.

**Azure Key Vault Integration**
Credentials never touch a log file. Secrets are pulled from Key Vault into memory
at runtime and discarded after use. Per-client isolation built in.

**Self-Improving Routing**
Claude Opus scores model outputs against a rubric. Scored results train a local
Scorer agent that routes requests to the best model for each task — without
touching the cloud API on every run.

**Script Library + GitHub Scout**
A validated PowerShell library covers common Intune/Graph/Entra operations. When
a task has no local match, the system searches GitHub for candidates, scores them,
and surfaces the best one for your review.

---

### Who It's For

**MSPs and IT consultants** who manage multiple client tenants and need automation
that is auditable, reversible, and client-isolated.

**Regulated industries** — healthcare, legal, financial services, government — where
client data cannot be processed by third-party AI services.

**IT engineers** who are done sacrificing 50 hours a week to stay on top of repetitive
operational tasks and want to build a system that scales without them.

---

### Roadmap

Render as a vertical timeline or phase list:

- **Phase 1-3** — Hardware, models, benchmarking, git standards *(in progress)*
- **Phase 4** — First support agent, manual output mode, Azure Key Vault
- **Phase 5** — Training review, routing table validation
- **Phase 6** — Telegram approval gate, Tailscale remote access, Open WebUI
- **Phase 7** — Foundation complete
- **Phase 8** — Memory Librarian, Qdrant migration
- **Phase 9** — Automated execution with human confirmation
- **Phase 10** — Expand scope: Zendesk, Teams vision, LiteLLM routing
- **Phase 11** — Live RAG pipeline (MS Graph source of truth)
- **Phase 12** — Self-extending script library, GitHub candidate scout
- **Phase 13** — Support research bot (Reddit, whitepapers, vendor forums)

---

### Get Started / Contact

**Headline:** Built in the open. Designed for production.

The framework is open source and actively developed.
Star the repo, follow the build, or reach out if you're building something similar.

- GitHub: https://github.com/Puddles-sh/ai-runtime-starter
- Email: puddles.sh@gmail.com

---

## Terminal Mode — Fullscreen Overlay (Fake OS)

**This is NOT a site-wide color swap or theme toggle.**

The standard site is unchanged. A `>_ Terminal` button in the top-right nav opens a
**fullscreen overlay** — a fake interactive OS terminal that sits on top of the site.
Escape or the ✕ button closes it. The standard site resumes underneath.

### Trigger
- Nav button: `>_ Terminal` (top-right, always visible in standard mode)
- Keyboard shortcut: `` ` `` (backtick) toggles open/close

### On Open — Boot Sequence
Animate these lines in one at a time (typewriter effect, ~40ms per character):

```
puddles@sh:~$ boot
Loading Puddles OS v0.1.0...
Kernel: amdgpu/gfx1151  Memory: 128GB unified  Mode: local-only
Ready. Type 'help' for available commands.
puddles@sh:~$ █
```

### Commands (type at the prompt, Enter to run)

| Command | Output |
|---|---|
| `help` | Lists all non-secret commands with one-line descriptions |
| `ls` | `agents/  scripts/  logs/  secrets/  README.md` |
| `ls agents/` | `parser  scout  auditor  scorer  planner  dispatcher  curator` |
| `ls scripts/` | `intune/  graph/  entra/  azure-kv/` |
| `cat README.md` | Short blurb about the project |
| `cd [dir]` | Navigates fake filesystem, updates prompt to `puddles@sh:~/agents$` etc. |
| `whoami` | `charles  roles: admin,operator  clearance: local-only` |
| `about` | Returns the Puddles mission statement (2–3 sentences) |
| `features` | Lists the 6 features as bulleted terminal output |
| `roadmap` | Renders all 13 phases as `[ACTIVE  ]` / `[PENDING ]` |
| `github` | Opens https://github.com/Puddles-sh/ai-runtime-starter in a new tab |
| `clear` | Clears terminal output, shows fresh prompt |
| `exit` | Closes the overlay |

### Easter Eggs (hidden — not listed in `help`)

| Command | Response |
|---|---|
| `sudo` | `Permission denied. Approval gate is active. Telegram notification sent.` |
| `sudo rm -rf /` | `Dispatcher blocked: revert snapshot required before destructive operations.` |
| `tuna` | `Hey Tuna. You built this.` |
| `puddles` | Short ASCII art dog or `woof.` |
| `hack` | Matrix-style green character rain fills the terminal for 3 seconds, then clears |
| `history` | Fake prior command history showing realistic ops commands |
| `uname -a` | `PuddlesOS 0.1.0 evo-x2 amdgpu/gfx1151 RDNA3.5 #compliance-first` |
| `top` | Fake process list (parser, scout, auditor, scorer all "running") |
| `ssh root@localhost` | `Access denied. Use Telegram approval gate.` |

### UI Details
- Input always docked at the bottom; output scrolls up
- Arrow up/down: cycle through command history
- Tab: autocomplete known commands
- Unknown commands: `command not found: [input]` (no error thrown)
- Blinking block cursor (`█`) after the prompt
- Subtle scanline overlay (CSS only, `repeating-linear-gradient`, ~3% opacity)
- No scrollbar visible — fade out at top if output exceeds height
- Monospace font throughout (JetBrains Mono)

---

## Technical Requirements

- React 18 + TypeScript strict mode
- Vite build tool
- Tailwind CSS v3
- No UI component library — custom components only
- Terminal open/closed state managed in local component state (no context needed — it's just an overlay)
- Terminal overlay: `position: fixed`, full viewport, `z-index: 9999`, black background
- Mobile responsive — terminal overlay works on small screens (full height, input pinned to bottom)
- No external API calls — fully static
- `<head>` meta: OG tags, Twitter card, description for SEO
- Favicon: text-based, monospace `p.` on dark background (generate as SVG favicon)

---

## File Structure

```
puddles-site/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.tsx             # includes >_ Terminal button
│   │   ├── Hero.tsx            # full-width, no logo card, terminal animation block
│   │   ├── Pipeline.tsx        # agent pipeline diagram
│   │   ├── Features.tsx
│   │   ├── Roadmap.tsx
│   │   ├── Contact.tsx
│   │   └── Terminal.tsx        # fullscreen overlay fake OS — NOT a theme wrapper
│   ├── hooks/
│   │   └── useTerminal.ts      # command parser, history, filesystem state
│   ├── data/
│   │   └── terminalCommands.ts # command definitions, easter egg responses
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## Notes for Codex

- Build the full site in one pass — all components, all copy, fully wired up
- **Terminal is a fullscreen overlay, not a site-wide theme.** The standard site never changes appearance. No ThemeContext needed.
- The `>_ Terminal` button in the nav opens the overlay. Escape or ✕ closes it. That is the only toggle.
- The pipeline diagram in "How It Works" is the centerpiece — make it visually strong
- **Hero is full-width** — no split layout with a logo card. Logo only appears in the nav, small.
- Add the `./puddles --init` terminal block in the hero as a visual element (static or with a typewriter animation)
- Avoid placeholder copy — use the copy provided above verbatim
- Pipeline step numbers (#1, #2...) are unnecessary — remove them, the step names stand alone
- No lorem ipsum anywhere
- The easter eggs are the soul of the terminal — implement all of them, including the matrix rain effect for `hack`
