"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";

// 📁 This is the SAME data from your services page
const SERVICES = [
  {
    id: "cloud-infrastructure",  // ✅ Add unique ID for each service
    icon: "Cloud",
    title: "Cloud infrastructure",
    body: "We provision, scale, and cost-tune AWS, GCP, or Azure environments end to end.",
    includes: [
      "Multi-cloud provisioning",
      "Autoscaling & load balancing",
      "Monthly cost reviews",
    ],
    image: "/images/image1.png",
    description: "Full description of cloud infrastructure service...",
  },
  {
    id: "security-compliance",
    icon: "ShieldCheck",
    title: "Security & compliance",
    body: "Hardening and audit trails wired in from day one.",
    includes: [
      "SOC 2-ready controls",
      "Vulnerability scanning",
      "Access & audit logging",
    ],
    image: "/images/image2.png",
    description: "Full description of security service...",
  },
  {
    id: "247-monitoring",
    icon: "Activity",
    title: "24/7 monitoring",
    body: "Real engineers watching real dashboards.",
    includes: [
      "15-minute response SLA",
      "Custom alert thresholds",
      "Monthly incident reports",
    ],
    image: "/images/image3.png",
    description: "Full description of monitoring service...",
  },
  {
    id: "devops-automation",
    icon: "GitBranch",
    title: "DevOps automation",
    body: "CI/CD pipelines and infrastructure-as-code.",
    includes: [
      "Terraform / IaC setup",
      "CI/CD pipeline builds",
      "Automated rollback paths",
    ],
    image: "/images/image4.png",
    description: "Full description of DevOps automation...",
  },
  {
    id: "oncall-incident-response",
    icon: "Server",
    title: "On-call & incident response",
    body: "We carry the pager. Your team gets escalated only when needed.",
    includes: [
      "Follow-the-sun coverage",
      "Runbook creation",
      "Postmortem facilitation",
    ],
    image: "/images/image5.png",
    description: "Full description of incident response...",
  },
  {
    id: "access-identity-management",
    icon: "Lock",
    title: "Access & identity management",
    body: "Least-privilege access across every system.",
    includes: [
      "SSO / IdP integration",
      "Quarterly access reviews",
      "Offboarding automation",
    ],
    image: "/images/image6.png",
    description: "Full description of access management...",
  },
];

// 📄 Single Service Page
export default function ServicePage() {
  // 🎯 Get the ID from the URL
  const params = useParams();
  const id = params.id as string;

  // 🔍 Find the service with matching ID
  const service = SERVICES.find((s) => s.id === id);

  // ❌ If service not found, show 404
  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Service not found</h1>
          <Link href="/services" className="mt-4 inline-block text-[#22D3EE]">
            ← Back to services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-[#9BA5B7] hover:text-[#E7EBF3]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all services
        </Link>

        {/* Service Details */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Info */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{service.title}</h1>
            <p className="mt-4 text-lg text-[#9BA5B7]">{service.body}</p>
            <p className="mt-4 text-[#9BA5B7]">{service.description}</p>

            <h3 className="mt-8 text-xl font-semibold">What is included:</h3>
            <ul className="mt-4 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#9BA5B7]">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#34D399]" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] px-6 text-sm font-semibold text-[#05070D] transition-transform hover:scale-[1.02]"
            >
              Get this service
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}