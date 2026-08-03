import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Accueil");

  return (
    <main className="flex-1 flex items-center justify-center">
      <h1 className="font-poppins text-4xl font-bold text-eldir-black">
        {t("titre")}
      </h1>
    </main>
  );
}