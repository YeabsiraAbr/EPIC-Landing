export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-pad py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                E
              </span>
              <div>
                <p className="font-semibold">Epic Software Solutions</p>
                <p className="text-sm text-white/55">Elegant products. Modern engineering.</p>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/60 max-w-md">
              We help teams build premium digital experiences with a modern, high‑performance stack.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#why" className="hover:text-white transition">Why us</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Get in touch</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>hello@epicsoftwaresolutions.com</li>
              <li>Mon–Fri, 9am–5pm</li>
              <li className="text-white/45">© {new Date().getFullYear()} Epic Software Solutions</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-xs text-white/45">
            Built with Next.js + Tailwind. Crafted for an Apple‑clean look.
          </p>
          <div className="flex items-center gap-3 text-xs text-white/50">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <span className="text-white/20">•</span>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
