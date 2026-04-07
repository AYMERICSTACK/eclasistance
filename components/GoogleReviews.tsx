import Link from "next/link";
import { Star, Quote, ExternalLink, PencilLine } from "lucide-react";
import FadeIn from "./FadeIn";
import BrandInline from "./BrandInline";

const GOOGLE_LABEL = "Google";
const GOOGLE_REVIEW_COUNT = "2 avis Google";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Ecla+Sistance/@46.1153027,5.1885461,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x8a0e54cf579b12fb:0x9ca059af400bc884!2sEcla+Sistance,+4+Rue+des+Tilleuls,+01240+Lent!2m2!1d5.191121!2d46.115299!3m5!1s0x8a0e54cf579b12fb:0x9ca059af400bc884!8m2!3d46.115299!4d5.191121!16s%2Fg%2F11nb2mzw4c?hl=fr&authuser=0&entry=ttu&g_ep=EgoyMDI2MDMzMS4wIKXMDSoASAFQAw%3D%3D";

const GOOGLE_WRITE_REVIEW_URL = "https://g.page/r/CYTIC0CvWaCcEBM/review";

const reviews = [
  {
    name: "Julie L.",
    text: "Bravo à Mme BLANCHOT, jeune, dynamique, sérieuse, efficace et très sympa. L’intervention a été rapide, le travail bien fait, et le tarif reste très correct. Nous sommes vraiment satisfaits du service.",
  },
  {
    name: "Ahlem N.",
    text: "J'ai fait appel à Ecla sistance pour m'aider à ranger et trier ma maison, et leur aide a été précieuse. Le personnel a été très sympathique, professionnel et discret. Je recommande vivement leurs services ! Merci à la gérante.",
  },
];

function Stars({ size = "md" }: { size?: "sm" | "md" }) {
  const starSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className="flex items-center gap-1" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`${starSize} text-pink-400`}
          fill="currentColor"
          strokeWidth={1.8}
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
              Avis clients
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-800 sm:text-4xl">
              Ils font confiance à <BrandInline />
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Découvrez les premiers retours laissés sur Google par les clients
              accompagnés par <BrandInline /> à Lent, Bourg-en-Bresse et
              alentours.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <FadeIn delay={0.05}>
            <div className="rounded-[1.75rem] bg-gradient-to-br from-violet-600 to-pink-400 p-1 shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl sm:rounded-[2rem]">
              <div className="rounded-[calc(1.75rem-4px)] bg-white p-6 sm:rounded-[calc(2rem-4px)] sm:p-8 md:p-10">
                <div className="inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-violet-700">
                  {GOOGLE_LABEL}
                </div>

                <div className="mt-5">
                  <span className="text-4xl font-extrabold leading-none text-slate-800 sm:text-5xl">
                    Avis Google
                  </span>
                </div>

                <div className="mt-4">
                  <Stars />
                </div>

                <p className="mt-4 text-sm font-medium text-gray-700">
                  {GOOGLE_REVIEW_COUNT}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Avis vérifiés publiés sur Google
                </p>

                <p className="mt-5 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base">
                  Une présence locale en cours de construction, avec déjà
                  plusieurs retours clients très positifs sur la qualité du
                  service, le sérieux et la discrétion des interventions.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8">
                  <Link
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-pink-400 px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:px-6"
                  >
                    Voir les avis Google
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>

                  <Link
                    href={GOOGLE_WRITE_REVIEW_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-pink-200 bg-white px-5 py-3 text-sm font-semibold text-violet-700 shadow-sm transition duration-300 hover:bg-pink-50 hover:shadow-md sm:px-6"
                  >
                    Laisser un avis
                    <PencilLine className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review, index) => (
              <FadeIn key={review.name} delay={0.08 + index * 0.08}>
                <article className="group flex h-full flex-col rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-2 hover:ring-pink-100 sm:rounded-3xl sm:p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pink-100 transition duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
                      <Quote className="h-5 w-5 text-violet-700 sm:h-6 sm:w-6" />
                    </div>

                    <div className="scale-95">
                      <Stars size="sm" />
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-gray-600 sm:text-base">
                    “{review.text}”
                  </p>

                  <p className="mt-5 font-semibold text-slate-800">
                    {review.name}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
