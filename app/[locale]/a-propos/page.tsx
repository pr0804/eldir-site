import { User } from "lucide-react";
import Button from "@/components/Button";

export const metadata = {
  title: "Notre histoire — ELDIR",
  description:
    "Découvrez l'histoire d'ELDIR, née de la complémentarité entre communication professionnelle et ingénierie numérique.",
};

export default async function AProposPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="flex-1">
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-eldir-black mb-10 text-center">Notre histoire</h1>

        <p className="text-xl font-poppins font-medium text-eldir-black text-center mb-10">
          Tout a commencé par un coup de main. Il est devenu une entreprise.
        </p>

        <p className="text-gray-600 mb-6">
          Notre père organisait un événement, et il devait le suivre à
          distance, entre deux déplacements. Nous lui avons construit une
          solution simple, pensée pour lui. Un geste familial, presque
          anodin.
        </p>

        <p className="text-gray-600 mb-6">
          Sauf que ça a fonctionné, mieux qu&apos;on ne l&apos;espérait.
        </p>

        <p className="text-gray-600 mb-10">
          Il nous a vues faire, et il a vu plus loin que nous : <em>&laquo;
          Ça, d&apos;autres en ont besoin aussi. &raquo; </em>  Cette phrase est
          devenue le point de départ d&apos;ELDIR.
        </p>

        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-16">
          <h3 className="text-eldir-black mb-2">Le nom</h3>
          <p className="text-gray-600">
            ELDIR n&apos;est pas un mot choisi au hasard. C&apos;est la
            rencontre de deux prénoms : Désiré et Elvire - nos parents. Une
            façon de porter, dans le nom même de l&apos;entreprise,
            l&apos;inspiration qui l&apos;a rendue possible.
          </p>
        </div>

        <h2 className="text-eldir-black text-center mb-4">
          Deux expertises. Une seule équipe.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <User size={48} className="text-gray-300" />
            </div>
            <h3 className="text-eldir-black mb-1">Praise</h3>
            <p className="text-sm text-gray-600">
              Conçoit et développe des solutions numériques sur mesure.
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <User size={48} className="text-gray-300" />
            </div>
            <h3 className="text-eldir-black mb-1">Thanks</h3>
            <p className="text-sm text-gray-600">
              Façonne l&apos;image et la voix des entreprises que nous
              accompagnons.
            </p>
          </div>
        </div>

        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Deux compétences qui, séparément, existent déjà ailleurs. Réunies,
          elles évitent à nos clients un détour bien connu : chercher un
          prestataire pour le message, un autre pour la technique, puis
          espérer que les deux s&apos;accordent. Chez ELDIR, ce travail de
          coordination, on s&apos;en charge pour vous.
        </p>
      </section>

      <section className="bg-eldir-black py-16 text-center">
        <h2 className="text-white mb-6">Une idée à concrétiser ?</h2>
        <Button href={`/${locale}/contact`}>Parlons-en →</Button>
      </section>
    </main>
  );
}