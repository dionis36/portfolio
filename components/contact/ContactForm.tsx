"use client";

import React, { useState } from "react";
import { Icons } from "../ui/Icons";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 700);
  };

  return (
    <section className="pb-12 sm:pb-16">
      <div className="max-w-[960px] mx-auto px-6">
        <div className="bg-surface rounded-[24px] border border-border-subtle p-7 sm:p-12 shadow-[0_4px_16px_0_rgba(0,0,0,0.02)]">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-surface-subtle text-primary flex items-center justify-center mx-auto mb-4">
                <Icons.Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-primary mb-2">
                Thank you!
              </h3>
              <p className="text-muted text-sm max-w-[360px] mx-auto mb-6">
                Your message has been received. I will review it and get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs uppercase tracking-wider font-semibold text-primary hover:underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8 pb-6 border-b border-border-subtle">
                <h2 className="text-xl sm:text-2xl font-medium text-primary mb-2">
                  Send a message
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  Fill out the fields below for project inquiries, collaboration proposals, or technical consultations.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-10">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-primary mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    required
                    className="w-full border-0 border-b border-border bg-transparent rounded-none px-0 pb-4 text-sm text-primary placeholder:text-faint focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-primary mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="What’s your email?"
                    required
                    className="w-full border-0 border-b border-border bg-transparent rounded-none px-0 pb-4 text-sm text-primary placeholder:text-faint focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-primary mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="What’s your phone?"
                    className="w-full border-0 border-b border-border bg-transparent rounded-none px-0 pb-4 text-sm text-primary placeholder:text-faint focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-primary mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help?"
                    required
                    className="w-full border-0 border-b border-border bg-transparent rounded-none px-0 pb-4 text-sm text-primary placeholder:text-faint focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-primary mb-2"
                >
                  Leave me a message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi there! I would like to get in touch with you to inquiry about a project."
                  required
                  className="w-full border-0 border-b border-border bg-transparent rounded-none px-0 pb-4 text-sm text-primary placeholder:text-faint focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA Button (Arrow link style) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center gap-2 bg-transparent text-primary font-medium text-base hover:text-secondary transition-colors p-0 cursor-pointer disabled:opacity-50"
                >
                  <span className="leading-snug">
                    {loading ? "Sending..." : "Send message"}
                  </span>
                  <span className="inline-flex items-center transform transition-transform duration-200 group-hover:translate-x-1">
                    <Icons.ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </form>
          </>
        )}
        </div>
      </div>
    </section>
  );
}
