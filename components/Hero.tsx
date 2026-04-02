import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 md:py-20">
      <div className="absolute left-0 top-0 h-40 w-full bg-gradient-to-r from-pink-200 to-violet-300 opacity-30 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <p className="mb-4 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-violet-700">
            50% de crédit d’impôt immédiat
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-slate-800 sm:text-5xl md:text-6xl">
            Aide à domicile à Lent
            <span className="block text-violet-700">fiable et humaine</span>
          </h1>

          <p className="mb-3 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            <span className="inline-flex items-center">
              <Image
                src="/logo-texte.svg"
                alt="Écla sistance"
                width={140}
                height={40}
                className="h-6 w-auto translate-y-[2px]"
              />
            </span>{" "}
            vous accompagne au quotidien avec des prestations de ménage,
            repassage et assistance à domicile pour particuliers et
            professionnels.
          </p>

          <p className="mb-8 text-base font-medium text-violet-700">
            Intervention à Lent, Bourg-en-Bresse et alentours
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-pink-400 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Demander un devis
            </a>

            <a
              href="tel:0617583850"
              className="inline-flex items-center justify-center rounded-full border border-pink-100 bg-white px-6 py-3 font-semibold text-violet-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-pink-50 hover:shadow-md"
            >
              Appeler maintenant
            </a>
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-200 via-pink-100 to-white p-4 shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(76,29,149,0.18)]">
            <div className="overflow-hidden rounded-[1.5rem] bg-white">
              <Image
                src="/hero-eclasistance.jpg"
                alt="Service d’aide à domicile Écla sistance"
                width={900}
                height={900}
                className="h-[260px] w-full object-cover transition duration-500 hover:scale-[1.02] sm:h-[320px] md:h-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
