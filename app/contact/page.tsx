import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import FadeIn from "../../components/FadeIn";
import BrandInline from "../../components/BrandInline";

export const metadata: Metadata = {
  title: "Contact | Écla sistance",
  description:
    "Contactez Écla sistance pour vos besoins en aide à domicile à Lent, Bourg-en-Bresse et alentours.",
};

export default function ContactPage() {
  return (
    <main>
      <Header />

      <section className="px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
                Contact
              </p>

              <h1 className="text-4xl font-extrabold text-slate-800 sm:text-5xl">
                Contactez <BrandInline />
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                Pour toute demande d’information, de devis ou d’intervention,{" "}
                <BrandInline /> est à votre écoute à Lent, Bourg-en-Bresse et
                alentours.
              </p>
            </div>
          </FadeIn>

          <div className="grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn className="h-full">
              <ContactForm />
            </FadeIn>

            <FadeIn delay={0.12} className="h-full">
              <div className="flex h-full flex-col rounded-[2rem] bg-gradient-to-r from-violet-600 to-pink-400 p-6 text-white shadow-2xl sm:p-8">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-100">
                  Coordonnées
                </p>

                <h2 className="text-2xl font-extrabold">
                  Une question ? Un besoin ?
                </h2>

                <p className="mt-3 text-white/90">
                  Nous sommes disponibles pour répondre à vos demandes
                  rapidement et vous orienter vers la prestation adaptée.
                </p>

                <div className="mt-6 grid gap-4">
                  <a
                    href="tel:+33617583850"
                    className="rounded-3xl bg-white/15 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-lg sm:p-5"
                  >
                    <p className="text-sm text-white/80">Téléphone</p>
                    <p className="mt-2 text-lg font-bold">06 17 58 38 50</p>
                  </a>

                  <a
                    href="mailto:eclasistance@hotmail.com"
                    className="rounded-3xl bg-white/15 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-lg sm:p-5"
                  >
                    <p className="text-sm text-white/80">Email</p>
                    <p className="mt-2 break-all text-base font-bold">
                      eclasistance@hotmail.com
                    </p>
                  </a>

                  <div className="rounded-3xl bg-white/15 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-lg sm:p-5">
                    <p className="text-sm text-white/80">Zone d’intervention</p>
                    <p className="mt-2 text-base font-bold">
                      Lent, Bourg-en-Bresse et alentours
                    </p>
                  </div>

                  <div className="mb-4 rounded-3xl bg-white/15 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-lg sm:p-5">
                    <p className="text-sm text-white/80">Prestations</p>
                    <p className="mt-2 text-base font-bold">
                      Particulier / Professionnel
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <div className="overflow-hidden rounded-[1.5rem] shadow-lg ring-1 ring-white/10">
                    <iframe
                      src="https://www.google.com/maps?q=Lent%20France&output=embed"
                      width="100%"
                      height="215"
                      style={{ border: 0 }}
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="mx-auto mt-16 max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Contactez votre aide à domicile à Lent
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Vous recherchez une aide à domicile à Lent ou à Bourg-en-Bresse ?{" "}
            <BrandInline /> est à votre écoute pour vous proposer une solution
            adaptée à vos besoins.
          </p>
        </section>
      </FadeIn>

      <Footer />
    </main>
  );
}
