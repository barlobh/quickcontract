const socialProofStart = 1000;
const highlights = [
  "NDA, MSA, SOW, DPA, Privacy Addendum",
  "Human-in-the-loop edits with clause locks",
  "SOC 2–aligned, audit-ready exports",
  "Regional toggles for US, UK, EU standards",
  "Redlines and risk flags before you send",
];

const faqs = [
  {
    q: "Is the output legally reliable?",
    a: "Templates are vetted by counsel, and every draft includes risk flags, change history, and human-in-the-loop review before sharing.",
  },
  {
    q: "Can I brand the contracts?",
    a: "Yes. Upload your logo, select clause packs, and export branded PDFs or DOCX with approval trails.",
  },
  {
    q: "How fast can my team ship?",
    a: "Most teams generate a procurement-ready pack (NDA + MSA + SOW) in under 5 minutes, then send for e-sign or share via link.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <header className="flex flex-col gap-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur">
            Instant Contracts AI
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI-powered contracts for founders, agencies, and legal teams.
          </h1>
          <p className="max-w-3xl text-lg text-white/80">
            Generate compliant NDAs, MSAs, SOWs, DPAs, and privacy addendums in
            seconds. Redlines, risk flags, and audit-ready exports keep counsel
            comfortable while revenue keeps moving.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:translate-y-[-1px] hover:bg-emerald-400"
            >
              Book a 10-minute demo
            </a>
            <a
              href="#social-proof"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-white/50 hover:text-white"
            >
              See how it works
            </a>
          </div>
          <div
            id="social-proof"
            className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-black/30 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-gradient-to-br from-emerald-400 to-blue-500 text-sm font-semibold text-slate-900 shadow-md shadow-emerald-400/20"
                  >
                    {idx === 0 ? "JD" : idx === 1 ? "AO" : idx === 2 ? "LM" : idx === 3 ? "TK" : "SR"}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {socialProofStart.toLocaleString()} teams started with us
                </p>
                <p className="text-xs text-white/70">
                  SaaS, creative agencies, and legal ops leads closing deals faster.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {["SOC 2–aligned", "Clause history", "eSign ready"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-emerald-500/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Why it wins
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-white">
              Clause-level control, preflight risk checks, instant exports.
            </h2>
            <p className="mt-3 text-base text-white/75">
              Draft full contract packs with pre-approved clause libraries,
              jurisdiction toggles, and AI suggestions that never overwrite your
              guardrails. Share a live link, collect e-signatures, or export
              clean DOCX/PDF for procurement.
            </p>
            <div className="mt-6 grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-semibold text-white"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2 rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-50">
              <p className="font-semibold text-emerald-200">Speed-to-sign</p>
              <p className="text-emerald-100/90">
                Teams report 70% faster turnarounds on NDAs and 50% fewer legal
                back-and-forths on MSAs after standardizing on Instant Contracts AI.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-blue-500/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Demo-ready preview
            </p>
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-sm text-white/80 shadow-inner shadow-black/40">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  <span className="h-2 w-2 rounded-full bg-rose-400" />
                  <span className="text-xs font-semibold text-white/70">
                    NDA • US • SaaS
                  </span>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold text-emerald-200">
                  Risk: Low
                </span>
              </div>
              <p className="font-semibold text-white">Confidentiality & Data</p>
              <p className="mb-4 mt-2 leading-relaxed text-white/70">
                Receiving Party shall not disclose Confidential Information except
                to personnel with a need-to-know, subject to obligations no less
                protective. If data includes personal data, Processing shall follow
                the DPA and industry-standard encryption, access controls, and
                breach notification timelines.
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {["Auto redlines", "Clause history", "One-click PDF", "Share link"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-base font-semibold text-white">
                Made for legal-grade SEO
              </p>
              <p className="mt-2 text-sm text-white/70">
                Instant Contracts AI is an AI contract generator built for
                startups, agencies, and enterprise procurement teams that need
                compliant templates fast. Secure hosting, clause-level controls,
                and analytics help you publish and track every NDA, MSA, and SOW
                without sacrificing governance.
              </p>
              <a
                href="#demo"
                className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
              >
                Compare plans
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        <section id="demo" className="grid gap-8 lg:grid-cols-[1.3fr,1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-purple-500/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-200">
              Built to rank and convert
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              AI contract generator for NDAs, MSAs, SOWs, DPAs, and vendor packs.
            </h2>
            <p className="mt-2 text-base text-white/75">
              Replace slow legal queues with AI-assisted drafting that respects
              your clause libraries. Publish compliant contracts, embed e-sign,
              and sync audit trails to your CRM and data room.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-300" />
                AI suggestions never overwrite locked clauses—guardrails stay intact.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-300" />
                Export clean DOCX/PDF and share live negotiation links with redlines.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-300" />
                Track who viewed, signed, and downloaded with audit-ready logs.
              </li>
            </ul>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Avg. turnaround", value: "4m 12s" },
                { label: "Saved per deal", value: "2.4 hrs" },
                { label: "Customer rating", value: "4.9 / 5" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-xl font-semibold text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-amber-500/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
              FAQ
            </p>
            <div className="mt-4 grid gap-4">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
                >
                  <p className="text-sm font-semibold text-white">{item.q}</p>
                  <p className="mt-2 text-sm text-white/75">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-100">
              Made by instantproof.com
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
              Secure • Audit-ready • Global
            </span>
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            <a className="hover:text-white" href="#demo">
              Book demo
            </a>
            <a className="hover:text-white" href="#social-proof">
              Customer stories
            </a>
            <a className="hover:text-white" href="mailto:hello@instantcontracts.ai">
              Contact
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
