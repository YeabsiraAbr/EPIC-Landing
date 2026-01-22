"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your backend/email provider.
    console.log("Form submitted:", formData);
    alert("Thanks! We’ll reach out shortly.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />

      <div className="container-pad relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Let’s build something premium
          </h2>
          <p className="mt-4 text-white/65">
            Tell us what you’re working on. We’ll respond with next steps, timeline
            guidance, and a clear plan.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 card">
            <p className="text-sm font-semibold">Contact</p>
            <div className="mt-5 space-y-4 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-white/80 font-semibold">Email</p>
                <p className="mt-1 text-white/60">hello@epicsoftwaresolutions.com</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-white/80 font-semibold">Response time</p>
                <p className="mt-1 text-white/60">Typically within 1 business day</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-white/80 font-semibold">What to include</p>
                <p className="mt-1 text-white/60">
                  Goals, target users, must‑have features, and your ideal launch window.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 card">
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="text-xs text-white/60">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/25"
                  placeholder="Your name"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="text-xs text-white/60">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/25"
                  placeholder="you@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs text-white/60">Company</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/25"
                  placeholder="Company (optional)"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs text-white/60">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/25 resize-none"
                  placeholder="Tell us what you want to build…"
                />
              </div>

              <div className="sm:col-span-2 flex items-center justify-between gap-4">
                <p className="text-xs text-white/45">
                  By submitting, you agree to be contacted about your request.
                </p>
                <button type="submit" className="btn-primary">
                  Send message
                  <span className="ml-2">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
