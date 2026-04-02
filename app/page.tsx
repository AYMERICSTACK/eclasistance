import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeServicesPreview from "../components/HomeServicesPreview";
import Contact from "../components/Contact";
import CreditHighlight from "../components/CreditHighlight";
import GoogleReviews from "../components/GoogleReviews";
import FadeIn from "../components/FadeIn";
import Image from "next/image";

export const metadata = {
  title: "Aide à domicile à Lent | Écla sistance",
  description:
    "Service d’aide à domicile à Lent et Bourg-en-Bresse. Ménage, repassage, accompagnement. Bénéficiez du crédit d’impôt immédiat à 50%.",
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

      <section className="bg-grey px-6 py-16 text-center">
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
            dans les environs. Que ce soit pour du ménage, du repassage, des
            courses ou un accompagnement quotidien, chaque intervention est
            réalisée avec sérieux et bienveillance.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            Grâce au crédit d’impôt immédiat, vous bénéficiez d’un reste à
            charge réduit de 50%, ce qui rend les services à domicile plus
            accessibles.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
