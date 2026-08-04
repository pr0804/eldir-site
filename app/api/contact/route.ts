import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, company, email, serviceType, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "ELDIR <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL as string,
      replyTo: email,
      subject: `Nouveau message de ${name}${company ? ` (${company})` : ""}`,
      text: `
Nom : ${name}
Entreprise : ${company || "Non précisé"}
Email : ${email}
Service souhaité : ${serviceType || "Non précisé"}

Message :
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}