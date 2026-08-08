export const metadata = {
  title: "Mentions légales — ELDIR",
  description: "Mentions légales et informations juridiques d'Innovation ELDIR Inc.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="flex-1">
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-eldir-black mb-10">Mentions légales</h1>

        <div className="space-y-8 text-gray-600">
          <div>
            <h2 className="text-eldir-black mb-2">Identification de l&apos;entreprise</h2>
            <p>
              Ce site est édité par Innovation ELDIR Inc., entreprise
              immatriculée au Registraire des entreprises du Québec sous le
              numéro d&apos;entreprise du Québec (NEQ) 1182422866.
            </p>
          </div>

          <div>
            <h2 className="text-eldir-black mb-2">Siège social</h2>
            <p>1105 Av. Belvédère, Québec, QC, G1S 3G5, Canada</p>
          </div>

          <div>
            <h2 className="text-eldir-black mb-2">Contact</h2>
            <p>
              Pour toute question concernant ce site ou nos services,
              veuillez utiliser notre{" "}
              <a href="/fr/contact" className="text-eldir-blue hover:underline">
                formulaire de contact
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-eldir-black mb-2">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, États-Unis.
            </p>
          </div>

          <div>
            <h2 className="text-eldir-black mb-2">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, logo, visuels)
              est la propriété d&apos;Innovation ELDIR Inc., sauf mention
              contraire, et ne peut être reproduit sans autorisation
              préalable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}