import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";

const DiabetesMellitusType2 = () => {
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
              Biochemistry • Carbohydrate metabolism
            </p>
            <h1 className="mt-1 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Diabetes Mellitus Type 2
            </h1>
            <p
              className={`mt-2 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Definition, major risk factors, typical clinical features,
              complications, and a brief outline of management.
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

        {/* Hero: definition + quick overview card */}
        <section
          className={`grid gap-6 rounded-3xl border p-5 shadow-sm md:grid-cols-[3fr,2fr] ${
            isDark
              ? "border-slate-700 bg-slate-900/70"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold sm:text-xl">
              Definition and core concept
            </h2>
            <p
              className={`mt-2 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Diabetes mellitus type 2 is a chronic metabolic disorder in which
              peripheral tissues become resistant to insulin and pancreatic
              β‑cells cannot maintain adequate insulin secretion, leading to
              persistent hyperglycaemia.
            </p>

            <div className="mt-4 grid gap-3 text-xs sm:grid-cols-3 sm:text-sm">
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-emerald-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-500">
                  Typical onset
                </p>
                <p>Usually adults, increasingly seen in adolescents with obesity.</p>
              </div>
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-sky-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-500">
                  Key defect
                </p>
                <p>
                  Insulin resistance with relative (not absolute) insulin
                  deficiency.
                </p>
              </div>
              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800/80" : "bg-amber-50"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-500">
                  Course
                </p>
                <p>Progressive; many patients ultimately need insulin therapy.</p>
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
              Quickly remember
            </div>
            <div className="p-4 space-y-2">
              <p>Insulin resistance + β‑cell dysfunction.</p>
              <p>Strong link to obesity, inactivity, family history.</p>
              <p>Often detected during routine screening or with mild symptoms.</p>
            </div>
          </div>
        </section>

        {/* Content layout: main concepts + side recap */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[3fr,2fr]">
          {/* Left: teaching blocks */}
          <div className="space-y-6">
            {/* 1. Risk factors and pathogenesis */}
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
                  1. Risk factors and basic pathogenesis
                </h2>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-500">
                  who gets it and why
                </span>
              </div>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Type 2 diabetes develops gradually when long‑standing insulin
                resistance is combined with progressive failure of β‑cell
                insulin secretion.
              </p>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-emerald-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    Major risk factors
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>Overweight or obesity, especially central (abdominal) fat.</li>
                    <li>Sedentary lifestyle and high‑calorie diet.</li>
                    <li>Family history of type 2 diabetes.</li>
                    <li>Age over 40 years (but increasingly younger people affected).</li>
                    <li>
                      History of gestational diabetes or impaired fasting glucose /
                      impaired glucose tolerance.
                    </li>
                    <li>
                      Associated conditions: hypertension, dyslipidaemia,
                      polycystic ovary syndrome, etc.
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-sky-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-500">
                    Pathogenesis outline
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Insulin resistance in muscle, liver, and adipose tissue →
                      decreased glucose uptake and increased hepatic glucose
                      output.
                    </li>
                    <li>
                      β‑cells initially increase insulin secretion to
                      compensate.
                    </li>
                    <li>
                      Over time, β‑cell function declines → relative insulin
                      deficiency → overt hyperglycaemia.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* 2. Clinical features */}
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
                2. Clinical features (typical presentation)
              </h2>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Onset is often insidious. Many individuals are diagnosed during
                routine blood tests or when complications appear.
              </p>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-emerald-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    Common symptoms
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>Polyuria, polydipsia, sometimes polyphagia.</li>
                    <li>
                      Tiredness, lethargy, blurred vision, recurrent infections
                      (for example, skin, urinary tract).
                    </li>
                    <li>
                      Slow healing of wounds; sometimes weight loss if
                      hyperglycaemia is severe.
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-rose-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
                    Acute presentations (less common than type 1)
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Hyperosmolar hyperglycaemic state in severe,
                      untreated/undertreated cases, especially in older adults.
                    </li>
                    <li>
                      Diabetic ketoacidosis can occur but is less typical than
                      in type 1 diabetes.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* 3. Complications and brief management */}
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
                3. Complications and brief management
              </h2>

              <p
                className={`mt-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Long‑term uncontrolled hyperglycaemia damages blood vessels and
                nerves. Management aims to control glucose, blood pressure, and
                lipids to reduce these risks.
              </p>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-amber-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                    Major complications (exam‑level list)
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Microvascular: diabetic retinopathy, nephropathy, and
                      neuropathy.
                    </li>
                    <li>
                      Macrovascular: coronary artery disease, stroke, peripheral
                      arterial disease.
                    </li>
                    <li>
                      Foot problems: ulcers, infections, risk of amputation.
                    </li>
                    <li>
                      Acute: hyperosmolar hyperglycaemic state, diabetic
                      ketoacidosis, severe hypoglycaemia (usually treatment‑related).
                    </li>
                  </ul>
                </div>

                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? "bg-slate-800/80" : "bg-teal-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-500">
                    Brief management outline
                  </p>
                  <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>
                      Lifestyle: medical nutrition therapy, weight reduction if
                      overweight, regular physical activity, smoking cessation.
                    </li>
                    <li>
                      Medications: oral glucose‑lowering agents (for example,
                      metformin) and other drug classes; insulin added if needed.
                    </li>
                    <li>
                      Regular monitoring of blood glucose, HbA1c, blood
                      pressure, lipids.
                    </li>
                    <li>
                      Screening and early treatment of eye, kidney, nerve, and
                      cardiovascular complications.
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
                1. Definition: insulin resistance with relative insulin
                deficiency → chronic hyperglycaemia.
              </li>
              <li>
                2. Risk factors: central obesity, inactivity, family history,
                older age, previous gestational diabetes.
              </li>
              <li>
                3. Clinical: often asymptomatic for years; may show classic
                polyuria–polydipsia–weight change and recurrent infections.
              </li>
              <li>
                4. Complications similar to type 1 (micro‑ and macrovascular)
                but very common; management combines lifestyle and medications.
              </li>
            </ul>

            <div className="mt-4 rounded-2xl bg-emerald-500/10 p-3 text-xs text-emerald-300">
              <p className="font-semibold text-emerald-200">
                Quick memory hook
              </p>
              <p className="mt-1">
                “Resistant first, exhausted later” – insulin resistance appears
                early, β‑cell function slowly fails, complications rise.
              </p>
            </div>

            <p className="mt-4 text-[11px] text-slate-400">
              Compare this page with type 1 diabetes to highlight differences in
              cause, age of onset, insulin status, and treatment approach.
            </p>
          </motion.aside>
        </div>
      </motion.div>
    </div>
  );
};

export default DiabetesMellitusType2;
