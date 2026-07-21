import Link from "next/link";

type FooterLink = {
  href: string;
  label: string;
};

const FOOTER_LINKS: FooterLink[] = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

interface FooterLinkProps {
  href: string;
  label: string;
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <Link 
      href={href} 
      className="hover:text-[#9BA5B7] transition-colors"
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  const currentYear: number = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-[#5C6577] sm:flex-row">
        <span>© {currentYear} Meridian Systems. All rights reserved.</span>
        <div className="flex gap-6">
          {FOOTER_LINKS.map(({ href, label }) => (
            <FooterLink key={href} href={href} label={label} />
          ))}
        </div>
      </div>
    </footer>
  );
}