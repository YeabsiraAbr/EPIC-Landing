export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your specific business needs. From web applications to enterprise systems, we build scalable and robust software.",
      icon: "💻",
    },
    {
      title: "Web Development",
      description:
        "Modern, responsive web applications using the latest technologies. We create user-friendly interfaces that deliver exceptional user experiences.",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android. We build apps that engage users and drive business results.",
      icon: "📱",
    },
    {
      title: "Cloud Solutions",
      description:
        "Cloud migration, infrastructure setup, and management. We help you leverage cloud technology for scalability and cost efficiency.",
      icon: "☁️",
    },
    {
      title: "Technology Consulting",
      description:
        "Strategic technology consulting to help you make informed decisions. We analyze your needs and recommend the best solutions.",
      icon: "🔍",
    },
    {
      title: "Digital Transformation",
      description:
        "End-to-end digital transformation services to modernize your business processes and technology stack for the digital age.",
      icon: "🚀",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design that combines aesthetics with functionality. We create intuitive interfaces that users love.",
      icon: "🎨",
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance, updates, and technical support to ensure your systems run smoothly and stay up-to-date.",
      icon: "🔧",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Comprehensive technology solutions to help your business thrive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-black/10 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-black/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

