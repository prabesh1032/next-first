"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Eye, ShieldCheck, Zap } from "lucide-react";

// Simple values data
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

// Simple timeline data
const TIMELINE = [
  {
    year: "2016",
    title: "Founded",
    body: "Started as a two-person on-call rotation for a friend's startup.",
  },
  {
    year: "2019",
    title: "First enterprise",
    body: "Took on our first team above 200 engineers.",
  },
  {
    year: "2022",
    title: "Multi-region",
    body: "Opened follow-the-sun monitoring across three time zones.",
  },
  {
    year: "2026",
    title: "120+ teams",
    body: "Now the on-call layer for infrastructure teams across a dozen industries.",
  },
];

// Simple stats
const STATS = [
  { value: "2016", label: "Founded" },
  { value: "120+", label: "Teams supported" },
  { value: "38", label: "Team members" },
  { value: "3", label: "Regions" },
];

export default function About() {
  return (
    <main className="flex-1">
      {/* Hero Section with Image */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#22D3EE]">
              About Meridian
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              We keep other peoples systems from becoming{" "}
              <span className="bg-linear-to-r from-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent">
                their problem
              </span>
            </h1>
            <p className="mt-4 text-lg text-[#9BA5B7]">
              Meridian started as an on-call rotation for one startup. Ten years
              later, we are the infrastructure layer for engineering teams who had
              rather build product than watch dashboards at 2am.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#22D3EE] to-[#8B5CF6] px-6 text-sm font-semibold text-[#05070D] transition-transform hover:scale-[1.02]"
              >
                Talk to us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-75 w-full max-w-md overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/image1.png"  // Replace with your image
                alt="Meridian team working"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/5 bg-[#0A0E17]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold bg-linear-to-r from-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-[#7C8698]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section with Image */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            What we actually believe.
          </h2>
          <p className="mt-2 text-[#9BA5B7]">
            Not a poster in the break room — the rules that decide what we build
            and who we hire.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Values Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/8 bg-[#0F1420] p-6 transition-colors hover:border-[#22D3EE]/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-[#22D3EE]/15 to-[#8B5CF6]/15">
                  <Icon className="h-5 w-5 text-[#22D3EE]" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#9BA5B7]">{body}</p>
              </div>
            ))}
          </div>

          {/* Values Image */}
          <div className="relative h-100 w-full overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/image2.png"  // Replace with your image
              alt="Our values in action"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="border-y border-white/5 bg-[#0A0E17]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              How we got here.
            </h2>
            <p className="mt-2 text-[#9BA5B7]">Ten years, in four milestones.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((item) => (
              <div key={item.year} className="border-l border-white/10 pl-5">
                <p className="font-mono text-sm text-[#22D3EE]">{item.year}</p>
                <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#9BA5B7]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Images */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our team</h2>
          <p className="mt-2 text-[#9BA5B7]">
            The people behind the infrastructure
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {["/images/image3.png", "/images/image4.png", "/images/image5.png", "/images/image6.png"].map(
            (src, index) => (
              <div key={index} className="group">
                <div className="relative h-48 w-full overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={src}
                    alt={`Team member ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-center text-sm font-medium">
                  Team {index + 1}
                </p>
                <p className="text-center text-xs text-[#7C8698]">Role here</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#0F1420]">
          <div className="grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:p-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Want to see how we work?
              </h2>
              <p className="mt-2 text-[#9BA5B7]">
                We will walk you through a real client dashboard on the first call.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-linear-to-r from-[#22D3EE] to-[#8B5CF6] px-6 text-sm font-semibold text-[#05070D] transition-transform hover:scale-[1.02]"
              >
                Talk to an engineer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="relative h-50 w-full overflow-hidden rounded-xl">
              <Image
                src="/images/image1.png"  // Replace with your image
                alt="Dashboard preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}