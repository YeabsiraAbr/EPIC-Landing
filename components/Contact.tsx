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
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Ready to start your next project? Contact us today and let's discuss how we can help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-black mb-2">Email</h4>
                <a
                  href="mailto:info@epicsoftwaresolutions.com"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  info@epicsoftwaresolutions.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Phone</h4>
                <a
                  href="tel:+251929529586"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  +251 929 529 586
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Address</h4>
                <p className="text-black/70">
                  Addis Ababa, Ethiopia
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Business Hours</h4>
                <p className="text-black/70">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-black/10">
            <h3 className="text-2xl font-bold text-black mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-black/90 transition-colors shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

