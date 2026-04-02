import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import BrandInline from "../../components/BrandInline";
import {
  Home,
  Sparkles,
  Shirt,
  ShoppingCart,
  HeartHandshake,
  Briefcase,
} from "lucide-react";

const services = [
  {
    title: "Aide à domicile",
    text: "Un accompagnement humain et fiable pour faciliter le quotidien à domicile.",
    icon: Home,
  },
  {
    title: "Ménage & entretien",
    text: "Entretien régulier ou ponctuel de votre intérieur avec soin et rigueur.",
    icon: Sparkles,
  },
  {
    title: "Repassage",
    text: "Une prestation pratique pour vous faire gagner du temps au quotidien.",
    icon: Shirt,
  },
  {
    title: "Courses & accompagnement",
    text: "Aide pour les déplacements, les courses et les besoins de la vie courante.",
    icon: ShoppingCart,
  },
  {
    title: "Assistance personnes âgées",
    text: "Présence rassurante et accompagnement adapté aux besoins des seniors.",
    icon: HeartHandshake,
  },
  {
    title: "Particulier / Professionnel",
    text: "Des interventions souples pour les particuliers et les professionnels.",
    icon: Briefcase,
  },
];

export const metadata: Metadata = {
  title: "Services d’aide à domicile à Lent | Écla sistance",
  description:
    "Découvrez nos services d’aide à domicile à Lent et Bourg-en-Bresse : ménage, repassage, accompagnement et assistance.",
};

export default function ServicesPage() {
  return (
    <main>
      <Header />

      <section className="px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
                Services
              </p>

              <h1 className="text-4xl font-extrabold text-slate-800 sm:text-5xl">
                Nos services d’aide à domicile à Lent
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                <BrandInline /> propose des prestations fiables, humaines et
                adaptées à vos besoins pour particuliers et professionnels à
                Lent, Bourg-en-Bresse et alentours.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <FadeIn
                  key={service.title}
                  delay={index * 0.08}
                  className="h-full"
                >
                  <div className="group flex h-full flex-col rounded-3xl border border-pink-100 bg-white p-8 shadow-sm ring-1 ring-gray-100/70 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-300 to-violet-500 transition duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6 text-white stroke-[2.5]" />
                    </div>

                    <h2 className="min-h-[76px] text-xl font-bold leading-8 text-slate-800">
                      {service.title}
                    </h2>

                    <p className="leading-7 text-gray-600">{service.text}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.18}>
            <div className="mt-14 rounded-[2rem] bg-gradient-to-r from-violet-600 to-pink-400 p-8 text-center text-white shadow-2xl sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-100">
                Besoin d’un devis ?
              </p>

              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                Contactez <BrandInline white /> dès aujourd’hui
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-white/90">
                Nous sommes à votre écoute pour répondre à vos questions et vous
                proposer une solution adaptée à votre besoin à Lent,
                Bourg-en-Bresse et alentours.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold !text-violet-700 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Nous contacter
                </Link>

                <a
                  href="tel:+33617583850"
                  className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/10 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Appeler maintenant
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="mx-auto mt-16 max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Des services à la personne adaptés à vos besoins
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            <BrandInline /> propose des services à la personne à Lent et
            Bourg-en-Bresse adaptés à chaque situation. Nos prestations incluent
            le ménage, le repassage, l’accompagnement et les courses.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            Chaque intervention est personnalisée afin de répondre au mieux à
            vos attentes et d’assurer un confort optimal au quotidien.
          </p>
        </section>
      </FadeIn>

      <Footer />
    </main>
  );
}
