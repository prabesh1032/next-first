"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#05070D]/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-[#22D3EE]"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
            <path d="M13 1 L24 7.5 V18.5 L13 25 L2 18.5 V7.5 Z" stroke="url(#g)" strokeWidth="1.6" />
            <path d="M13 8 L18.5 11.3 V17.7 L13 21 L7.5 17.7 V11.3 Z" fill="url(#g)" />
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="26" y2="26">
                <stop stopColor="#22D3EE" />
                <stop offset="1" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-[15px] font-semibold tracking-tight">Meridian Systems</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm sm:flex">
          {LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={
                  "rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-[#22D3EE] " +
                  (isActive ? "text-[#E7EBF3]" : "text-[#9BA5B7] hover:text-[#E7EBF3]")
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-[#E7EBF3] px-4 py-2 text-sm font-medium text-[#05070D] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-[#22D3EE]"
        >
          Book an assessment
        </Link>
      </div>
    </header>
  );
}