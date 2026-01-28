import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";

const AbsorptionOfCarb = () => {
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
              Absorption of Carbohydrates
            </h1>
            <p
              className={`mt-2 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              What happens to glucose, galactose, and fructose after digestion in
              the small intestine.
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

        {/* Hero: simple schematic + key idea */}
        <section
          className={`grid gap-6 rounded-3xl border p-5 shadow-sm md:grid-cols-[2fr,3fr] ${
            isDark
              ? "border-slate-700 bg-slate-900/70"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold sm:text-xl">
              Big picture: from lumen to blood
            </h2>
            <p
              className={`mt-2 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              After digestion, monosaccharides in the small‑intestinal lumen
              cross the epithelial cells, enter the portal blood, and reach the
              liver before being distributed to the body.
            </p>

            <div className="mt-4 grid gap-3 text-xs sm:grid-cols-3 sm:text-sm">
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-emerald-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-500">
                  Site
                </p>
                <p>Upper small intestine (mainly jejunum).</p>
              </div>
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-sky-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-500">
                  Transporters
                </p>
                <p>SGLT1, GLUT2, and GLUT5 in enterocyte membranes.</p>
              </div>
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-amber-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-500">
                  End result
                </p>
                <p>Monosaccharides in portal blood headed to the liver.</p>
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
              Flow overview
            </div>
            <div className="p-4 space-y-2">
              <p>Intestinal lumen → enterocyte apical membrane → cytoplasm.</p>
              <p>Enterocyte cytoplasm → basolateral membrane → blood.</p>
              <p>Blood in villus capillaries → portal vein → liver.</p>
            </div>
          </div>
        </section>

        {/* Content layout: main concepts + side recap */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[3fr,2fr]">
          {/* Left: teaching blocks */}
          <div className="space-y-6">
            {/* 1. Transport across the apical membrane */}
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
                  1. Entry into enterocytes (apical side)
                </h2>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-500">
                  lumen → cell
                </span>
              </div>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Glucose, galactose, and fructose use specific transporters on
                the brush‑border (apical) membrane of small‑intestinal
                epithelial cells.
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-emerald-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    Glucose and galactose – SGLT1
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Sodium–glucose cotransporter 1 (SGLT1) moves glucose and
                      galactose into the cell together with sodium ions.
                    </li>
                    <li>
                      This is secondary active transport driven by the sodium
                      gradient maintained by the Na⁺/K⁺‑ATPase pump.
                    </li>
                    <li>
                      Allows efficient uptake even when luminal glucose is lower
                      than inside the cell.
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-sky-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-500">
                    Fructose – GLUT5
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Fructose enters enterocytes mainly via the transporter
                      GLUT5 on the apical membrane.
                    </li>
                    <li>
                      Transport occurs by facilitated diffusion along the
                      concentration gradient, without direct ATP use.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* 2. Exit to blood via basolateral membrane */}
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
                2. Exit to blood (basolateral side)
              </h2>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Once inside the enterocyte, all three monosaccharides leave the
                cell across the basolateral membrane to enter capillary blood.
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-violet-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-violet-500">
                    GLUT2 transporter
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      GLUT2 on the basolateral membrane carries glucose,
                      galactose, and fructose out of the cell into the blood.
                    </li>
                    <li>
                      This is facilitated diffusion driven by the concentration
                      gradient from cytoplasm to blood.
                    </li>
                    <li>
                      From the villus capillaries, sugars move into the portal
                      vein and reach the liver.
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-amber-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                    Hepatic handling
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      In the liver, galactose and fructose are largely converted
                      to glucose‑related intermediates.
                    </li>
                    <li>
                      Glucose may be released into the blood, stored as
                      glycogen, or used for energy.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* 3. Clinical notes (concise) */}
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
                3. Clinical relevance (brief)
              </h2>
              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Problems with transporters or enzymes can reduce carbohydrate
                absorption and produce symptoms such as bloating, diarrhoea, and
                flatulence.
              </p>
              <ul className="mt-3 space-y-1 text-sm list-disc pl-4">
                <li>
                  Lactase deficiency leads to lactose intolerance because
                  lactose is not split into absorbable monosaccharides.
                </li>
                <li>
                  Fructose malabsorption occurs when fructose uptake via GLUT5
                  is limited.
                </li>
              </ul>
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
                1. Main site of absorption: upper small intestine (especially
                jejunum).
              </li>
              <li>
                2. Glucose and galactose: secondary active transport via SGLT1
                on the apical membrane.
              </li>
              <li>
                3. Fructose: facilitated diffusion via GLUT5 on the apical
                membrane.
              </li>
              <li>
                4. All three leave the cell through GLUT2 on the basolateral
                membrane into portal blood.
              </li>
            </ul>

            <div className="mt-4 rounded-2xl bg-emerald-500/10 p-3 text-xs text-emerald-300">
              <p className="font-semibold text-emerald-200">
                Quick memory hook
              </p>
              <p className="mt-1">
                “SGLT1 brings glucose in, GLUT2 sends it out, GLUT5 favours
                fructose.”
              </p>
            </div>

            <p className="mt-4 text-[11px] text-slate-400">
              Use this page together with the digestion of carbohydrates and
              regulation of blood glucose topics for an integrated understanding.
            </p>
          </motion.aside>
        </div>
      </motion.div>
    </div>
  );
};

export default AbsorptionOfCarb;
