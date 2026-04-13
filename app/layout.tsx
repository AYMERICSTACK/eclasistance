import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eclasistance.fr"),
  title: "Écla sistance | Aide à domicile à Lent & Bourg-en-Bresse",
  description:
    "Services d’aide à domicile à Lent, Bourg-en-Bresse et alentours : ménage, repassage, accompagnement, pour particuliers et professionnels. 50% de crédit d’impôt immédiat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Écla sistance",
              url: "https://www.eclasistance.fr",
              telephone: "+33617583850",
              areaServed: ["Lent", "Bourg-en-Bresse"],
              description:
                "Service d’aide à domicile à Lent et Bourg-en-Bresse : ménage, repassage, accompagnement.",
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
