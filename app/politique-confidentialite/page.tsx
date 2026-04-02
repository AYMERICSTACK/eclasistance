import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";

export default function PolitiqueConfidentialite() {
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
                Politique de confidentialité
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                Cette page explique quelles données peuvent être collectées sur
                le site, dans quel but et comment elles sont protégées.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="rounded-[2rem] border border-pink-100 bg-white p-6 shadow-sm ring-1 ring-gray-100/70 sm:p-8 md:p-10">
              <p className="leading-7 text-gray-600">
                La présente politique de confidentialité a pour objectif
                d’informer les utilisateurs du site Écla sistance sur la manière
                dont leurs données personnelles sont collectées, utilisées et
                protégées.
              </p>

              <div className="mt-10 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-slate-800">
                    Données collectées
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    Dans le cadre de l’utilisation du formulaire de contact, les
                    données suivantes peuvent être collectées :
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Message</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-800">
                    Finalité de la collecte
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    Ces données sont collectées uniquement dans le but de :
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                    <li>Répondre aux demandes envoyées via le formulaire</li>
                    <li>Établir un contact avec les utilisateurs</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-800">
                    Conservation des données
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    Les données sont conservées pendant une durée maximale de 3
                    ans à compter du dernier contact.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-800">
                    Partage des données
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    Les données personnelles ne sont en aucun cas vendues ou
                    cédées à des tiers. Elles peuvent être traitées via des
                    services techniques strictement nécessaires au
                    fonctionnement du site, comme l’envoi d’emails.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-800">
                    Droits des utilisateurs
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                    <li>Droit d’accès</li>
                    <li>Droit de rectification</li>
                    <li>Droit de suppression</li>
                    <li>Droit d’opposition</li>
                  </ul>

                  <div className="mt-5 rounded-3xl bg-violet-50 p-5">
                    <p className="leading-7 text-gray-700">
                      Pour exercer ces droits, vous pouvez contacter :
                      <br />
                      <strong className="text-violet-700">
                        eclasistance@hotmail.com
                      </strong>
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-800">
                    Sécurité
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    ECLA SISTANCE met en œuvre les mesures techniques et
                    organisationnelles appropriées afin de protéger les données
                    personnelles.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-800">Cookies</h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    Le site n’utilise pas de cookies à des fins publicitaires ou
                    de suivi.
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
