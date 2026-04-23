import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeServicesPreview from "../components/HomeServicesPreview";
import Contact from "../components/Contact";
import CreditHighlight from "../components/CreditHighlight";
import GoogleReviews from "../components/GoogleReviews";
import FadeIn from "../components/FadeIn";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aide à domicile à Lent & Bourg-en-Bresse | Écla sistance",
  description:
    "Écla sistance propose des services d’aide à domicile à Lent, Bourg-en-Bresse et alentours : ménage, repassage, accompagnement et aide du quotidien avec 50% de crédit d’impôt immédiat.",
};

export default function Home() {
  return (
    <main>
      <Header />

      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn delay={0.05}>
        <HomeServicesPreview />
      </FadeIn>

      <FadeIn delay={0.07}>
        <GoogleReviews />
      </FadeIn>

      <FadeIn delay={0.08}>
        <CreditHighlight />
      </FadeIn>

      <FadeIn delay={0.1}>
        <Contact />
      </FadeIn>

      <section className="bg-gray-50 px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900">
            Votre aide à domicile à Lent et Bourg-en-Bresse
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            <span className="inline-flex items-center gap-2">
              <Image
                src="/logo-texte.svg"
                alt="Écla sistance"
                width={140}
                height={40}
                className="h-6 w-auto"
              />
            </span>{" "}
            propose des services d’aide à domicile à Lent, Bourg-en-Bresse et
            dans les communes alentours. Nous accompagnons les particuliers avec
            des prestations de ménage, repassage, courses, entretien du domicile
            et assistance du quotidien, dans une approche humaine, sérieuse et
            rassurante.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            Chaque intervention est pensée pour simplifier votre quotidien et
            vous apporter plus de confort à domicile. Que vous ayez besoin d’une
            aide ponctuelle ou régulière, nous proposons un accompagnement
            personnalisé à Lent et à Bourg-en-Bresse.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            Grâce au crédit d’impôt immédiat à 50%, les services à la personne
            deviennent plus accessibles, avec un reste à charge réduit dès la
            facturation selon votre situation.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
