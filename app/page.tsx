"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

// Simple features data
const FEATURES = [
  "99.98% uptime guaranteed",
  "24/7 monitoring & support",
  "Zero-downtime deployments",
  "SOC 2 compliant infrastructure",
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#22D3EE]">
              Managed Cloud Operations
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Infrastructure that <br />
              <span className="bg-linear-to-r from-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent">
                never sleeps
              </span>
            </h1>
            <p className="mt-4 max-w-md text-lg text-[#9BA5B7]">
              Meridian keeps your systems running smoothly so your team can
              focus on building, not firefighting.
            </p>
            
            <div className="mt-6 space-y-2">
              {FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#22D3EE]" />
                  <span className="text-sm text-[#9BA5B7]">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group flex h-12 items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#22D3EE] to-[#8B5CF6] px-6 text-sm font-semibold text-[#05070D] transition-transform hover:scale-[1.02]"
              >
                Get started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services"
                className="flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-medium text-[#E7EBF3] transition-colors hover:bg-white/5"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Right Image - Using image from public/images/ */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-75 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F19]">
              <Image
                src="/images/image1.png"  // ✅ Path: public/images/image1.png
                alt="Meridian Systems infrastructure dashboard"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#05070D]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y border-white/5 bg-[#0A0E17] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Why choose Meridian?
            </h2>
            <p className="mt-2 text-[#9BA5B7]">
              Enterprise-grade infrastructure without the enterprise complexity
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                title: "Cloud Infrastructure",
                desc: "Multi-cloud provisioning and scaling",
                image: "/images/image2.png",  // ✅ Using image2.png
              },
              {
                title: "Security First",
                desc: "SOC 2 ready with built-in compliance",
                image: "/images/image3.png",  // ✅ Using image3.png
              },
              {
                title: "24/7 Monitoring",
                desc: "Real engineers, real dashboards",
                image: "/images/image4.png",  // ✅ Using image4.png
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-white/8 bg-[#0F1420] transition-colors hover:border-[#22D3EE]/30"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#9BA5B7]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "99.98%", label: "Uptime" },
            { value: "<15 min", label: "Response time" },
            { value: "120+", label: "Teams supported" },
            { value: "24/7", label: "Coverage" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold bg-linear-to-r from-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-[#7C8698]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#0F1420]">
          <div className="grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:p-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Ready to get started?
              </h2>
              <p className="mt-2 text-[#9BA5B7]">
                Book a free consultation with our engineering team today.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-linear-to-r from-[#22D3EE] to-[#8B5CF6] px-6 text-sm font-semibold text-[#05070D] transition-transform hover:scale-[1.02]"
              >
                Book now
              </Link>
            </div>

            <div className="relative h-50 w-full overflow-hidden rounded-xl">
              <Image
                src="/images/image5.png"  // ✅ Using image5.png
                alt="Team meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Showcase all images */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-center">
          Our Gallery
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {["/images/image1.png", "/images/image2.png", "/images/image3.png", 
            "/images/image4.png", "/images/image5.png", "/images/image6.png"].map((src, index) => (
            <div key={index} className="relative h-40 w-full overflow-hidden rounded-lg border border-white/10">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}