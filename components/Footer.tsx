import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-[#5C6577] sm:flex-row">
        <span>© {new Date().getFullYear()} Meridian Systems. All rights reserved.</span>
        <div className="flex gap-6">
          <Link className="hover:text-[#9BA5B7]" href="/services">Services</Link>
          <Link className="hover:text-[#9BA5B7]" href="/about">About</Link>
          <Link className="hover:text-[#9BA5B7]" href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}