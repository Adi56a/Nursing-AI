import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";

const MetabolicPathwaysOfCarb = () => {
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
              Metabolic Pathways of Carbohydrates (Overview)
            </h1>
            <p
              className={`mt-2 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              High‑level map of how glucose moves through major pathways like
              glycolysis, TCA cycle, glycogen metabolism, and gluconeogenesis.
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

        {/* Hero: text + schematic block */}
        <section
          className={`grid gap-6 rounded-3xl border p-5 shadow-sm md:grid-cols-[3fr,2fr] ${
            isDark
              ? "border-slate-700 bg-slate-900/70"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold sm:text-xl">
              Big picture: central role of glucose
            </h2>
            <p
              className={`mt-2 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Once absorbed, glucose can be used immediately for ATP production,
              stored as glycogen, converted to other sugars, or used to make
              lipids and other biomolecules. Different pathways turn “on” or
              “off” depending on fed‑fasting state and hormone levels.
            </p>

            <div className="mt-4 grid gap-3 text-xs sm:grid-cols-3 sm:text-sm">
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-emerald-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-500">
                  Energy
                </p>
                <p>Glycolysis, TCA cycle, oxidative phosphorylation.</p>
              </div>
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-sky-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-500">
                  Storage
                </p>
                <p>Glycogenesis and glycogenolysis in liver and muscle.</p>
              </div>
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-amber-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-500">
                  Biosynthesis
                </p>
                <p>Pentose phosphate pathway and gluconeogenesis.</p>
              </div>
            </div>
          </div>

          {/* Simple block diagram (text‑based) */}
          <div
            className={`rounded-2xl border text-xs sm:text-sm ${
              isDark
                ? "border-slate-700 bg-slate-900/80 text-slate-200"
                : "border-slate-200 bg-slate-50 text-slate-700"
            }`}
          >
            <div className="border-b px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-emerald-500 border-slate-700/60">
              Block diagram (conceptual)
            </div>
            <div className="p-4 space-y-2">
              <p className="font-semibold">Glucose</p>
              <p>↓ Glycolysis → Pyruvate → Acetyl‑CoA → TCA cycle → ATP</p>
              <p>↘ Glycogenesis → Glycogen (storage)</p>
              <p>↘ Pentose phosphate pathway → NADPH + ribose‑5‑phosphate</p>
              <p>↘ Lipogenesis (via acetyl‑CoA) → fatty acids, triglycerides</p>
              <p>↑ Gluconeogenesis (reverse flow under fasting)</p>
            </div>
          </div>
        </section>

        {/* Content layout: main concepts + side recap */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[3fr,2fr]">
          {/* Left: teaching blocks */}
          <div className="space-y-6">
            {/* 1. Glycolysis and TCA / ETC */}
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
                  1. Glycolysis and aerobic oxidation
                </h2>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-500">
                  ATP production
                </span>
              </div>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Glycolysis and the citric acid (TCA) cycle with oxidative
                phosphorylation together form the main route for complete
                oxidation of glucose to carbon dioxide and water with ATP
                generation.
              </p>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-emerald-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    Glycolysis
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>Occurs in the cytosol of almost all cells.</li>
                    <li>
                      Converts one glucose molecule into two molecules of
                      pyruvate.
                    </li>
                    <li>
                      Produces a small, direct yield of ATP and reduced
                      coenzymes (NADH).
                    </li>
                    <li>
                      Under anaerobic conditions, pyruvate can be reduced to
                      lactate.
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-sky-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-500">
                    TCA cycle and oxidative phosphorylation
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Pyruvate is converted to acetyl‑CoA, which enters the TCA
                      cycle in mitochondria.
                    </li>
                    <li>
                      TCA cycle generates reduced coenzymes (NADH, FADH₂) and
                      some GTP/ATP.
                    </li>
                    <li>
                      These reduced coenzymes donate electrons to the electron
                      transport chain to produce most of the cell’s ATP.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* 2. Glycogen metabolism */}
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
                2. Glycogenesis and glycogenolysis
              </h2>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Glycogen metabolism allows the body to store excess glucose and
                release it when needed, especially between meals and during
                exercise.
              </p>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-amber-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                    Glycogenesis (synthesis)
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Formation of glycogen from glucose, mainly in liver and
                      skeletal muscle.
                    </li>
                    <li>
                      Activated by insulin in the fed state to store excess
                      blood glucose.
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-rose-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
                    Glycogenolysis (breakdown)
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Breakdown of glycogen to glucose‑1‑phosphate and then
                      glucose‑6‑phosphate.
                    </li>
                    <li>
                      In the liver, glucose‑6‑phosphate can be converted to free
                      glucose and released into blood.
                    </li>
                    <li>
                      Stimulated by glucagon and adrenaline during fasting or
                      stress.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* 3. Gluconeogenesis and PPP */}
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
                3. Gluconeogenesis and pentose phosphate pathway
              </h2>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                These pathways do not primarily make ATP, but they are vital for
                maintaining blood glucose and supplying reducing power and
                special sugars.
              </p>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-violet-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-violet-500">
                    Gluconeogenesis
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Synthesis of glucose from non‑carbohydrate precursors such
                      as lactate, glycerol, and certain amino acids.
                    </li>
                    <li>
                      Occurs mainly in liver (and partly in kidney), especially
                      during prolonged fasting or starvation.
                    </li>
                    <li>
                      Helps maintain blood glucose for tissues that depend on it
                      (for example, brain, red blood cells).
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-teal-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-500">
                    Pentose phosphate pathway (PPP)
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Parallel pathway to glycolysis that uses glucose‑6‑phosphate.
                    </li>
                    <li>
                      Provides NADPH for reductive biosynthesis and antioxidant
                      defence.
                    </li>
                    <li>
                      Generates ribose‑5‑phosphate for nucleotide and nucleic
                      acid synthesis.
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
                1. <span className="font-semibold">Glycolysis + TCA + ETC</span>{" "}
                → complete oxidation of glucose to CO₂ and H₂O with ATP
                production.
              </li>
              <li>
                2. <span className="font-semibold">Glycogenesis / glycogenolysis</span>{" "}
                → short‑term storage and release of glucose.
              </li>
              <li>
                3. <span className="font-semibold">Gluconeogenesis</span> → new
                glucose formation during fasting.
              </li>
              <li>
                4. <span className="font-semibold">Pentose phosphate pathway</span>{" "}
                → NADPH and ribose‑5‑phosphate, not primarily ATP.
              </li>
            </ul>

            <div className="mt-4 rounded-2xl bg-emerald-500/10 p-3 text-xs text-emerald-300">
              <p className="font-semibold text-emerald-200">
                Quick memory hook
              </p>
              <p className="mt-1">
                “Burn, store, remake, and branch”: burn (glycolysis/TCA), store
                (glycogen), remake (gluconeogenesis), branch (PPP).
              </p>
            </div>

            <p className="mt-4 text-[11px] text-slate-400">
              Use this overview as a map, then study each pathway separately
              with detailed steps and regulation.
            </p>
          </motion.aside>
        </div>
      </motion.div>
    </div>
  );
};

export default MetabolicPathwaysOfCarb;
