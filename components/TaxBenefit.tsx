import Link from "next/link";

export default function TaxBenefit() {
  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-14 md:py-16">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-pink-100 bg-white px-6 py-8 text-center shadow-sm sm:px-8 md:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
          Avantage fiscal
        </p>

        <h2 className="mt-3 text-2xl font-extrabold text-slate-800 sm:text-3xl">
          50% de crédit d’impôt immédiat
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
          Vous ne payez que la moitié de vos prestations grâce à l’avance
          immédiate du crédit d’impôt.
        </p>

        <div className="mt-6">
          <Link
            href="/credit-impot"
            className="inline-flex rounded-full bg-gradient-to-r from-violet-600 to-pink-400 px-6 py-3 font-semibold text-white shadow-md transition hover:scale-105"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
}
