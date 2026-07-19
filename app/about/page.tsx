"use client";

import { ArrowRight, Compass, Eye, ShieldCheck, Zap } from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Reliability first",
    body: "If it's not stable, it's not done. We'd rather ship less and have it hold.",
  },
  {
    icon: Eye,
    title: "No black boxes",
    body: "Every client gets the same dashboards our engineers watch. Nothing hidden.",
  },
  {
    icon: Compass,
    title: "We own the outage",
    body: "If something breaks on our watch, it's our problem to fix — not yours to escalate.",
  },
  {
    icon: Zap,
    title: "Move at the speed of risk",
    body: "Ship fast where it's safe, slow down where it isn't. We know the difference.",
  },
];

const TIMELINE = [
  {
    n: "2016",
    title: "Founded",
    body: "Started as a two-person on-call rotation for a friend's startup.",
  },
  {
    n: "2019",
    title: "First enterprise contract",
    body: "Took on our first team above 200 engineers.",
  },
  {
    n: "2022",
    title: "Multi-region coverage",
    body: "Opened follow-the-sun monitoring across three time zones.",
  },
  {
    n: "2026",
    title: "120+ teams",
    body: "Now the on-call layer for infrastructure teams across a dozen industries.",
  },
];

const STATS = [
  { value: "2016", label: "Founded" },
  { value: "120+", label: "Teams supported" },
  { value: "38", label: "People on the team" },
  { value: "3", label: "Regions covered" },
];

export default function About() {
  return (
    <>
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            About Meridian
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            We keep other people systems from becoming their problem.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-7 text-[#9BA5B7]">
            Meridian started as an on-call rotation for one startup. Ten years
            later, we are the infrastructure layer for engineering teams who had
            rather build product than watch dashboards at 2am.
          </p>
        </section>

        {/* Stats */}
        <section className="border-y border-white/5 bg-[#0A0E17]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="bg-linear-to-r from-[#22D3EE] to-[#8B5CF6] bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-[#7C8698]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              What we actually believe.
            </h2>
            <p className="mt-3 text-[#9BA5B7]">
              Not a poster in the break room — the rules that decide what we
              build and who we hire.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/8 bg-[#0F1420] p-6 transition-colors hover:border-[#22D3EE]/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-[#22D3EE]/15 to-[#8B5CF6]/15">
                  <Icon className="h-5 w-5 text-[#22D3EE]" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#9BA5B7]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="border-y border-white/5 bg-[#0A0E17]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="mb-14 max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight">
                How we got here.
              </h2>
              <p className="mt-3 text-[#9BA5B7]">
                Ten years, in four milestones.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {TIMELINE.map((step) => (
                <div key={step.n} className="border-l border-white/10 pl-5">
                  <p className="font-mono text-sm text-[#22D3EE]">{step.n}</p>
                  <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#9BA5B7]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#0F1420] px-8 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-xl -translate-x-1/2 rounded-full bg-linear-to-r from-[#22D3EE]/20 to-[#8B5CF6]/20 blur-3xl"
            />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Want to see how we work?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[#9BA5B7]">
                We will walk you through a real client dashboard on the first
                call.
              </p>
              <a
                href="mailto:hello@meridiansystems.example"
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#22D3EE] to-[#8B5CF6] px-7 text-sm font-semibold text-[#05070D] transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
              >
                Talk to an engineer
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
