import { Megaphone, Laptop } from "lucide-react";
import Accordion from "@/components/Accordion";
import Button from "@/components/Button";

export const metadata = {
  title: "Nos services — ELDIR",
  description:
    "Communication interne, branding, sites web, portails numériques et plus encore. Découvrez tous les services offerts par ELDIR.",
};

const communication = [
  {
    title: "Communication interne",
    items: [
      "Manuel de l'employé",
      "Guide d'accueil",
      "Newsletter",
      "Affiches internes",
      "Supports de formation",
      "FAQ",
    ],
  },
  {
    title: "Documentation professionnelle",
    items: ["Guides", "Procédures", "Manuels", "Modèles de documents"],
  },
  {
    title: "Communication de projets",
    items: [
      "Communication communautaire",
      "Présentation des impacts",
      "Résultats de projets sociaux",
    ],
  },
  {
    title: "Branding",
    items: ["Identité visuelle", "Charte graphique", "Positionnement de marque"],
  },
];

const numerique = [
  {
    title: "Sites web",
    items: ["Site vitrine", "Site corporatif", "Landing page"],
  },
  {
    title: "Formulaires numériques",
    items: [
      "Formulaire de candidature",
      "Formulaire d'inscription",
      "Formulaire de réservation",
    ],
  },
  {
    title: "Portails numériques",
    items: [
      "Portail de candidature",
      "Portail d'inscription",
      "Portail de réservation",
      "Tableau de bord administratif",
    ],
  },
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="flex-1">
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <h1 className="text-eldir-black mb-4">Nos services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          De la stratégie de communication au développement numérique,
          explorez tout ce qu&apos;ELDIR peut faire pour votre entreprise.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Megaphone size={28} className="text-eldir-blue" aria-hidden="true"/>
            <h2 className="text-eldir-black">Communication professionnelle</h2>
          </div>
          <Accordion data={communication} />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <Laptop size={28} className="text-eldir-blue" aria-hidden="true"/>
            <h2 className="text-eldir-black">Solutions numériques</h2>
          </div>
          <Accordion data={numerique} />
        </div>
      </section>

      <section className="bg-eldir-black py-16 text-center">
        <h2 className="text-white mb-6">
          Un projet en tête ? Discutons-en.
        </h2>
        <Button href={`/${locale}/contact`}>Nous contacter</Button>
      </section>
    </main>
  );
}