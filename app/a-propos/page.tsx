import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import BrandInline from "../../components/BrandInline";
import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  MapPin,
  Phone,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "À propos | Écla sistance",
  description:
    "Découvrez Écla sistance, service d’aide à domicile à Lent, Bourg-en-Bresse et alentours. Une approche humaine, rassurante et professionnelle pour accompagner votre quotidien.",
};

const PHONE_DISPLAY = "06 17 58 38 50";
const PHONE_LINK = "tel:+33617583850";

const values = [
  {
    icon: HeartHandshake,
    title: "Bienveillance",
    description:
      "Chaque accompagnement est pensé avec douceur, écoute et respect du rythme de chacun.",
  },
  {
    icon: ShieldCheck,
    title: "Fiabilité",
    description:
      "Une présence sérieuse, ponctuelle et professionnelle pour intervenir en toute confiance.",
  },
  {
    icon: Sparkles,
    title: "Qualité de service",
    description:
      "Des prestations réalisées avec soin pour apporter confort, sérénité et tranquillité au quotidien.",
  },
];

const reasons = [
  "Un accompagnement humain et personnalisé",
  "Une intervenante de proximité, à l’écoute de vos besoins",
  "Des prestations claires, simples et rassurantes",
  "Le bénéfice du crédit d’impôt immédiat à 50%",
  "Une intervention locale à Lent, Bourg-en-Bresse et alentours",
  "Un contact direct, réactif et sans intermédiaire compliqué",
];

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      <Header />

      <section className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="absolute left-0 top-0 h-40 w-full bg-gradient-to-r from-violet-200 to-pink-200 opacity-50 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <FadeIn>
              <div>
                <p className="mb-4 inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-violet-700">
                  Une aide à domicile humaine, douce et rassurante
                </p>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                  À propos d’ <BrandInline />
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                  <BrandInline /> accompagne les particuliers avec une approche
                  fondée sur la proximité, la confiance et la qualité de
                  service. L’objectif est simple : vous apporter une aide
                  concrète au quotidien, avec sérieux, bienveillance et
                  discrétion.
                </p>

                <p className="mt-4 max-w-2xl leading-8 text-gray-600">
                  À Lent, Bourg-en-Bresse et dans les alentours, chaque
                  intervention est pensée pour simplifier la vie, rassurer et
                  offrir un accompagnement vraiment humain.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-pink-400 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Demander un devis
                  </Link>

                  <a
                    href={PHONE_LINK}
                    className="inline-flex items-center justify-center rounded-full border border-pink-100 bg-white px-6 py-3 text-sm font-semibold text-violet-700 shadow-sm transition duration-300 hover:bg-pink-50 hover:shadow-md"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Appeler {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-[2rem] bg-gradient-to-br from-violet-600 to-pink-400 p-1 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="rounded-[calc(2rem-4px)] bg-white p-8 sm:p-10">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50">
                    <HeartHandshake className="h-8 w-8 text-violet-700" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900">
                    Une présence de confiance au quotidien
                  </h2>

                  <p className="mt-4 leading-7 text-gray-600">
                    Parce que chaque besoin est différent, <BrandInline />{" "}
                    propose un accompagnement attentif, humain et adapté. L’idée
                    n’est pas seulement de rendre service, mais aussi d’apporter
                    plus de confort, de sérénité et un vrai soutien dans le
                    quotidien.
                  </p>

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-2xl bg-gray-50 px-4 py-3 text-sm text-gray-700 transition duration-300 hover:shadow-sm">
                      Intervention à <strong>Lent</strong>,
                      <strong> Bourg-en-Bresse</strong> et alentours
                    </div>
                    <div className="rounded-2xl bg-gray-50 px-4 py-3 text-sm text-gray-700 transition duration-300 hover:shadow-sm">
                      Prestations d’aide à domicile avec un accompagnement
                      personnalisé
                    </div>
                    <div className="rounded-2xl bg-gray-50 px-4 py-3 text-sm text-gray-700 transition duration-300 hover:shadow-sm">
                      Avance immédiate du crédit d’impôt disponible selon votre
                      situation
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <FadeIn>
            <div className="rounded-[2rem] bg-gradient-to-br from-violet-600 to-pink-400 p-1 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="rounded-[calc(2rem-4px)] bg-white p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 transition duration-300 hover:scale-105">
                    <HeartHandshake className="h-6 w-6 text-violet-700" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">
                    Une approche humaine
                  </p>
                </div>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Derrière <BrandInline />, il y a une volonté forte : proposer
                  un service de proximité, sérieux et chaleureux, où la
                  confiance et l’attention portée aux personnes comptent autant
                  que la prestation elle-même.
                </p>

                <p className="mt-4 text-lg leading-8 text-gray-600">
                  L’objectif est d’offrir une aide concrète, avec une vraie
                  qualité de présence, dans un cadre simple, respectueux et
                  rassurant.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
                Qui suis-je ?
              </p>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Un service fondé sur l’écoute, la proximité et la confiance
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                <BrandInline /> est née d’une envie simple : apporter une aide
                utile, humaine et de confiance dans le quotidien des personnes
                qui en ont besoin. Dans ce métier, la qualité de la relation est
                essentielle. Il ne s’agit pas seulement de réaliser une
                prestation, mais aussi d’intervenir avec sérieux, discrétion et
                bienveillance.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Chaque demande mérite une réponse claire, rassurante et adaptée.
                Cette vision guide chaque intervention : proposer un service
                professionnel, accessible et chaleureux, avec une attention
                réelle portée au confort et au bien-être des personnes
                accompagnées.
              </p>

              <div className="mt-8 rounded-3xl bg-violet-50 p-6 transition duration-300 hover:shadow-md">
                <p className="text-base leading-7 text-gray-700">
                  <span className="font-semibold text-violet-700">
                    La priorité :
                  </span>{" "}
                  offrir un accompagnement de qualité, avec une présence
                  professionnelle, humaine et rassurante à chaque intervention.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
                Les valeurs d’ <BrandInline />
              </p>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Une manière d’accompagner fondée sur l’essentiel
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Chaque intervention repose sur des valeurs simples mais
                fondamentales : le respect, la qualité de service et la
                confiance.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <FadeIn key={value.title} delay={index * 0.1}>
                  <div className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 transition duration-300 group-hover:scale-105">
                      <Icon className="h-7 w-7 text-violet-700" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900">
                      {value.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <FadeIn>
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
                  Pourquoi choisir <BrandInline /> ?
                </p>

                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Un service local, sérieux et pensé pour vous simplifier la vie
                </h2>

                <p className="mt-6 leading-8 text-gray-600">
                  Choisir <BrandInline />, c’est faire le choix d’un
                  accompagnement de proximité, professionnel et humain. Tout est
                  pensé pour vous apporter plus de confort au quotidien, avec
                  une relation simple, claire et rassurante.
                </p>

                <div className="mt-8 grid gap-4">
                  {reasons.map((reason) => (
                    <div
                      key={reason}
                      className="flex items-start gap-3 rounded-2xl bg-gray-50 px-4 py-4 transition duration-300 hover:shadow-md"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-pink-500" />
                      <p className="text-gray-700">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-[2rem] bg-gradient-to-br from-violet-600 to-pink-400 p-1 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="rounded-[calc(2rem-4px)] bg-white/10 p-8 text-white backdrop-blur sm:p-10">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                    <MapPin className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    Une présence locale et rassurante
                  </h3>

                  <p className="mt-4 leading-8 text-white/90">
                    <BrandInline white /> intervient à Lent, Bourg-en-Bresse et
                    dans les alentours pour proposer un service de proximité,
                    plus humain, plus simple et plus réactif.
                  </p>

                  <div className="mt-8 space-y-3">
                    <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-white transition duration-300 hover:bg-white/15">
                      Lent
                    </div>
                    <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-white transition duration-300 hover:bg-white/15">
                      Bourg-en-Bresse
                    </div>
                    <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-white transition duration-300 hover:bg-white/15">
                      Alentours
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl bg-white/10 p-4 transition duration-300 hover:bg-white/15">
                    <p className="text-sm leading-7 text-white/90">
                      Le crédit d’impôt immédiat permet, selon votre situation,
                      de bénéficier d’un reste à charge réduit dès la
                      facturation.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="rounded-[2rem] bg-gradient-to-r from-violet-600 to-pink-400 p-8 text-white shadow-xl transition duration-300 hover:shadow-2xl sm:p-10 md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-100">
                  Besoin d’un accompagnement ?
                </p>

                <h2 className="text-3xl font-bold sm:text-4xl">
                  <BrandInline white /> est à votre écoute pour vous accompagner
                  au quotidien
                </h2>

                <p className="mt-4 text-lg leading-8 text-white/90">
                  Vous souhaitez obtenir un renseignement, demander un devis ou
                  échanger sur vos besoins ? Contactez <BrandInline white />{" "}
                  simplement et rapidement.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold !text-violet-700 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Demander un devis
                  </Link>

                  <a
                    href={PHONE_LINK}
                    className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Appeler {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
