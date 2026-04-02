import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const firstName = String(body.firstName || "").trim();
    const lastName = String(body.lastName || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    if (!firstName || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Merci de remplir les champs obligatoires." },
        { status: 400 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;

    if (!process.env.RESEND_API_KEY || !to) {
      return NextResponse.json(
        { error: "Configuration email manquante côté serveur." },
        { status: 500 },
      );
    }

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message);

    const internalSubject =
      `Nouvelle demande de contact - ${firstName} ${lastName}`.trim();

    const internalHtml = `
      <div style="margin:0; padding:0; background:#f8f5ff; font-family:Arial,Helvetica,sans-serif; color:#1f2937;">
        <div style="max-width:640px; margin:0 auto; padding:32px 20px;">
          <div style="
            background:linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
            border-radius:24px 24px 0 0;
            padding:32px 24px;
            color:#ffffff;
            text-align:center;
          ">
            <p style="margin:0; font-size:12px; letter-spacing:2px; text-transform:uppercase; opacity:0.9;">
              Nouvelle demande de contact
            </p>
            <h1 style="margin:12px 0 0; font-size:28px; line-height:1.2;">
              Écla sistance
            </h1>
            <p style="margin:10px 0 0; font-size:15px; opacity:0.95;">
              Une nouvelle demande a été envoyée depuis le site internet.
            </p>
          </div>

          <div style="
            background:#ffffff;
            border-radius:0 0 24px 24px;
            padding:24px;
            box-shadow:0 12px 30px rgba(124,58,237,0.08);
          ">
            <div style="display:grid; gap:16px;">
              <div style="background:#faf7ff; border:1px solid #f3e8ff; border-radius:18px; padding:16px;">
                <p style="margin:0 0 6px; font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#a855f7;">Prénom</p>
                <p style="margin:0; font-size:16px; font-weight:700; color:#1f2937;">${safeFirstName || "-"}</p>
              </div>

              <div style="background:#faf7ff; border:1px solid #f3e8ff; border-radius:18px; padding:16px;">
                <p style="margin:0 0 6px; font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#a855f7;">Nom</p>
                <p style="margin:0; font-size:16px; font-weight:700; color:#1f2937;">${safeLastName || "-"}</p>
              </div>

              <div style="background:#faf7ff; border:1px solid #f3e8ff; border-radius:18px; padding:16px;">
                <p style="margin:0 0 6px; font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#a855f7;">Téléphone</p>
                <p style="margin:0; font-size:16px; font-weight:700; color:#1f2937;">${safePhone || "-"}</p>
              </div>

              <div style="background:#faf7ff; border:1px solid #f3e8ff; border-radius:18px; padding:16px;">
                <p style="margin:0 0 6px; font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#a855f7;">Email</p>
                <p style="margin:0; font-size:16px; font-weight:700; color:#1f2937;">${safeEmail || "-"}</p>
              </div>

              <div style="background:#faf7ff; border:1px solid #f3e8ff; border-radius:18px; padding:16px;">
                <p style="margin:0 0 6px; font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#a855f7;">Service demandé</p>
                <p style="margin:0; font-size:16px; font-weight:700; color:#1f2937;">${safeService || "-"}</p>
              </div>

              <div style="background:#fff7fb; border:1px solid #fbcfe8; border-radius:18px; padding:18px;">
                <p style="margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#ec4899;">Message</p>
                <p style="margin:0; font-size:15px; line-height:1.7; color:#374151; white-space:pre-line;">${safeMessage || "-"}</p>
              </div>
            </div>

            <div style="margin-top:24px; padding-top:20px; border-top:1px solid #f3e8ff; text-align:center;">
              <p style="margin:0; font-size:12px; color:#6b7280;">
                Email envoyé automatiquement depuis le formulaire de contact du site Écla sistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    const customerSubject = "Votre demande a bien été reçue - Écla sistance";

    const customerHtml = `
      <div style="margin:0; padding:0; background:#f8f5ff; font-family:Arial,Helvetica,sans-serif; color:#1f2937;">
        <div style="max-width:640px; margin:0 auto; padding:32px 20px;">
          <div style="
            background:linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
            border-radius:24px 24px 0 0;
            padding:32px 24px;
            color:#ffffff;
            text-align:center;
          ">
            <p style="margin:0; font-size:12px; letter-spacing:2px; text-transform:uppercase; opacity:0.9;">
              Confirmation de demande
            </p>
            <h1 style="margin:12px 0 0; font-size:28px; line-height:1.2;">
              Écla sistance
            </h1>
            <p style="margin:10px 0 0; font-size:15px; opacity:0.95;">
              Merci pour votre message.
            </p>
          </div>

          <div style="
            background:#ffffff;
            border-radius:0 0 24px 24px;
            padding:24px;
            box-shadow:0 12px 30px rgba(124,58,237,0.08);
          ">
            <h2 style="margin:0 0 14px; font-size:24px; color:#1f2937;">
              Bonjour ${safeFirstName},
            </h2>

            <p style="margin:0 0 16px; font-size:15px; line-height:1.7; color:#4b5563;">
              Nous avons bien reçu votre demande de contact et nous vous remercions pour votre confiance.
            </p>

            <p style="margin:0 0 16px; font-size:15px; line-height:1.7; color:#4b5563;">
              Nous reviendrons vers vous rapidement afin d’échanger sur votre besoin et de vous proposer une solution adaptée.
            </p>

            <div style="background:#faf7ff; border:1px solid #f3e8ff; border-radius:18px; padding:18px; margin:20px 0;">
              <p style="margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#a855f7;">
                Récapitulatif de votre demande
              </p>
              <p style="margin:0 0 6px; font-size:15px; color:#374151;">
                <strong>Service :</strong> ${safeService || "Non renseigné"}
              </p>
              <p style="margin:0; font-size:15px; color:#374151; white-space:pre-line;">
                <strong>Message :</strong><br />
                ${safeMessage || "-"}
              </p>
            </div>

            <div style="background:#fff7fb; border:1px solid #fbcfe8; border-radius:18px; padding:18px;">
              <p style="margin:0 0 10px; font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#ec4899;">
                Coordonnées
              </p>
              <p style="margin:0 0 6px; font-size:15px; color:#374151;">
                <strong>Téléphone :</strong> 06 17 58 38 50
              </p>
              <p style="margin:0 0 6px; font-size:15px; color:#374151;">
                <strong>Email :</strong> eclasistance@hotmail.com
              </p>
              <p style="margin:0; font-size:15px; color:#374151;">
                <strong>Zone :</strong> Lent, Bourg-en-Bresse et alentours
              </p>
            </div>

            <div style="margin-top:24px; text-align:center;">
              <p style="margin:0; font-size:14px; color:#6b7280;">
                À très bientôt,<br />
                <strong style="color:#7c3aed;">Écla sistance</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    const internalResult = await resend.emails.send({
      from: "Écla sistance <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: internalSubject,
      html: internalHtml,
    });

    if (internalResult.error) {
      return NextResponse.json(
        { error: "Impossible d’envoyer le message pour le moment." },
        { status: 500 },
      );
    }

    const customerResult = await resend.emails.send({
      from: "Écla sistance <onboarding@resend.dev>",
      to: email,
      subject: customerSubject,
      html: customerHtml,
    });

    if (customerResult.error) {
      console.error("CUSTOMER_EMAIL_ERROR", customerResult.error);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CONTACT_API_ERROR", error);

    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 },
    );
  }
}
