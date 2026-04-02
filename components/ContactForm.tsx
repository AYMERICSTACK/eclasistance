"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Impossible d’envoyer le formulaire.");
      }

      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Une erreur est survenue.",
      );
    }
  }

  return (
    <div className="flex h-full min-h-full flex-col rounded-[2rem] border border-pink-100 bg-white p-6 shadow-sm ring-1 ring-gray-100/70 sm:p-8 md:p-10">
      <div className="mb-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
          Formulaire de contact
        </p>

        <h2 className="text-3xl font-extrabold text-slate-800">
          Parlez-nous de votre besoin
        </h2>

        <p className="mt-3 max-w-2xl text-gray-600 leading-7">
          Remplissez ce formulaire et nous vous recontacterons rapidement pour
          échanger sur votre besoin à Lent, Bourg-en-Bresse et alentours.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 rounded-2xl bg-pink-50 px-4 py-3 text-sm font-medium text-violet-700">
          Merci, votre demande a bien été envoyée.
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Prénom *
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Votre prénom"
              className="w-full rounded-2xl border border-pink-100 bg-white px-4 py-3 text-slate-800 outline-none transition duration-200 placeholder:text-gray-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Nom
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Votre nom"
              className="w-full rounded-2xl border border-pink-100 bg-white px-4 py-3 text-slate-800 outline-none transition duration-200 placeholder:text-gray-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Téléphone *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="06 00 00 00 00"
              className="w-full rounded-2xl border border-pink-100 bg-white px-4 py-3 text-slate-800 outline-none transition duration-200 placeholder:text-gray-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              className="w-full rounded-2xl border border-pink-100 bg-white px-4 py-3 text-slate-800 outline-none transition duration-200 placeholder:text-gray-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
            />
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Service souhaité
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-2xl border border-pink-100 bg-white px-4 py-3 text-slate-800 outline-none transition duration-200 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
          >
            <option value="">Sélectionnez un service</option>
            <option value="Aide à domicile">Aide à domicile</option>
            <option value="Ménage et entretien">Ménage et entretien</option>
            <option value="Repassage">Repassage</option>
            <option value="Courses et accompagnement">
              Courses et accompagnement
            </option>
            <option value="Assistance personnes âgées">
              Assistance personnes âgées
            </option>
            <option value="Autre demande">Autre demande</option>
          </select>
        </div>

        <div className="mt-6">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Votre message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Décrivez votre besoin, la fréquence souhaitée, votre zone, ou toute information utile..."
            className="min-h-[170px] w-full resize-none rounded-2xl border border-pink-100 bg-white px-4 py-3 text-slate-800 outline-none transition duration-200 placeholder:text-gray-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
          />
        </div>

        <div className="mt-8 flex flex-col gap-4 md:mt-auto md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-sm leading-6 text-gray-500">
            En envoyant ce formulaire, vous acceptez d’être recontacté au sujet
            de votre demande.
          </p>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-pink-400 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
          </button>
        </div>
      </form>
    </div>
  );
}
