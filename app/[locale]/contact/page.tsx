import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — ELDIR",
  description:
    "Une question, un projet en tête ? Contactez ELDIR pour discuter de vos besoins en communication ou en solutions numériques.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <h1 className="text-eldir-black mb-4">Contactez-nous</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Une question, un projet en tête ? Écrivez-nous, il nous fera plaisir d&apos;échanger avec vous
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <ContactForm />
      </section>
    </main>
  );
}