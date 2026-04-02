import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Écla sistance | Aide à domicile à Lent",
  description:
    "Services d’aide à domicile à Lent, Bourg-en-Bresse et alentours : ménage, repassage, accompagnement, pour particuliers et professionnels. 50% de crédit d’impôt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {/* 🔥 SCHEMA SEO LOCAL */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Écla sistance",
              areaServed: "Lent, Bourg-en-Bresse",
              description:
                "Service d’aide à domicile à Lent et Bourg-en-Bresse : ménage, repassage, accompagnement.",
              telephone: "+33617583850",
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
