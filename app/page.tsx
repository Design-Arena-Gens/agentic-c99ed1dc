"use client";

import { useCallback, useMemo, useState } from "react";

const hooks = [
  "La plupart des entreprises pensent grandir… mais elles ne savent même pas pourquoi elles stagnent.",
  "Tu crois que ton produit est le problème ? Spoiler : c’est rarement ça.",
  "Un frein mal identifié peut faire perdre 40% de croissance sur 90 jours."
];

const legendKeywords = [
  "Stratégies de croissance pour entreprises",
  "Comment débloquer la croissance",
  "Business scaling tips",
  "Conseils marketing pour PME"
];

const frictionTestSteps = [
  {
    title: "Diagnostique express",
    description:
      "Liste les 3 derniers freins que tes clients citent dans tes appels, emails ou retours SAV."
  },
  {
    title: "Score d’impact",
    description:
      "Donne un score de 1 à 5 à chaque frein sur deux axes : fréquence et gravité. Multiplie les scores."
  },
  {
    title: "Action en 90 jours",
    description:
      "Choisis le frein avec le plus gros score et prépare un plan d’actions ciblé en 3 étapes hebdomadaires."
  }
];

function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed", error);
    }
  }, [text]);

  return (
    <button
      onClick={copy}
      className="rounded-full bg-accent px-4 py-2 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-white"
    >
      {isCopied ? "Copié !" : "Copier"}
    </button>
  );
}

export default function Page() {
  const hookText = hooks[0];

  const script = useMemo(
    () =>
      "Si ton business ne grandit plus, ce n’est pas parce que ton produit est mauvais. C’est souvent parce que tu n’as pas identifié ton vrai frein. Aujourd’hui, je te montre le test en 1 minute que j’utilise avec mes clients pour débloquer +20 à +40% de croissance en 90 jours.",
    []
  );

  const cta =
    "Commente BLOCAGE si tu veux que je t’aide à identifier ton frein caché.";

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-20 md:px-12">
        <header className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-[0_20px_80px_rgba(10,36,99,0.25)] backdrop-blur">
          <span className="text-sm uppercase tracking-[0.3em] text-accent">
            📅 Jour 1
          </span>
          <h1 className="font-display text-4xl leading-tight text-white md:text-5xl">
            Pourquoi ton business ne grandit plus (la vraie raison)
          </h1>
          <p className="text-lg text-slate-200">{hookText}</p>
          <div className="flex flex-wrap items-center gap-3">
            <CopyButton text={hookText} />
            <span className="text-xs uppercase tracking-widest text-slate-400">
              Accroche vidéo
            </span>
          </div>
        </header>

        <section className="grid gap-10 md:grid-cols-[2fr,1fr]">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-2xl text-white">🎬 Script</h2>
              <CopyButton text={script} />
            </div>
            <p className="mt-6 leading-relaxed text-slate-200">{script}</p>
            <div className="mt-8 grid gap-4 rounded-2xl bg-slate-950/40 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                Rappels clés
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {hooks.map((item, index) => (
                  <li
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-3"
                  >
                    <span className="font-semibold text-accent">
                      Hook {index + 1} ·{" "}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <h2 className="font-display text-xl text-white">📝 Légende SEO</h2>
              <CopyButton text={legendKeywords.join(" | ")} />
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {legendKeywords.map((keyword) => (
                  <li
                    key={keyword}
                    className="rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-3"
                  >
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <h2 className="font-display text-xl text-white">👉 Call-to-Action</h2>
              <p className="mt-4 text-sm text-slate-200">{cta}</p>
              <div className="mt-4">
                <CopyButton text={cta} />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <h2 className="font-display text-xl text-white">🎥 Idée de tournage</h2>
              <p className="mt-4 text-sm text-slate-200">
                Place-toi devant un tableau blanc. Dessine ton frein principal au
                fur et à mesure que tu expliques le test. Utilise des couleurs
                différentes pour chaque étape afin de créer un repère visuel fort.
              </p>
            </div>
          </aside>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-2xl text-white">
              🔓 Test du frein caché (1 minute)
            </h2>
            <CopyButton
              text={frictionTestSteps
                .map((step, index) => `${index + 1}. ${step.title}: ${step.description}`)
                .join("\n")}
            />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {frictionTestSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/40 p-6"
              >
                <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Étape {index + 1}
                </span>
                <h3 className="font-display text-xl text-white">{step.title}</h3>
                <p className="text-sm text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-slate-200">
          <h2 className="font-display text-2xl text-white">
            🧠 Astuce pour la couverture
          </h2>
          <p className="mt-4 text-sm">
            Titre : <span className="font-semibold text-white">Pourquoi ton business ne grandit plus (la vraie raison)</span>
          </p>
          <p className="mt-2 text-sm">
            Focus sur un contraste fort : écris le titre en deux lignes avec le mot
            “frein” souligné sur le tableau. Garde un regard dirigé vers le frein
            pour renforcer la tension dramatique.
          </p>
        </section>
      </section>
    </main>
  );
}
