export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About Epic Software Solutions
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-black mb-6">
              Who We Are
            </h3>
            <p className="text-lg text-black/80 mb-4 leading-relaxed">
              Epic Software Solutions is a leading technology company specializing in
              custom software development, digital transformation, and innovative
              technology consulting. With a team of experienced professionals, we
              help businesses navigate the complexities of the digital landscape.
            </p>
            <p className="text-lg text-black/80 mb-4 leading-relaxed">
              Our mission is to empower organizations with cutting-edge technology
              solutions that drive efficiency, growth, and competitive advantage.
              We combine technical expertise with business acumen to deliver
              solutions that make a real impact.
            </p>
          </div>
          <div className="bg-black/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-black mb-6">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">•</span>
                <span className="text-black/80">Innovation and Excellence</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">•</span>
                <span className="text-black/80">Client-Centric Approach</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">•</span>
                <span className="text-black/80">Transparency and Integrity</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">•</span>
                <span className="text-black/80">Continuous Learning</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">•</span>
                <span className="text-black/80">Quality First</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 border border-black/10 rounded-lg">
            <div className="text-4xl font-bold text-black mb-2">7</div>
            <div className="text-black/70">Years of Experience</div>
          </div>
          <div className="text-center p-6 border border-black/10 rounded-lg">
            <div className="text-4xl font-bold text-black mb-2">20+</div>
            <div className="text-black/70">Projects Delivered</div>
          </div>
          <div className="text-center p-6 border border-black/10 rounded-lg">
            <div className="text-4xl font-bold text-black mb-2">30+</div>
            <div className="text-black/70">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}

