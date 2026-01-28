import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";

const DisordersOfCarb = () => {
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const pageVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.35, ease: "easeOut" },
    }),
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-slate-50" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Navbar at top */}
      <Navbar />

      <motion.div
        className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pt-6"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top bar / title */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
              Biochemistry • Carbohydrates
            </p>
            <h1 className="mt-1 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Disorders Related to Carbohydrate Metabolism
            </h1>
            <p
              className={`mt-2 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Overview of common acquired and inherited conditions in which
              carbohydrate handling is abnormal.
            </p>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold transition ${
              isDark
                ? "border-slate-600 bg-slate-900 text-slate-100 hover:border-emerald-400"
                : "border-slate-200 bg-white text-slate-800 hover:border-sky-300"
            }`}
          >
            <span
              className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${
                isDark ? "bg-slate-800" : "bg-yellow-300"
              }`}
            >
              {isDark ? "🌙" : "☀️"}
            </span>
            {isDark ? "Dark mode" : "Light mode"}
          </button>
        </div>

        {/* Hero: classification + key idea */}
        <section
          className={`grid gap-6 rounded-3xl border p-5 shadow-sm md:grid-cols-[3fr,2fr] ${
            isDark
              ? "border-slate-700 bg-slate-900/70"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold sm:text-xl">
              Big picture: where can things go wrong?
            </h2>
            <p
              className={`mt-2 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Disorders of carbohydrate metabolism may affect digestion,
              absorption, storage, breakdown of glycogen, or the use of specific
              sugars like galactose and fructose. Many are inherited enzyme
              defects, while others, like diabetes mellitus, are common acquired
              diseases.
            </p>

            <div className="mt-4 grid gap-3 text-xs sm:grid-cols-3 sm:text-sm">
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-emerald-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-500">
                  Common
                </p>
                <p>Diabetes mellitus, hypoglycaemia, lactose intolerance.</p>
              </div>
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-sky-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-500">
                  Inherited
                </p>
                <p>
                  Galactosemia, hereditary fructose intolerance, glycogen
                  storage diseases.
                </p>
              </div>
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-amber-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-500">
                  Key problems
                </p>
                <p>Enzyme deficiency, abnormal glycogen, or hormone imbalance.</p>
              </div>
            </div>
          </div>

          {/* Simple grouping card */}
          <div
            className={`rounded-2xl border text-xs sm:text-sm ${
              isDark
                ? "border-slate-700 bg-slate-900/80 text-slate-200"
                : "border-slate-200 bg-slate-50 text-slate-700"
            }`}
          >
            <div className="border-b px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-emerald-500 border-slate-700/60">
              Simple grouping for exams
            </div>
            <div className="p-4 space-y-2">
              <p className="font-semibold">1. Disorders of blood glucose</p>
              <p>• Diabetes mellitus • Hypoglycaemia</p>
              <p className="font-semibold">2. Glycogen storage diseases</p>
              <p>• Hepatic types • Muscle types</p>
              <p className="font-semibold">3. Specific sugar intolerances</p>
              <p>• Lactose intolerance • Galactosemia • Hereditary fructose intolerance</p>
            </div>
          </div>
        </section>

        {/* Content layout: main concepts + side recap */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[3fr,2fr]">
          {/* Left: teaching blocks */}
          <div className="space-y-6">
            {/* 1. Disorders of blood glucose */}
            <motion.section
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className={`rounded-3xl p-5 shadow-sm ${
                isDark
                  ? "border border-slate-700 bg-slate-900/80"
                  : "border border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-semibold">
                  1. Disorders of blood glucose
                </h2>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-500">
                  very common
                </span>
              </div>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                These conditions are characterised by persistent disturbance of
                blood glucose levels due to problems with insulin, glucose
                uptake, or counter‑regulatory mechanisms.
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-emerald-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    Diabetes mellitus (type 1 and type 2)
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Chronic hyperglycaemia due to absolute or relative lack of
                      insulin action.
                    </li>
                    <li>
                      Type 1: autoimmune destruction of β‑cells, usually
                      presenting in younger individuals with insulin
                      dependence.
                    </li>
                    <li>
                      Type 2: insulin resistance with relative insulin
                      deficiency, often associated with obesity and sedentary
                      lifestyle.
                    </li>
                    <li>
                      Long‑term complications include retinopathy, nephropathy,
                      neuropathy, and cardiovascular disease.
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-rose-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
                    Hypoglycaemia (brief overview)
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Blood glucose falls below the level needed to supply the
                      brain and other tissues.
                    </li>
                    <li>
                      Causes include excess insulin, prolonged fasting,
                      alcohol‑related suppression of gluconeogenesis, or
                      inborn errors of metabolism.
                    </li>
                    <li>
                      Symptoms: sweating, tremor, confusion, seizures, possible
                      coma if severe and prolonged.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* 2. Glycogen storage diseases (GSD) */}
            <motion.section
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className={`rounded-3xl p-5 shadow-sm ${
                isDark
                  ? "border border-slate-700 bg-slate-900/80"
                  : "border border-slate-200 bg-white"
              }`}
            >
              <h2 className="text-lg font-semibold">
                2. Glycogen storage diseases (GSD) – brief concept
              </h2>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Glycogen storage diseases are inherited enzyme defects of
                glycogen synthesis or breakdown, leading to abnormal amount or
                structure of glycogen in tissues.
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-sky-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-500">
                    General features
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Many types are named and numbered (for example, type I –
                      von Gierke, type II – Pompe, type III – Cori, type V –
                      McArdle).
                    </li>
                    <li>
                      Common problems: fasting hypoglycaemia, hepatomegaly,
                      poor growth, muscle weakness or exercise intolerance.
                    </li>
                    <li>
                      Some types mainly affect the liver, others mainly affect
                      muscle, and some involve both.
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-amber-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                    Principle of management
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Dietary measures to avoid prolonged fasting and provide
                      steady glucose supply (for example, frequent feeds,
                      uncooked cornstarch at night in some types).
                    </li>
                    <li>
                      Monitoring for complications such as liver enlargement,
                      growth delay, and muscle or cardiac involvement.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* 3. Specific sugar intolerances / inborn errors */}
            <motion.section
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className={`rounded-3xl p-5 shadow-sm ${
                isDark
                  ? "border border-slate-700 bg-slate-900/80"
                  : "border border-slate-200 bg-white"
              }`}
            >
              <h2 className="text-lg font-semibold">
                3. Specific sugar intolerances and inborn errors
              </h2>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                These disorders arise when the body cannot digest or metabolise
                a particular dietary sugar because of enzyme deficiency.
              </p>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-emerald-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    Lactose intolerance (acquired or inherited)
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Due to reduced activity of lactase enzyme in the small
                      intestine.
                    </li>
                    <li>
                      Undigested lactose remains in the gut, causing osmotic
                      diarrhoea, gas, abdominal cramps, and bloating after dairy
                      intake.
                    </li>
                    <li>
                      Managed by limiting lactose and using lactose‑free
                      products or enzyme supplements.
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-rose-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
                    Galactosemia (classical form)
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Inborn error of galactose metabolism due to deficiency of
                      galactose‑1‑phosphate uridyltransferase (or related
                      enzymes in variant forms).
                    </li>
                    <li>
                      Infants develop vomiting, jaundice, hepatomegaly, and
                      failure to thrive after exposure to milk (lactose).
                    </li>
                    <li>
                      Strict lifelong restriction of galactose/lactose in the
                      diet is essential to prevent serious complications.
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-amber-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                    Hereditary fructose intolerance
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Caused by deficiency of aldolase B in the liver, which is
                      needed to metabolise fructose‑1‑phosphate.
                    </li>
                    <li>
                      Symptoms appear when fructose or sucrose is introduced:
                      vomiting, hypoglycaemia, liver dysfunction, failure to
                      thrive.
                    </li>
                    <li>
                      Avoidance of fructose and sucrose allows affected children
                      to remain well.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Right: recap / exam focus sidebar */}
          <motion.aside
            custom={3}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className={`h-fit rounded-3xl p-5 shadow-sm ${
              isDark
                ? "border border-slate-700 bg-slate-900/80"
                : "border border-slate-200 bg-white"
            }`}
          >
            <h2 className="text-lg font-semibold">Exam‑oriented summary</h2>
            <ul
              className={`mt-3 space-y-2 text-sm ${
                isDark ? "text-slate-200" : "text-slate-700"
              }`}
            >
              <li>
                1. Remember one <span className="font-semibold">common</span>{" "}
                disorder: diabetes mellitus (chronic hyperglycaemia with
                complications).
              </li>
              <li>
                2. Remember the{" "}
                <span className="font-semibold">concept of GSD</span>: inherited
                enzyme defects in glycogen metabolism causing hypoglycaemia and
                organ enlargement.
              </li>
              <li>
                3. For{" "}
                <span className="font-semibold">
                  specific sugar intolerances
                </span>
                , link the missing enzyme to the offending sugar: lactase →
                lactose; galactose pathway enzymes → galactose; aldolase B →
                fructose.
              </li>
            </ul>

            <div className="mt-4 rounded-2xl bg-emerald-500/10 p-3 text-xs text-emerald-300">
              <p className="font-semibold text-emerald-200">
                Quick memory hook
              </p>
              <p className="mt-1">
                “Glucose high or low, glycogen stuck, or one sugar you cannot
                handle.”
              </p>
            </div>

            <p className="mt-4 text-[11px] text-slate-400">
              For exams, focus on names, missing enzyme, main symptoms, and
              basic management principle for each condition.
            </p>
          </motion.aside>
        </div>
      </motion.div>
    </div>
  );
};

export default DisordersOfCarb;
