export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Expert Team",
      description:
        "Our team consists of highly skilled developers, designers, and consultants with years of industry experience.",
    },
    {
      title: "Proven Track Record",
      description:
        "We have successfully delivered hundreds of projects across various industries and technologies.",
    },
    {
      title: "Innovative Solutions",
      description:
        "We stay ahead of technology trends and leverage the latest tools and frameworks to deliver cutting-edge solutions.",
    },
    {
      title: "Client-Focused",
      description:
        "Your success is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations.",
    },
    {
      title: "Agile Methodology",
      description:
        "We follow agile development practices to ensure flexibility, transparency, and timely delivery of projects.",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any technical issues or questions.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why Choose Epic Software Solutions?
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 border-l-4 border-black"
            >
              <h3 className="text-2xl font-bold text-black mb-3">
                {reason.title}
              </h3>
              <p className="text-black/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

