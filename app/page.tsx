"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Cloud,
  GitBranch,
  ShieldCheck,
  Server,
} from "lucide-react";

const TERMINAL_LINES = [
  "$ meridian deploy --env=production",
  "✓ provisioning 12 nodes... done",
  "✓ tls certificates renewed",
  "✓ uptime (90d): 99.98%",
  "$ meridian monitor --watch",
  "listening on 6 regions...",
];

function TerminalCard() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible((v) => (v >= TERMINAL_LINES.length ? 1 : v + 1));
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-md">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#22D3EE]/20 to-[#8B5CF6]/20 blur-2xl motion-reduce:hidden"
      />
      <div className="relative rounded-2xl border border-white/10 bg-[#0B0F19]/90 shadow-2xl shadow-black/50 backdrop-blur">
        <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]/70" />
          <span className="ml-3 text-xs text-[#7C8698]">
            meridian-cli — production
          </span>
        </div>
        <div className="min-h-[220px] p-5 font-mono text-[13px] leading-6">
          {TERMINAL_LINES.slice(0, visible).map((line, i) => (
            <p
              key={i}
              className={
                line.startsWith("✓")
                  ? "text-[#34D399]"
                  : line.startsWith("$")
                  ? "text-[#E7EBF3]"
                  : "text-[#7C8698]"
              }
            >
              {line}
            </p>
          ))}
          <span className="inline-block h-[14px] w-[7px] translate-y-[2px] bg-[#22D3EE] motion-safe:animate-[blink_1s_step-end_infinite]" />
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-full border border-white/10 bg-[#0B0F19] px-4 py-2 shadow-xl">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34D399] opacity-75 motion-reduce:hidden" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34D399]" />
        </span>
        <span className="text-xs font-medium text-[#E7EBF3]">
          All systems operational
        </span>
      </div>
      <style jsx global>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

const SERVICES = [
  {
    icon: Cloud,
    title: "Cloud infrastructure",
    body: "Provision and scale multi-cloud environments without the 2am page.",
  },
  {
    icon: ShieldCheck,
    title: "Security & compliance",
    body: "SOC 2-ready hardening, patching, and audit trails built into every environment.",
  },
  {
    icon: Activity,
    title: "24/7 monitoring",
    body: "Real engineers watching real dashboards, with a 15-minute response SLA.",
  },
  {
    icon: GitBranch,
    title: "DevOps automation",
    body: "CI/CD pipelines and infrastructure-as-code that ship changes safely.",
  },
];

const STATS = [
  { value: "99.98%", label: "Uptime, trailing 90 days" },
  { value: "<15 min", label: "Average incident response" },
  { value: "120+", label: "Engineering teams supported" },
  { value: "24/7", label: "Coverage, every region" },
];

const PROCESS = [
  {
    n: "01",
    title: "Assess",
    body: "We audit your current stack and flag risk before touching anything.",
  },
  {
    n: "02",
    title: "Migrate",
    body: "Workloads move over with a zero-downtime cutover plan.",
  },
  {
    n: "03",
    title: "Monitor",
    body: "Full observability goes live from day one, not week six.",
  },
  {
    n: "04",
    title: "Optimize",
    body: "Monthly reviews tune cost, performance, and capacity.",
  },
];

const LOGOS = ["ORBITAL", "HALCYON", "FERROVIA", "LUMEN&nbsp;CO", "NORTHWIND"];

export default function Home() {
  return (
    <>
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
              Managed cloud &amp; IT operations
            </p>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Infrastructure that holds the line.
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-7 text-[#9BA5B7]">
              Meridian keeps your systems provisioned, patched, and monitored
              around the clock — so your team can ship instead of firefight.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] px-6 text-sm font-semibold text-[#05070D] transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
              >
                Book an assessment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#services"
                className="flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-medium text-[#E7EBF3] transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
              >
                See our services
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <TerminalCard />
          </div>
        </section>

        {/* Logo strip */}
        <section className="border-y border-white/5 bg-[#0A0E17]">
          <div className="mx-auto max-w-6xl px-6 py-8">
            <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#5C6577]">
              Trusted by engineering teams at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {LOGOS.map((logo) => (
                <span
                  key={logo}
                  className="text-sm font-semibold tracking-wide text-[#5C6577]"
                  dangerouslySetInnerHTML={{ __html: logo }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Everything ops, none of the overhead.
            </h2>
            <p className="mt-3 text-[#9BA5B7]">
              One team, one contract, one dashboard — covering the parts of
              IT that quietly eat your week.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {SERVICES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/8 bg-[#0F1420] p-6 transition-colors hover:border-[#22D3EE]/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#22D3EE]/15 to-[#8B5CF6]/15">
                  <Icon className="h-5 w-5 text-[#22D3EE]" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#9BA5B7]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-white/5 bg-[#0A0E17]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-[#7C8698]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Onboarding in four steps.
            </h2>
            <p className="mt-3 text-[#9BA5B7]">
              No six-month rollout. Most teams are fully monitored inside
              two weeks.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <div key={step.n} className="relative pl-0">
                <p className="font-mono text-sm text-[#22D3EE]">{step.n}</p>
                <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#9BA5B7]">
                  {step.body}
                </p>
                {i < PROCESS.length - 1 && (
                  <span className="absolute right-[-1rem] top-1 hidden text-[#2A3040] lg:block">
                    /
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA banner */}
        <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#0F1420] px-8 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#22D3EE]/20 to-[#8B5CF6]/20 blur-3xl"
            />
            <div className="relative">
              <Server className="mx-auto mb-6 h-8 w-8 text-[#22D3EE]" strokeWidth={1.5} />
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to stop babysitting servers?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[#9BA5B7]">
                Talk to an engineer, not a salesperson. We will map your
                current stack in the first call.
              </p>
              <a
                href="mailto:hello@meridiansystems.example"
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] px-7 text-sm font-semibold text-[#05070D] transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
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