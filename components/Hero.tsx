export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-radial" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />

      <div className="relative pt-28 sm:pt-32">
        <div className="container-pad">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <span className="badge">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.7)]" />
                Modern software. Real business outcomes.
              </span>
            </div>

            <h1 className="text-balance text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight gradient-text">
              Epic Software Solutions
            </h1>

            <p className="mt-6 text-pretty text-lg sm:text-xl text-white/70">
              High‑impact digital products, engineered with elegance — from strategy to
              launch and beyond.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#contact" className="btn-primary">
                Book a discovery call
                <span className="ml-2">→</span>
              </a>
              <a href="#services" className="btn-secondary">
                Explore services
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                Web & Mobile
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                Cloud & DevOps
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                AI‑ready architecture
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                Security by design
              </span>
            </div>
          </div>

          {/* Hero mockup */}
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
              <div className="rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <div className="ml-4 h-8 flex-1 rounded-xl bg-white/5 border border-white/10" />
                </div>

                <div className="grid md:grid-cols-3 gap-4 p-4 bg-gradient-to-b from-white/5 to-transparent">
                  <div className="card md:col-span-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">Product roadmap</p>
                      <span className="text-xs text-white/60">Q1–Q4</span>
                    </div>
                    <div className="mt-5 space-y-3">
                      {["Discovery & UX", "Architecture", "Build & Iterate", "Launch + Scale"].map((t) => (
                        <div key={t} className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_18px_rgba(99,102,241,0.7)]" />
                          <div className="h-3 flex-1 rounded bg-white/10" />
                          <span className="text-xs text-white/55">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card animate-floaty">
                    <p className="text-sm font-semibold">System health</p>
                    <p className="mt-2 text-xs text-white/60">
                      Observability, performance, and reliability — always on.
                    </p>
                    <div className="mt-5 space-y-3">
                      {[
                        ["Latency", "58ms"],
                        ["Uptime", "99.95%"],
                        ["Deploys", "Daily"],
                      ].map(([k, v]) => (
                        <div key={k} className="flex items-center justify-between">
                          <span className="text-xs text-white/55">{k}</span>
                          <span className="text-xs font-semibold text-white">{v}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 h-24 rounded-xl bg-white/5 border border-white/10" />
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-white/45">
              Polished design + robust engineering — the Apple‑level feel your users notice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
