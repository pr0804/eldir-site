"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: { fr: "Accueil", en: "Home" } },
  { href: "/services", label: { fr: "Services", en: "Services" } },
  { href: "/a-propos", label: { fr: "À propos", en: "About" } },
  { href: "/contact", label: { fr: "Contact", en: "Contact" } },
];

export default function Header({ locale }: { locale: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100 relative">
      <div className="w-full px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Image src="/logo.png" alt="ELDIR" width={40} height={40} />
          <span className="font-poppins font-bold text-xl text-eldir-black">
            ELDIR
          </span>
        </Link>

        <div className="flex items-center gap-10">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="font-sans text-eldir-black hover:text-eldir-blue transition-colors"
              >
                {link.label[locale as "fr" | "en"]}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-eldir-black"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 flex flex-col px-6 py-4 gap-4 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-eldir-black hover:text-eldir-blue transition-colors py-2"
            >
              {link.label[locale as "fr" | "en"]}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}