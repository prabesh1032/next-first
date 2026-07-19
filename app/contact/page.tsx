"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Clock, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Wire this up to your form handler / API route of choice.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <>
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 pt-24 text-center lg:pt-32">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            Contact
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Talk to an engineer, not a queue.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-7 text-[#9BA5B7]">
            Tell us what is going on with your stack. A real engineer replies
            — no ticket number, no sales deck first.
          </p>
        </section>

        {/* Form + info */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-[#34D399]/30 bg-[#0F1420] p-8">
                <p className="text-sm font-semibold text-[#34D399]">Message sent</p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight">
                  We will get back to you within one business day.
                </h2>
                <p className="mt-2 text-sm text-[#9BA5B7]">
                  In the meantime, feel free to email us directly at{" "}
                  <a
                    href="mailto:hello@meridiansystems.example"
                    className="text-[#22D3EE] underline underline-offset-2"
                  >
                    hello@meridiansystems.example
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#E7EBF3]">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#0F1420] px-4 py-3 text-sm text-[#E7EBF3] outline-none placeholder:text-[#5C6577] focus:border-[#22D3EE]/50 focus-visible:outline-2 focus-visible:outline-[#22D3EE]"
                      placeholder="Jordan Lee"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-[#E7EBF3]">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full rounded-xl border border-white/10 bg-[#0F1420] px-4 py-3 text-sm text-[#E7EBF3] outline-none placeholder:text-[#5C6577] focus:border-[#22D3EE]/50 focus-visible:outline-2 focus-visible:outline-[#22D3EE]"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#E7EBF3]">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0F1420] px-4 py-3 text-sm text-[#E7EBF3] outline-none placeholder:text-[#5C6577] focus:border-[#22D3EE]/50 focus-visible:outline-2 focus-visible:outline-[#22D3EE]"
                    placeholder="jordan@acme.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#E7EBF3]">
                    What is going on?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#0F1420] px-4 py-3 text-sm text-[#E7EBF3] outline-none placeholder:text-[#5C6577] focus:border-[#22D3EE]/50 focus-visible:outline-2 focus-visible:outline-[#22D3EE]"
                    placeholder="A short description of your stack and what you need covered."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] px-6 text-sm font-semibold text-[#05070D] transition-transform hover:scale-[1.01] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE] disabled:opacity-60 sm:w-auto"
                >
                  {submitting ? "Sending…" : "Send message"}
                  {!submitting && (
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-white/8 bg-[#0F1420] p-6">
              <Mail className="h-5 w-5 text-[#22D3EE]" strokeWidth={1.75} />
              <h3 className="mt-4 text-sm font-semibold">Email</h3>
              <a
                href="mailto:hello@meridiansystems.example"
                className="mt-1 block text-sm text-[#9BA5B7] hover:text-[#E7EBF3]"
              >
                hello@meridiansystems.example
              </a>
            </div>
            <div className="rounded-2xl border border-white/8 bg-[#0F1420] p-6">
              <Clock className="h-5 w-5 text-[#22D3EE]" strokeWidth={1.75} />
              <h3 className="mt-4 text-sm font-semibold">Response time</h3>
              <p className="mt-1 text-sm text-[#9BA5B7]">
                Within one business day for general inquiries. 15 minutes for
                active incidents under a support contract.
              </p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-[#0F1420] p-6">
              <MapPin className="h-5 w-5 text-[#22D3EE]" strokeWidth={1.75} />
              <h3 className="mt-4 text-sm font-semibold">Offices</h3>
              <p className="mt-1 text-sm text-[#9BA5B7]">Austin, TX · Lisbon, PT</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}