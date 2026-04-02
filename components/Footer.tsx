import Link from "next/link";
import Image from "next/image";
import BrandInline from "./BrandInline";

export default function Footer() {
  return (
    <footer className="border-t border-purple-100 bg-white py-10 text-gray-600">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex">
            <Image
              src="/logo-eclasistance.svg"
              alt="Logo Écla sistance"
              width={160}
              height={64}
              className="h-16 w-auto"
            />
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
            <BrandInline /> vous accompagne à Lent, Bourg-en-Bresse et alentours
            avec des services d’aide à domicile humains, rassurants et
            professionnels.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-gray-500">
            Navigation
          </p>

          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-700">
            <Link href="/" className="transition hover:text-violet-700">
              Accueil
            </Link>
            <Link href="/services" className="transition hover:text-violet-700">
              Services
            </Link>
            <Link href="/a-propos" className="transition hover:text-violet-700">
              À propos
            </Link>
            <Link
              href="/credit-impot"
              className="transition hover:text-violet-700"
            >
              Crédit d’impôt
            </Link>
            <Link href="/contact" className="transition hover:text-violet-700">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-gray-500">
            Prestations
          </p>

          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p>Aide à domicile</p>
            <p>Ménage et entretien</p>
            <p>Repassage</p>
            <p>Courses et accompagnement</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-gray-500">
            Contact
          </p>

          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p>📞 06 17 58 38 50</p>
            <p>📧 eclasistance@hotmail.com</p>
            <p>📍 Lent, Bourg-en-Bresse et alentours</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-purple-100 px-4 pt-6 sm:px-6">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <Link
            href="/mentions-legales"
            className="transition hover:text-violet-700"
          >
            Mentions légales
          </Link>
          <Link
            href="/politique-confidentialite"
            className="transition hover:text-violet-700"
          >
            Politique de confidentialité
          </Link>
        </div>

        <div className="mt-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Écla sistance — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
