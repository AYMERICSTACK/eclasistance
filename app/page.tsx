import Link from "next/link";
import { Mail, Phone, MapPin, RefreshCw } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-pink-50 to-violet-50">
      {/* halos décoratifs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-80px] top-[-80px] h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute right-[-100px] top-20 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute bottom-[-100px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-100/40 blur-3xl" />
      </div>

      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="mx-auto max-w-3xl rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-[0_20px_80px_rgba(139,92,246,0.15)] backdrop-blur-xl sm:p-12">
            {/* badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-100 to-pink-100 px-4 py-2 text-sm font-medium text-violet-700">
              <RefreshCw className="h-4 w-4" />
              Site en cours de mise à jour
            </div>

            {/* titre */}
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Écla sistance revient bientôt
            </h1>

            {/* texte */}
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Nous procédons actuellement à une mise à jour du site.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-500">
              Merci de votre compréhension. Pour toute demande, vous pouvez nous
              contacter directement.
            </p>

            {/* bloc contact */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-violet-100 bg-violet-50/70 p-4">
                <div className="mb-2 flex items-center gap-2 text-violet-700">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-semibold">Téléphone</span>
                </div>
                <p className="text-sm text-slate-700">06 17 58 38 50</p>
              </div>

              <div className="rounded-2xl border border-pink-100 bg-pink-50/70 p-4">
                <div className="mb-2 flex items-center gap-2 text-pink-700">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm font-semibold">Email</span>
                </div>
                <p className="text-sm text-slate-700">
                  eclasistance@hotmail.com
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="mb-2 flex items-center gap-2 text-slate-700">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-semibold">Zone</span>
                </div>
                <p className="text-sm text-slate-700">
                  Lent, Bourg-en-Bresse et alentours
                </p>
              </div>
            </div>

            {/* footer discret */}
            <div className="mt-10 border-t border-slate-100 pt-6 text-sm text-slate-400">
              © {new Date().getFullYear()} Écla sistance — Services d’aide à
              domicile
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
