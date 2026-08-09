import { Megaphone, Laptop } from "lucide-react";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata = {
  title: "ELDIR — Communication professionnelle et solutions numériques",
  description:
    "ELDIR accompagne les entreprises en communication professionnelle et en solutions numériques sur mesure. Une voix claire, une présence numérique forte.",
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
        <h1 className="text-eldir-black mb-6">
          Une voix claire, une présence numérique forte
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          De la stratégie de communication au développement de solutions
          numériques, ELDIR donne aux entreprises les outils pour affirmer
          leur présence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={`/${locale}/contact`}>Nous contacter</Button>
          <Button href={`/${locale}/services`} variant="secondary">
            Découvrir nos services
          </Button>
        </div>
      </section>

      {/* Aperçu des 2 pôles */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card icon={<Megaphone size={32} />} title="Communication professionnelle">
          <p>
            Branding, newsletters, guides, documentation, communication de
            projet — une image et une voix cohérentes à chaque étape.
          </p>
          <a href={`/${locale}/services`} className="inline-block mt-3 text-eldir-blue font-medium hover:underline">
            En savoir plus →
          </a>
        </Card>

        <Card icon={<Laptop size={32} />} title="Solutions numériques">
          <p>
            Sites web, formulaires, portails numériques — des outils pensés
            pour vos besoins réels.
          </p>
          <a href={`/${locale}/services`} className="inline-block mt-3 text-eldir-blue font-medium hover:underline">
            En savoir plus →
          </a>
        </Card>
      </section>

      {/* Réassurance / complémentarité */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-eldir-black mb-4">
          Deux expertises, une seule vision
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ELDIR réunit la communication professionnelle et l&apos;ingénierie
          numérique au sein d&apos;une seule équipe. Une collaboration pensée
          pour offrir aux entreprises une expérience cohérente, de la
          stratégie à la réalisation.
        </p>
      </section>

      {/* CTA final */}
      <section className="bg-eldir-black py-16 text-center">
        <h2 className="text-white mb-6">
          Prêt à donner une voix à votre entreprise ?
        </h2>
        <Button href={`/${locale}/contact`}>Nous contacter</Button>
      </section>
    </main>
  );
}