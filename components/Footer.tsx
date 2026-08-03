import Link from "next/link";

export default function Footer({ locale }: { locale: string }) {
  const year = new Date().getFullYear();

  const legalLinks = [
    {
      href: "/mentions-legales",
      label: { fr: "Mentions légales", en: "Legal notice" },
    },
    {
      href: "/politique-confidentialite",
      label: { fr: "Politique de confidentialité", en: "Privacy policy" },
    },
  ];

  return (
    <footer className="w-full border-t border-gray-100 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-sans text-sm text-gray-500">
          © {year} ELDIR. {locale === "fr" ? "Tous droits réservés." : "All rights reserved."}
        </p>

        <div className="flex items-center gap-6">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className="font-sans text-sm text-gray-500 hover:text-eldir-blue transition-colors"
            >
              {link.label[locale as "fr" | "en"]}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}