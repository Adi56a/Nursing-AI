import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";

const PUFA = () => {
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const pageVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
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
              Biochemistry • Lipid metabolism
            </p>
            <h1 className="mt-1 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Polyunsaturated Fatty Acids (PUFA)
            </h1>
            <p
              className={`mt-2 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Definition, main types (omega‑3 and omega‑6), key dietary sources,
              and clinical significance.
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

        {/* Hero: definition + quick map */}
        <section
          className={`grid gap-6 rounded-3xl border p-5 shadow-sm md:grid-cols-[3fr,2fr] ${
            isDark
              ? "border-slate-700 bg-slate-900/70"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold sm:text-xl">Definition</h2>
            <p
              className={`mt-2 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Polyunsaturated fatty acids (PUFA) are fatty acids that contain
              two or more carbon–carbon double bonds in their hydrocarbon chain.
              Many PUFA, including omega‑3 and omega‑6 families, are essential
              nutrients that must be obtained from the diet.
            </p>

            <div className="mt-4 grid gap-3 text-xs sm:grid-cols-3 sm:text-sm">
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-emerald-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-500">
                  Structural feature
                </p>
                <p>Two or more double bonds in the carbon chain.</p>
              </div>
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-sky-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-500">
                  Main families
                </p>
                <p>Omega‑3 (n‑3) and omega‑6 (n‑6) PUFA.</p>
              </div>
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-amber-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-500">
                  Essential
                </p>
                <p>Linoleic acid and α‑linolenic acid are essential PUFA.</p>
              </div>
            </div>
          </div>

          <div
            className={`rounded-2xl border text-xs sm:text-sm ${
              isDark
                ? "border-slate-700 bg-slate-900/80 text-slate-200"
                : "border-slate-200 bg-slate-50 text-slate-700"
            }`}
          >
            <div className="border-b px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-emerald-500 border-slate-700/60">
              Concept snapshot
            </div>
            <div className="p-4 space-y-2">
              <p>• PUFA = ≥2 double bonds.</p>
              <p>• Include essential omega‑3 and omega‑6 fatty acids.</p>
              <p>• Important in membranes, eicosanoid synthesis, brain and heart.</p>
            </div>
          </div>
        </section>

        {/* Content layout: main concepts + side recap */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[3fr,2fr]">
          {/* Left: teaching blocks */}
          <div className="space-y-6">
            {/* 1. Types and examples */}
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
                  1. Types of PUFA and key examples
                </h2>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-500">
                  basic science
                </span>
              </div>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                PUFA are grouped mainly by the position of the first double bond
                from the methyl (omega, ω) end of the chain.
              </p>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-emerald-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    Omega‑6 PUFA (n‑6)
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      First double bond at the 6th carbon from the methyl end.
                    </li>
                    <li>
                      Examples: linoleic acid (18:2 n‑6), arachidonic acid
                      (20:4 n‑6).
                    </li>
                    <li>
                      Linoleic acid is an essential fatty acid and a precursor
                      of longer‑chain omega‑6 PUFA.
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-sky-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-500">
                    Omega‑3 PUFA (n‑3)
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      First double bond at the 3rd carbon from the methyl end.
                    </li>
                    <li>
                      Examples: α‑linolenic acid (ALA, 18:3 n‑3), eicosapentaenoic
                      acid (EPA, 20:5 n‑3), docosahexaenoic acid (DHA, 22:6 n‑3).
                    </li>
                    <li>
                      ALA is essential and is the precursor of EPA and DHA
                      (conversion is limited in humans).
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* 2. Dietary sources */}
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
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-semibold">
                  2. Major dietary sources
                </h2>
                <span className="rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-500">
                  nutrition
                </span>
              </div>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Many common plant oils and fish are rich in PUFA and provide the
                essential omega‑3 and omega‑6 fatty acids.
              </p>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-amber-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                    Omega‑6‑rich foods
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>Vegetable oils: sunflower, corn, soybean, safflower oils.</li>
                    <li>
                      Nuts and seeds: sunflower seeds, many mixed nuts, some
                      cereals.
                    </li>
                    <li>
                      Present in many processed foods prepared with these oils.
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-emerald-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    Omega‑3‑rich foods
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Oily fish: salmon, mackerel, sardines, herring (rich in EPA
                      and DHA).
                    </li>
                    <li>
                      Plant sources of ALA: flaxseeds, chia seeds, walnuts, and
                      some plant oils.
                    </li>
                    <li>
                      Some fortified foods and omega‑3 supplements (fish oil,
                      algal oil).
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* 3. Clinical significance */}
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
                3. Clinical significance (exam‑style points)
              </h2>
              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                PUFA influence membrane fluidity, eicosanoid synthesis,
                inflammation, cardiovascular risk, and brain development and
                function.
              </p>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-emerald-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    Cardiovascular and metabolic effects
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Replacing saturated fat with PUFA can lower LDL‑cholesterol
                      and reduce risk of heart disease and stroke.
                    </li>
                    <li>
                      Long‑chain omega‑3 PUFA (EPA, DHA) may reduce
                      triglycerides, slightly lower blood pressure, and have
                      anti‑arrhythmic and anti‑inflammatory effects.
                    </li>
                    <li>
                      Adequate omega‑3 intake is associated with lower risk of
                      some cardiovascular events in many observational studies.
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-sky-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-500">
                    Brain, inflammation, and balance of n‑6/n‑3
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      DHA is a major structural PUFA in the brain and retina and
                      is important for normal development and function.
                    </li>
                    <li>
                      Omega‑6 and omega‑3 PUFA are precursors of eicosanoids
                      with pro‑ or anti‑inflammatory actions; the overall health
                      effect depends on their balance and total diet.
                    </li>
                    <li>
                      Modern diets often provide high omega‑6 and relatively low
                      omega‑3; increasing omega‑3‑rich foods is commonly
                      recommended.
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
                1. Definition: PUFA have{" "}
                <span className="font-semibold">two or more</span> double bonds
                and include essential omega‑3 and omega‑6 fatty acids.
              </li>
              <li>
                2. Key examples: linoleic acid (18:2 n‑6), arachidonic acid
                (20:4 n‑6), α‑linolenic acid (18:3 n‑3), EPA, and DHA.
              </li>
              <li>
                3. Major sources: vegetable oils and nuts for omega‑6; oily fish
                and certain seeds for omega‑3.
              </li>
              <li>
                4. Clinical significance: replacing saturated fat with PUFA
                supports cardiovascular health; omega‑3 PUFA have additional
                anti‑inflammatory and brain‑health roles; overall balance of
                n‑6/n‑3 is important.
              </li>
            </ul>

            <div className="mt-4 rounded-2xl bg-emerald-500/10 p-3 text-xs text-emerald-300">
              <p className="font-semibold text-emerald-200">
                Quick memory hook
              </p>
              <p className="mt-1">
                “PUFA = many bonds, many roles” – multiple double bonds with
                important effects on heart, brain, and inflammation.
              </p>
            </div>

            <p className="mt-4 text-[11px] text-slate-400">
              Connect this topic with essential fatty acids, eicosanoids, and
              dietary fat recommendations in later modules.
            </p>
          </motion.aside>
        </div>
      </motion.div>
    </div>
  );
};

export default PUFA;
