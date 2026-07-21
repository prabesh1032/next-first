"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the type for navigation links
type NavLink = {
  href: string;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
// ✅ Helper Components with TypeScript

function LogoIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <path
        d="M13 1 L24 7.5 V18.5 L13 25 L2 18.5 V7.5 Z"
        stroke="url(#logoGradient)"
        strokeWidth="1.6"
      />
      <path
        d="M13 8 L18.5 11.3 V17.7 L13 21 L7.5 17.7 V11.3 Z"
        fill="url(#logoGradient)"
      />
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="26" y2="26">
          <stop stopColor="#22D3EE" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ✅ TypeScript interface for NavLink props
interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`rounded-sm transition-colors ${
        isActive ? "text-[#E7EBF3]" : "text-[#9BA5B7] hover:text-[#E7EBF3]"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const currentPath: string = usePathname(); // TypeScript knows this returns a string

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#05070D]/70 backdrop-blur-lg">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <LogoIcon />
          <span className="font-semibold text-[15px] tracking-tight">
            Meridian Systems
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center gap-8 text-sm">
          {NAV_LINKS.map(({ href, label }) => (
            <NavLink
              key={href}
              href={href}
              label={label}
              isActive={currentPath === href}
            />
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="bg-[#E7EBF3] text-[#05070D] px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
        >
          Book an assessment
        </Link>
      </div>
    </header>
  );
}


