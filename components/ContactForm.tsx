"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      serviceType: formData.get("serviceType"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erreur");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <p className="text-eldir-black text-lg font-medium mb-2">
          Message envoyé !
        </p>
        <p className="text-gray-600">
          Nous vous répondrons dans un délai de 2 à 5 jours ouvrables.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-eldir-black mb-1">
          Nom *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-eldir-blue"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-eldir-black mb-1">
          Nom de l&apos;entreprise
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-eldir-blue"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-eldir-black mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-eldir-blue"
        />
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-eldir-black mb-1">
          Service souhaité
        </label>
        <select
          id="serviceType"
          name="serviceType"
          className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-eldir-blue"
        >
          <option value="">Sélectionnez une option</option>
          <option value="Communication">Communication</option>
          <option value="Numérique">Solutions numériques</option>
          <option value="Les deux">Les deux</option>
          <option value="Je ne sais pas encore">Je ne sais pas encore</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-eldir-black mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-eldir-blue"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}

      <Button type="submit">
        {status === "loading" ? "Envoi..." : "Envoyer"}
      </Button>
    </form>
  );
}