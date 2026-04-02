import Link from "next/link";
import { Home, Sparkles, Shirt, ShoppingCart } from "lucide-react";
import FadeIn from "./FadeIn";

const services = [
  {
    title: "Aide à domicile",
    icon: Home,
  },
  {
    title: "Ménage & entretien",
    icon: Sparkles,
  },
  {
    title: "Repassage",
    icon: Shirt,
  },
  {
    title: "Courses & accompagnement",
    icon: ShoppingCart,
  },
];

export default function HomeServicesPreview() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
              Nos services
            </p>

            <h2 className="text-3xl font-extrabold text-slate-800 md:text-4xl">
              Un accompagnement adapté à votre quotidien
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeIn
                key={service.title}
                delay={index * 0.08}
                className="h-full"
              >
                <div className="group flex h-full flex-col rounded-3xl border border-pink-100 bg-white p-6 shadow-sm ring-1 ring-gray-100/60 transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-7">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-300 to-violet-500 transition duration-300 group-hover:scale-105">
                    <Icon className="h-7 w-7 text-white stroke-[2.5]" />
                  </div>

                  <h3 className="text-xl font-bold leading-8 text-slate-800">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-base leading-7 text-gray-600">
                    Une prestation pensée pour vous apporter confort, temps et
                    sérénité.
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.18}>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-pink-400 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Voir tous les services
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
