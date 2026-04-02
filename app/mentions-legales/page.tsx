import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-700">
      <Header />

      <section className="px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
                Informations légales
              </p>
              <h1 className="text-4xl font-extrabold text-slate-800 sm:text-5xl">
                Mentions légales
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                Retrouvez ici les informations d’identification, d’hébergement
                et de responsabilité liées au site Écla sistance.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="rounded-[2rem] border border-pink-100 bg-white p-6 shadow-sm ring-1 ring-gray-100/70 sm:p-8 md:p-10">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-slate-800">
                    Éditeur du site
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    Le site <strong>Écla sistance</strong> est édité par :
                  </p>

                  <div className="mt-5 rounded-3xl bg-violet-50 p-5">
                    <p className="leading-8 text-gray-700">
                      <strong className="text-slate-800">ECLA SISTANCE</strong>
                      <br />
                      SAS (Société par Actions Simplifiée)
                      <br />
                      Capital social : 300 €
                      <br />
                      SIREN : 101955912
                      <br />
                      SIRET : 10195591200015
                      <br />
                      RCS : LONS-LE-SAUNIER
                      <br />
                      Siège social : 4 rue des Tilleuls, 01240 Lent, France
                    </p>
                  </div>

                  <p className="mt-4 leading-7 text-gray-600">
                    Président : <strong>Maude Blanchot</strong>
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-800">Contact</h2>
                  <div className="mt-5 rounded-3xl bg-gray-50 p-5">
                    <p className="leading-8 text-gray-700">
                      Email : <strong>eclasistance@hotmail.com</strong>
                      <br />
                      Téléphone : <strong>06 17 58 38 50</strong>
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-800">
                    Hébergement
                  </h2>
                  <div className="mt-5 rounded-3xl bg-gray-50 p-5">
                    <p className="leading-8 text-gray-700">
                      Le site est hébergé par :
                      <br />
                      <strong>Vercel Inc.</strong>
                      <br />
                      340 S Lemon Ave #4133
                      <br />
                      Walnut, CA 91789
                      <br />
                      États-Unis
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-800">
                    Propriété intellectuelle
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    L’ensemble des contenus présents sur ce site, notamment les
                    textes, images, graphismes, logos et éléments visuels, est
                    la propriété exclusive de ECLA SISTANCE, sauf mention
                    contraire.
                  </p>
                  <p className="mt-3 leading-7 text-gray-600">
                    Toute reproduction, distribution ou utilisation sans
                    autorisation préalable est strictement interdite.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-800">
                    Responsabilité
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    Les informations présentes sur ce site sont fournies à titre
                    indicatif. ECLA SISTANCE s’efforce de les maintenir à jour,
                    mais ne saurait être tenue responsable d’éventuelles erreurs
                    ou omissions.
                  </p>
                </section>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
