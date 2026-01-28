import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";

const FattyAcidsClassification = () => {
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
              Definition and Classification of Fatty Acids
            </h1>
            <p
              className={`mt-2 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Clear, exam‑oriented overview of what fatty acids are and how they
              are classified for biochemistry and nutrition.
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
              Fatty acids are carboxylic acids with a long hydrocarbon chain and
              a terminal carboxyl group. In the body they occur mainly as parts
              of triglycerides, phospholipids, and cholesteryl esters, and serve
              as major fuel molecules and structural components of membranes.
            </p>

            <div className="mt-4 grid gap-3 text-xs sm:grid-cols-3 sm:text-sm">
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-emerald-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-500">
                  Backbone
                </p>
                <p>Hydrocarbon chain + terminal –COOH group.</p>
              </div>
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-sky-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-500">
                  Uses
                </p>
                <p>Energy store, membrane lipids, signalling molecules.</p>
              </div>
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-amber-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-500">
                  Key for exams
                </p>
                <p>Know main types and examples (saturated vs unsaturated, etc.).</p>
              </div>
            </div>
          </div>

          {/* Simple classification map */}
          <div
            className={`rounded-2xl border text-xs sm:text-sm ${
              isDark
                ? "border-slate-700 bg-slate-900/80 text-slate-200"
                : "border-slate-200 bg-slate-50 text-slate-700"
            }`}
          >
            <div className="border-b px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-emerald-500 border-slate-700/60">
              Main ways to classify fatty acids
            </div>
            <div className="p-4 space-y-2">
              <p>• By chain length</p>
              <p>• By degree of saturation</p>
              <p>• By essential vs non‑essential</p>
              <p>• By position of first double bond (omega‑3, omega‑6 etc.)</p>
            </div>
          </div>
        </section>

        {/* Content layout: main concepts + side recap */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[3fr,2fr]">
          {/* Left: teaching blocks */}
          <div className="space-y-6">
            {/* 1. Classification by chain length */}
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
                  1. Classification by chain length
                </h2>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-500">
                  number of carbons
                </span>
              </div>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Chain length affects how fatty acids are absorbed, transported,
                and used for energy.
              </p>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-emerald-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    Short‑chain FA
                  </p>
                  <p className="mt-1 text-xs">
                    About 2–5 carbon atoms; formed mainly in the colon by
                    bacterial fermentation of fibre (for example, acetate,
                    propionate, butyrate).
                  </p>
                </div>
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-sky-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-500">
                    Medium‑chain FA
                  </p>
                  <p className="mt-1 text-xs">
                    About 6–12 carbons; found in some oils (for example, coconut
                    oil) and absorbed more rapidly than long‑chain fatty acids.
                  </p>
                </div>
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-amber-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                    Long‑chain and very‑long‑chain FA
                  </p>
                  <p className="mt-1 text-xs">
                    Long‑chain ≈ 14–18 carbons (for example, palmitic C16,
                    stearic C18); very‑long‑chain &gt;18 carbons. These are the
                    main fatty acids in human diets and tissues.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* 2. Classification by degree of saturation */}
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
                  2. Classification by degree of saturation
                </h2>
                <span className="rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-500">
                  double bonds
                </span>
              </div>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                This system is based on the presence or absence of carbon–carbon
                double bonds in the hydrocarbon chain.
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-rose-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
                    Saturated fatty acids
                  </p>
                  <p className="mt-1">
                    No double bonds between carbon atoms; all carbons are “saturated”
                    with hydrogen (for example, palmitic acid, stearic acid).
                  </p>
                  <p className="mt-1 text-xs text-rose-600">
                    Usually solid at room temperature; common in animal fats and
                    some plant fats.
                  </p>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-emerald-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    Monounsaturated fatty acids (MUFA)
                  </p>
                  <p className="mt-1">
                    Contain one double bond in the carbon chain (for example,
                    oleic acid, 18:1).
                  </p>
                  <p className="mt-1 text-xs text-emerald-600">
                    Often liquid at room temperature; abundant in olive oil,
                    canola oil, and some nuts.
                  </p>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-sky-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-500">
                    Polyunsaturated fatty acids (PUFA)
                  </p>
                  <p className="mt-1">
                    Contain two or more double bonds (for example, linoleic
                    acid 18:2, α‑linolenic acid 18:3, arachidonic acid 20:4).
                  </p>
                  <p className="mt-1 text-xs text-sky-600">
                    Important for membrane fluidity and as precursors of
                    eicosanoids.
                  </p>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-amber-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                    Trans fatty acids (brief mention)
                  </p>
                  <p className="mt-1">
                    Unsaturated fatty acids in which one or more double bonds
                    are in the trans configuration, often formed during partial
                    hydrogenation of oils.
                  </p>
                  <p className="mt-1 text-xs text-amber-600">
                    Associated with adverse effects on cardiovascular health;
                    intake is generally discouraged.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* 3. Essential vs non-essential and omega nomenclature */}
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
                3. Essential vs non‑essential and omega series (brief)
              </h2>
              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                For clinical nutrition, it is important to know which fatty
                acids must be supplied in the diet and how they are named by the
                position of their first double bond.
              </p>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-emerald-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    Essential vs non‑essential fatty acids
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Essential fatty acids: cannot be synthesised by humans in
                      adequate amounts and must come from the diet (for example,
                      linoleic acid, α‑linolenic acid).
                    </li>
                    <li>
                      Non‑essential fatty acids: can be synthesised in the body
                      from other precursors (for example, palmitic acid).
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-sky-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-500">
                    Omega‑3 and omega‑6 (concept)
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      The “omega” number indicates the position of the first
                      double bond from the methyl (ω) end of the chain.
                    </li>
                    <li>
                      Omega‑3 examples: α‑linolenic acid (18:3 n‑3), EPA, DHA.
                    </li>
                    <li>
                      Omega‑6 examples: linoleic acid (18:2 n‑6), arachidonic
                      acid (20:4 n‑6).
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
                1. Definition: long‑chain carboxylic acids that form the
                hydrophobic part of most lipids.
              </li>
              <li>
                2. Chain length: short (2–5 C), medium (6–12 C), long (14–18 C),
                very long (&gt;18 C).
              </li>
              <li>
                3. Saturation: saturated (no double bonds), MUFA (one), PUFA
                (two or more), plus trans fats as an important clinical variant.
              </li>
              <li>
                4. Essential fatty acids: mainly linoleic and α‑linolenic; know
                the idea of omega‑3 and omega‑6 series.
              </li>
            </ul>

            <div className="mt-4 rounded-2xl bg-emerald-500/10 p-3 text-xs text-emerald-300">
              <p className="font-semibold text-emerald-200">
                Quick memory hook
              </p>
              <p className="mt-1">
                “Length, links, and life‑essential”: length = chain length,
                links = double bonds, life‑essential = essential omega‑3/omega‑6.
              </p>
            </div>

            <p className="mt-4 text-[11px] text-slate-400">
              Use this page as a base before studying MUFA, PUFA, essential
              fatty acids, and health effects in more detail.
            </p>
          </motion.aside>
        </div>
      </motion.div>
    </div>
  );
};

export default FattyAcidsClassification;
