import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import Image from "next/image";
import BrandInline from "../../components/BrandInline";

export const metadata: Metadata = {
  title: "Crédit d’impôt aide à domicile | Lent & Bourg-en-Bresse",
  description:
    "Profitez du crédit d’impôt immédiat de 50% sur vos services à domicile à Lent et Bourg-en-Bresse. Explication simple et rapide.",
};

const steps = [
  {
    title: "1. Intervention",
    text: "Nous réalisons la prestation à votre domicile selon vos besoins.",
  },
  {
    title: "2. Déclaration",
    text: "La prestation est déclarée automatiquement dans le dispositif.",
  },
  {
    title: "3. Paiement",
    text: "Vous ne payez que 50% du montant grâce à l’avance immédiate.",
  },
];

export default function CreditImpotPage() {
  return (
    <main>
      <Header />

      <section className="px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
                Avantage fiscal
              </p>

              <h1 className="text-4xl font-extrabold text-slate-800 sm:text-5xl">
                50% de crédit d’impôt immédiat
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Avec <BrandInline />, vous bénéficiez de l’avance immédiate du
                crédit d’impôt. Vous ne payez que la moitié de vos prestations.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.1}>
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h2 className="text-lg font-bold text-slate-800">
                    {step.title}
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">{step.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <div className="mt-14 rounded-[2rem] bg-gradient-to-r from-violet-600 to-pink-400 p-8 text-center text-white shadow-xl transition duration-300 hover:shadow-2xl sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-100">
                Exemple concret
              </p>

              <h2 className="mt-4 text-3xl font-extrabold">
                20€ de prestation = 10€ à payer
              </h2>

              <p className="mt-4 text-white/90">
                Grâce au crédit d’impôt immédiat, la moitié est directement
                prise en charge.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                <div className="shrink-0">
                  <Image
                    src="/logo-services-a-la-personne.png"
                    alt="Logo services à la personne"
                    width={140}
                    height={140}
                    className="h-auto w-[110px] sm:w-[130px]"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Un service déclaré ouvrant droit au crédit d’impôt
                  </h2>
                  <p className="mt-2 leading-7 text-gray-600">
                    <BrandInline /> s’inscrit dans le cadre des services à la
                    personne, vous permettant de bénéficier, selon votre
                    situation, de l’avance immédiate du crédit d’impôt de 50%.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-14 text-center">
              <h2 className="text-2xl font-extrabold text-slate-800">
                Profitez-en dès maintenant
              </h2>

              <p className="mt-3 text-gray-600">
                Contactez <BrandInline /> pour bénéficier de vos services à prix
                réduit.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-pink-400 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Demander un devis
                </Link>

                <a
                  href="tel:+33617583850"
                  className="inline-flex items-center justify-center rounded-full border border-pink-100 bg-white px-6 py-3 font-semibold text-violet-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-pink-50 hover:shadow-md"
                >
                  Appeler maintenant
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn delay={0.2}>
        <section className="mx-auto mt-16 max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Un avantage fiscal pour vos services à domicile
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Les services à domicile proposés à Lent et Bourg-en-Bresse peuvent
            bénéficier du crédit d’impôt immédiat. Cela permet de réduire
            directement le coût des prestations.
          </p>
        </section>
      </FadeIn>

      <Footer />
    </main>
  );
}
