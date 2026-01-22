export default function About() {
  const stats = [
    { k: "10+ years", v: "hands‑on delivery" },
    { k: "Fast", v: "iterations & feedback loops" },
    { k: "Secure", v: "privacy & compliance mindset" },
    { k: "Design‑led", v: "experiences users love" },
  ];

  return (
    <section id="about" className="section-pad">
      <div className="container-pad">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Built for teams that care about quality
          </h2>
          <p className="mt-4 text-white/65">
            Epic Software Solutions partners with founders and enterprises to build
            premium digital products — the kind that feel effortless, look elegant,
            and scale with confidence.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="card">
            <p className="text-sm font-semibold text-white">What we do</p>
            <h3 className="mt-3 text-2xl sm:text-3xl font-semibold gradient-text">
              Strategy → Design → Engineering
            </h3>
            <p className="mt-4 text-white/65 leading-relaxed">
              We blend product strategy, UX/UI craftsmanship, and modern engineering
              to deliver software that ships faster and performs better. From MVPs to
              complex platforms, we build with clean architecture and long‑term maintainability.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-semibold">{s.k}</p>
                  <p className="mt-1 text-xs text-white/60">{s.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />

            <p className="relative text-sm font-semibold text-white">How we work</p>
            <div className="relative mt-6 space-y-5">
              {[
                ["Discovery", "Align on goals, users, scope, and success metrics."],
                ["Design", "Elegant UI/UX with rapid prototyping and feedback."],
                ["Build", "Modern stack, automated QA, and performance budgets."],
                ["Launch & Scale", "Observability, security, and iterative improvements."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-4">
                  <div className="mt-1 h-8 w-8 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-sm">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold">{t}</p>
                    <p className="mt-1 text-sm text-white/60">{d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold">Outcome‑driven delivery</p>
              <p className="mt-2 text-sm text-white/60">
                You get weekly demos, clear milestones, and a transparent roadmap — no surprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
