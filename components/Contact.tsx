import Image from "next/image";
import BrandInline from "../components/BrandInline";

export default function Contact() {
  return (
    <section
      id="contact"
      className="-mt-10 bg-gray-50 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-violet-600 to-pink-400 p-6 text-white shadow-2xl sm:p-8 md:p-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-100">
          Contact
        </p>

        <h2 className="mb-4 max-w-3xl text-3xl font-extrabold md:text-4xl">
          Contactez-nous dès aujourd’hui
        </h2>

        <p className="mb-6 max-w-2xl text-white/90">
          Besoin d’un renseignement, d’un devis ou d’une intervention ?{" "}
          <span className="inline-flex items-center">
            <BrandInline white />
          </span>{" "}
          est à votre écoute.
        </p>

        <p className="mb-10 text-sm font-medium text-white/80">
          📍 Intervention à Lent, Bourg-en-Bresse et alentours
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="tel:0617583850"
            className="rounded-2xl bg-white/15 p-5 backdrop-blur transition duration-300 hover:bg-white/20 hover:shadow-lg"
          >
            <p className="text-sm text-white/80">Téléphone</p>
            <p className="mt-2 text-lg font-bold">06 17 58 38 50</p>
          </a>

          <a
            href="mailto:eclasistance@hotmail.com"
            className="rounded-2xl bg-white/15 p-5 backdrop-blur transition duration-300 hover:bg-white/20 hover:shadow-lg"
          >
            <p className="text-sm text-white/80">Email</p>
            <p className="mt-2 break-all text-base font-bold">
              eclasistance@hotmail.com
            </p>
          </a>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur transition duration-300 hover:bg-white/20 hover:shadow-lg">
            <p className="text-sm text-white/80">Prestations</p>
            <p className="mt-2 text-base font-bold">
              Particulier / Professionnel
            </p>
          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur transition duration-300 hover:bg-white/20 hover:shadow-lg">
            <p className="text-sm text-white/80">Action rapide</p>

            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href="tel:0617583850"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold !text-violet-700 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Appeler
              </a>

              <a
                href="mailto:eclasistance@hotmail.com"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-5 py-2 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Envoyer un email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/10 transition duration-300 hover:shadow-2xl">
          <iframe
            src="https://www.google.com/maps?q=Lent%20France&output=embed"
            width="100%"
            height="260"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
