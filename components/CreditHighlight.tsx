import Link from "next/link";

export default function CreditHighlight() {
  return (
    <section className="bg-gradient-to-r from-violet-600 to-pink-400 px-4 py-14 text-white sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-100">
            Crédit d’impôt immédiat
          </p>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Vous ne payez que 50% de vos prestations
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            Grâce à l’avance immédiate du crédit d’impôt, une partie de votre
            prestation est directement prise en charge. Vous profitez d’un
            service utile, rassurant et plus accessible au quotidien.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/credit-impot"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold !text-violet-700 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Comprendre l’avantage
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
            >
              Demander un devis
            </Link>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-white/10 p-6 backdrop-blur transition duration-300 hover:shadow-2xl sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-100">
            Exemple simple
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-white/10 p-4 transition duration-300 hover:bg-white/15">
              <p className="text-sm text-white/80">Montant de la prestation</p>
              <p className="mt-1 text-2xl font-extrabold">20€</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 transition duration-300 hover:bg-white/15">
              <p className="text-sm text-white/80">Crédit d’impôt immédiat</p>
              <p className="mt-1 text-2xl font-extrabold">-10€</p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-sm text-violet-700/80">Reste à payer</p>
              <p className="mt-1 text-3xl font-extrabold text-violet-700">
                10€
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
