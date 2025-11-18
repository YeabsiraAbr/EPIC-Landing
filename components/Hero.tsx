export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
          Epic Software Solutions
        </h1>
        <p className="text-xl md:text-2xl text-black/80 mb-8 max-w-3xl mx-auto">
          Transforming Ideas into Innovative Digital Solutions
        </p>
        <p className="text-lg md:text-xl text-black/60 mb-12 max-w-2xl mx-auto">
          We deliver cutting-edge software development, consulting, and technology
          solutions that drive business growth and digital transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-black/90 transition-colors shadow-lg"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="px-8 py-4 border-2 border-black text-black font-semibold rounded-lg hover:bg-black/5 transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}

