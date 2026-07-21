"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Check,
  Cloud,
  GitBranch,
  Lock,
  Server,
  ShieldCheck,
} from "lucide-react";

const SERVICES = [
  {
    icon: Cloud,
    title: "Cloud infrastructure",
    body: "We provision, scale, and cost-tune AWS, GCP, or Azure environments end to end.",
    includes: [
      "Multi-cloud provisioning",
      "Autoscaling & load balancing",
      "Monthly cost reviews",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & compliance",
    body: "Hardening and audit trails wired in from day one, not bolted on before a review.",
    includes: [
      "SOC 2-ready controls",
      "Vulnerability scanning",
      "Access & audit logging",
    ],
  },
  {
    icon: Activity,
    title: "24/7 monitoring",
    body: "Real engineers watching real dashboards, with an SLA that's actually enforced.",
    includes: [
      "15-minute response SLA",
      "Custom alert thresholds",
      "Monthly incident reports",
    ],
  },
  {
    icon: GitBranch,
    title: "DevOps automation",
    body: "CI/CD pipelines and infrastructure-as-code that ship changes without drama.",
    includes: [
      "Terraform / IaC setup",
      "CI/CD pipeline builds",
      "Automated rollback paths",
    ],
  },
  {
    icon: Server,
    title: "On-call & incident response",
    body: "We carry the pager. Your team gets escalated only when it truly needs a human decision.",
    includes: [
      "Follow-the-sun coverage",
      "Runbook creation",
      "Postmortem facilitation",
    ],
  },
  {
    icon: Lock,
    title: "Access & identity management",
    body: "Least-privilege access across every system, reviewed on a schedule, not by accident.",
    includes: [
      "SSO / IdP integration",
      "Quarterly access reviews",
      "Offboarding automation",
    ],
  },
];

const TIERS = [
  {
    name: "Core Monitoring",
    price: "$1,200",
    period: "/mo",
    tagline: "For teams that just need eyes on the system.",
    features: [
      "24/7 monitoring & alerting",
      "Monthly incident report",
      "Business-hours support",
    ],
  },
  {
    name: "Managed Ops",
    price: "$4,800",
    period: "/mo",
    tagline: "Most teams start here.",
    features: [
      "Everything in Core",
      "15-min response SLA",
      "CI/CD & IaC management",
      "Quarterly access reviews",
    ],
    highlighted: true,
  },
  {
    name: "Dedicated Team",
    price: "Custom",
    period: "",
    tagline: "A named team that knows your stack cold.",
    features: [
      "Everything in Managed Ops",
      "Dedicated engineering pod",
      "Architecture reviews",
      "Custom compliance work",
    ],
  },
];

const FAQS = [
  {
    q: "Do we need to migrate everything to Meridian at once?",
    a: "No. Most teams start with monitoring on their existing stack, then hand over pieces — CI/CD, access management, on-call — as trust builds.",
  },
  {
    q: "What happens during an incident?",
    a: "Our on-call engineer is paged automatically, works the incident against your runbook, and only escalates to your team if a business decision is needed.",
  },
  {
    q: "Can we cancel a plan?",
    a: "Yes, month to month on Core and Managed Ops. Dedicated Team engagements run on a quarterly cycle.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8 py-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-[#22D3EE]"
        aria-expanded={open}
      >
        <span className="text-sm font-medium sm:text-base">{q}</span>
        <span
          className={
            "shrink-0 text-[#22D3EE] transition-transform " +
            (open ? "rotate-45" : "")
          }
          aria-hidden
        >
          +
        </span>
      </button>
      {open && (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#9BA5B7]">{a}</p>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <>
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            Services
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Pick your coverage, not a package.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-7 text-[#9BA5B7]">
            Every engagement starts with the parts of your stack that keep you
            up at night. Add coverage as you need it.
          </p>
        </section>

        {/* Service cards */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, body, includes }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/8 bg-[#0F1420] p-6 transition-colors hover:border-[#22D3EE]/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-[#22D3EE]/15 to-[#8B5CF6]/15">
                  <Icon className="h-5 w-5 text-[#22D3EE]" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#9BA5B7]">{body}</p>
                <ul className="mt-4 space-y-2">
                  {includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-[#9BA5B7]"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#34D399]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing tiers */}
        <section className="border-y border-white/5 bg-[#0A0E17]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="mb-14 max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight">
                Coverage tiers.
              </h2>
              <p className="mt-3 text-[#9BA5B7]">
                Straightforward pricing, no seat-based math.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={
                    "relative rounded-2xl border p-8 " +
                    (tier.highlighted
                      ? "border-[#22D3EE]/40 bg-[#0F1420] shadow-xl shadow-[#22D3EE]/5"
                      : "border-white/8 bg-[#0F1420]")
                  }
                >
                  {tier.highlighted && (
                    <span className="absolute -top-3 left-8 rounded-full bg-linear-to-r from-[#22D3EE] to-[#8B5CF6] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#05070D]">
                      Most common
                    </span>
                  )}
                  <h3 className="text-lg font-semibold">{tier.name}</h3>
                  <p className="mt-1 text-sm text-[#7C8698]">{tier.tagline}</p>
                  <p className="mt-6 flex items-baseline gap-1">
                    <span className="text-3xl font-semibold tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-sm text-[#7C8698]">
                      {tier.period}
                    </span>
                  </p>
                  <ul className="mt-6 space-y-3">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-[#9BA5B7]"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={
                      "mt-8 flex h-11 items-center justify-center rounded-full text-sm font-semibold transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE] " +
                      (tier.highlighted
                        ? "bg-linear-to-r from-[#22D3EE] to-[#8B5CF6] text-[#05070D]"
                        : "border border-white/15 text-[#E7EBF3] hover:bg-white/5")
                    }
                  >
                    Talk to sales
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight">
            Common questions.
          </h2>
          <div>
            {FAQS.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </section>

        {/* CTA banner */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#0F1420] px-8 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-xl -translate-x-1/2 rounded-full bg-linear-to-r from-[#22D3EE]/20 to-[#8B5CF6]/20 blur-3xl"
            />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Not sure which tier fits?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[#9BA5B7]">
                Tell us what is on fire and we will tell you what coverage
                actually solves it.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#22D3EE] to-[#8B5CF6] px-7 text-sm font-semibold text-[#05070D] transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
              >
                Talk to an engineer
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
