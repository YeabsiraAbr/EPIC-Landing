export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Epic Software Solutions</h3>
            <p className="text-white/70">
              Transforming ideas into innovative digital solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li>Software Development</li>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Cloud Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li>info@epicsoftwaresolutions.com</li>
              <li>+251 929 529 586</li>
              <li>Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} Epic Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

