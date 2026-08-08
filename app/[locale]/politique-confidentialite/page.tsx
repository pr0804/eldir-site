export const metadata = {
  title: "Politique de confidentialité — ELDIR",
  description:
    "Découvrez comment Innovation ELDIR Inc. protège et utilise vos renseignements personnels.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="flex-1">
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-eldir-black mb-4">Politique de confidentialité</h1>
        <p className="text-sm text-gray-500 mb-10">
          Dernière mise à jour : août 2026
        </p>

        <div className="space-y-8 text-gray-600">
          <div>
            <h2 className="text-eldir-black mb-2">Renseignements collectés</h2>
            <p>
              Lorsque vous utilisez notre formulaire de contact, nous
              collectons les renseignements suivants : votre nom, le nom de
              votre entreprise (le cas échéant), votre adresse courriel, le
              type de service souhaité, ainsi que le contenu de votre
              message.
            </p>
          </div>

          <div>
            <h2 className="text-eldir-black mb-2">Finalité de la collecte</h2>
            <p>
              Ces renseignements sont utilisés uniquement pour répondre à
              votre demande et assurer le suivi de nos échanges. Nous ne
              vendons ni ne partageons vos renseignements personnels à des
              tiers à des fins commerciales.
            </p>
          </div>

          <div>
            <h2 className="text-eldir-black mb-2">Durée de conservation</h2>
            <p>
              Vos renseignements sont conservés pendant une durée maximale de
              2 ans suivant notre dernier échange, après quoi ils sont
              supprimés de nos systèmes, sauf obligation légale contraire.
            </p>
          </div>

          <div>
            <h2 className="text-eldir-black mb-2">Fournisseurs tiers</h2>
            <p>
              Nous utilisons Resend, un service tiers d&apos;envoi de
              courriels, pour acheminer les messages soumis via notre
              formulaire de contact. Ce fournisseur peut traiter vos
              renseignements uniquement aux fins de cet envoi.
            </p>
          </div>

          <div>
            <h2 className="text-eldir-black mb-2">Vos droits</h2>
            <p>
              Conformément à la Loi sur la protection des renseignements
              personnels dans le secteur privé, vous pouvez en tout temps
              demander l&apos;accès, la rectification ou la suppression de
              vos renseignements personnels en nous contactant via notre{" "}
              <a href="/fr/contact" className="text-eldir-blue hover:underline">
                formulaire de contact
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-eldir-black mb-2">
              Responsable de la protection des renseignements personnels
            </h2>
            <p>
              La personne responsable de la protection des renseignements
              personnels chez Innovation ELDIR Inc. est Praise Mbay,
              joignable via notre formulaire de contact.
            </p>
          </div>

          <div>
            <h2 className="text-eldir-black mb-2">Cookies et témoins de connexion</h2>
            <p>
              Ce site n&apos;utilise actuellement aucun témoin de connexion
              (cookie) à des fins d&apos;analyse ou de suivi publicitaire.
              Cette politique sera mise à jour si cela venait à changer.
            </p>
          </div>

          <div>
            <h2 className="text-eldir-black mb-2">Modifications</h2>
            <p>
              Cette politique peut être mise à jour périodiquement. Toute
              modification sera publiée sur cette page avec une date de
              mise à jour révisée.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}