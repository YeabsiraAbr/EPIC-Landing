export default function Services() {
  const services = [
    {
      title: "Product & UX Design",
      description:
        "Research, wireframes, and premium UI design systems that feel modern and effortless.",
      icon: "✦",
    },
    {
      title: "Web & Platform Engineering",
      description:
        "Next.js, APIs, and scalable architectures built for speed, accessibility, and SEO.",
      icon: "⌬",
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross‑platform experiences that perform beautifully on iOS and Android.",
      icon: "◈",
    },
    {
      title: "Cloud & DevOps",
      description:
        "CI/CD, infrastructure, observability, and reliability practices that keep you online.",
      icon: "☁︎",
    },
    {
      title: "Data & AI‑Ready Systems",
      description:
        "Clean pipelines and foundations so you can safely adopt analytics and AI features.",
      icon: "∿",
    },
    {
      title: "Security by Design",
      description:
        "Threat modeling, best practices, and hardening from day one — not an afterthought.",
      icon: "⟡",
    },
  ];

  return (
    <section id="services" className="section-pad relative">
      <div className="pointer-events-none absolute inset-0 bg-radial opacity-40" />
      <div className="container-pad relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Services that ship — and scale
          </h2>
          <p className="mt-4 text-white/65">
            A focused offering for teams that want modern, high‑performance software
            with an elegant, premium feel.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-lg">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
              <p className="mt-4 text-sm text-white/60 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <p className="mt-4 text-xs text-white/50">
                Typical deliverables: roadmap, design system, implementation, and QA.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#contact" className="btn-secondary">
            Tell us about your project
          </a>
        </div>
      </div>
    </section>
  );
}
