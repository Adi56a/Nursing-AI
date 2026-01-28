import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";

const RegulationOfBloodGlucose = () => {
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
              Regulation of Blood Glucose
            </h1>
            <p
              className={`mt-2 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              How the body keeps blood glucose within a narrow range in fed and
              fasting states using hormones and coordinated pathways.
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

        {/* Hero: normal range + key hormones */}
        <section
          className={`grid gap-6 rounded-3xl border p-5 shadow-sm md:grid-cols-[3fr,2fr] ${
            isDark
              ? "border-slate-700 bg-slate-900/70"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold sm:text-xl">
              Big picture: glucose homeostasis
            </h2>
            <p
              className={`mt-2 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              In healthy people, fasting blood glucose is usually kept around
              70–100 mg/dL, with moderate, temporary rises after meals. Insulin
              prevents levels from going too high, while glucagon and other
              hormones prevent them from dropping too low.
            </p>

            <div className="mt-4 grid gap-3 text-xs sm:grid-cols-3 sm:text-sm">
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-emerald-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-500">
                  Main hormones
                </p>
                <p>Insulin (lowers glucose), glucagon (raises glucose).</p>
              </div>
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-sky-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-500">
                  Supporting
                </p>
                <p>Catecholamines, cortisol, growth hormone in stress/fasting.</p>
              </div>
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-amber-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-500">
                  Key organs
                </p>
                <p>Pancreas, liver, muscle, adipose tissue, brain.</p>
              </div>
            </div>
          </div>

          {/* Fed vs fasting quick comparison */}
          <div
            className={`rounded-2xl border text-xs sm:text-sm ${
              isDark
                ? "border-slate-700 bg-slate-900/80 text-slate-200"
                : "border-slate-200 bg-slate-50 text-slate-700"
            }`}
          >
            <div className="border-b px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-emerald-500 border-slate-700/60">
              Fed vs fasting state (core idea)
            </div>
            <div className="grid grid-cols-2 divide-x divide-slate-700/40">
              <div className="p-4 space-y-1">
                <p className="font-semibold text-emerald-400">Fed state</p>
                <p>• High insulin, low glucagon</p>
                <p>• Glucose uptake and storage ↑</p>
                <p>• Glycogenesis and lipogenesis ↑</p>
              </div>
              <div className="p-4 space-y-1">
                <p className="font-semibold text-amber-400">Fasting state</p>
                <p>• Low insulin, high glucagon</p>
                <p>• Hepatic glucose output ↑</p>
                <p>• Glycogenolysis and gluconeogenesis ↑</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content layout: main concepts + side recap */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[3fr,2fr]">
          {/* Left: teaching blocks */}
          <div className="space-y-6">
            {/* 1. Role of insulin */}
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
                <h2 className="text-lg font-semibold">1. Insulin – lowers blood glucose</h2>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-500">
                  fed state
                </span>
              </div>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Insulin is released from pancreatic β‑cells when blood glucose
                rises, especially after a carbohydrate‑rich meal. It is the main
                anabolic hormone promoting uptake and storage of nutrients.
              </p>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-emerald-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    Effects on tissues
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Increases glucose uptake into muscle and adipose tissue
                      (via GLUT4 translocation).
                    </li>
                    <li>
                      Stimulates glycogen synthesis in liver and muscle
                      (glycogenesis).
                    </li>
                    <li>
                      Promotes fatty acid synthesis and triglyceride storage in
                      liver and adipose tissue.
                    </li>
                    <li>Enhances protein synthesis and inhibits protein breakdown.</li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-sky-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-500">
                    Net effect on blood glucose
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>Moves glucose from blood into cells.</li>
                    <li>Converts excess glucose into glycogen and fat.</li>
                    <li>
                      Suppresses hepatic glucose output by inhibiting
                      glycogenolysis and gluconeogenesis.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* 2. Glucagon and counter-regulatory hormones */}
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
                2. Glucagon and other counter‑regulatory hormones
              </h2>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                When blood glucose begins to fall during fasting, exercise, or
                between meals, glucagon and other hormones act to raise it back
                towards normal.
              </p>

              <div className="mt-4 space-y-4 text-sm">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-amber-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                    Glucagon (primary counter‑hormone)
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Secreted by pancreatic α‑cells when blood glucose falls or
                      during stress.
                    </li>
                    <li>
                      Acts mainly on the liver to stimulate glycogen breakdown
                      (glycogenolysis) and glucose production from non‑carbohydrate
                      precursors (gluconeogenesis).
                    </li>
                    <li>
                      Inhibits glycogen synthesis and glycolysis in the liver,
                      favouring glucose release into the blood.
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-rose-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
                    Other counter‑regulatory hormones (brief)
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Adrenaline (epinephrine): quickly increases glycogenolysis
                      in liver and muscle and stimulates lipolysis.
                    </li>
                    <li>
                      Cortisol and growth hormone: support longer‑term fasting by
                      promoting gluconeogenesis and reducing glucose uptake in
                      some tissues.
                    </li>
                    <li>
                      Together they form a “backup team” when glucose falls
                      significantly below normal.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* 3. Integrated response: fed vs fasting */}
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
                3. Integrated view: after a meal vs fasting
              </h2>
              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                The balance between insulin and glucagon changes with the time
                after eating, causing different pathways to dominate.
              </p>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-emerald-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    Post‑prandial (after a meal)
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>Blood glucose rises as carbohydrates are absorbed.</li>
                    <li>Insulin secretion increases; glucagon falls.</li>
                    <li>
                      Liver and muscle store glucose as glycogen; adipose tissue
                      stores fat.
                    </li>
                    <li>
                      Hepatic glucose production is suppressed to prevent
                      excessive hyperglycaemia.
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-amber-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                    Fasting (between meals / overnight)
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>Blood glucose starts to fall as tissues use glucose.</li>
                    <li>Insulin levels decrease; glucagon rises.</li>
                    <li>
                      Liver breaks down glycogen and later performs
                      gluconeogenesis to maintain blood glucose.
                    </li>
                    <li>
                      With prolonged fasting, lipolysis and ketone body
                      production increase to spare glucose for the brain.
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
                1. <span className="font-semibold">Insulin</span> lowers blood
                glucose by increasing uptake and storage, and by inhibiting
                glucose production.
              </li>
              <li>
                2. <span className="font-semibold">Glucagon</span> raises blood
                glucose by stimulating glycogenolysis and gluconeogenesis in the
                liver.
              </li>
              <li>
                3. Normal regulation is a{" "}
                <span className="font-semibold">balance</span> between insulin
                and counter‑regulatory hormones adjusted minute‑to‑minute.
              </li>
              <li>
                4. Chronic imbalance (for example, insulin deficiency or
                resistance) leads to sustained hyperglycaemia and diabetes.
              </li>
            </ul>

            <div className="mt-4 rounded-2xl bg-emerald-500/10 p-3 text-xs text-emerald-300">
              <p className="font-semibold text-emerald-200">
                Quick memory hook
              </p>
              <p className="mt-1">
                “Insulin stores, glucagon restores” – insulin stores glucose
                after meals, glucagon restores glucose between meals.
              </p>
            </div>

            <p className="mt-4 text-[11px] text-slate-400">
              Always connect this topic with diabetes mellitus, hypoglycaemia,
              and the fed–fasting changes in other metabolic pathways.
            </p>
          </motion.aside>
        </div>
      </motion.div>
    </div>
  );
};

export default RegulationOfBloodGlucose;
