export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Premium quality",
      description:
        "Polished UI, careful details, and performance budgets so your product feels premium.",
    },
    {
      title: "Modern stack",
      description:
        "Contemporary frameworks and tooling, chosen to keep velocity high and maintenance low.",
    },
    {
      title: "Clear communication",
      description:
        "Weekly demos, crisp status updates, and shared dashboards — you always know where we are.",
    },
    {
      title: "Engineering rigor",
      description:
        "Clean architecture, testing, CI/CD, observability, and security practices by default.",
    },
  ];

  return (
    <section id="why" className="section-pad">
      <div className="container-pad">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Why teams choose Epic
            </h2>
            <p className="mt-4 text-white/65">
              You’re not just hiring developers — you’re partnering with a team that
              obsesses over craft, speed, and reliability.
            </p>

            <div className="mt-8 card">
              <p className="text-sm font-semibold">Our promise</p>
              <p className="mt-3 text-white/65">
                Deliver measurable outcomes: faster shipping, cleaner systems, and a
                product experience your customers remember.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  ["2–4 wks", "to first demo"],
                  ["99.9%", "uptime targets"],
                  ["24/7", "monitoring ready"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-lg font-semibold">{k}</p>
                    <p className="mt-1 text-xs text-white/60">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {reasons.map((r) => (
              <div key={r.title} className="card">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                    ✦
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{r.title}</h3>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">
                      {r.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-white/[0.08] to-white/5 p-6">
              <p className="text-sm font-semibold">Want the “Apple‑clean” look?</p>
              <p className="mt-2 text-sm text-white/60">
                We can re‑skin existing products, build design systems, or deliver a full
                redesign with modern typography, spacing, and motion.
              </p>
              <a href="#contact" className="btn-primary mt-5">
                Get a quote
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
