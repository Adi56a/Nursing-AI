import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // adjust path if needed

// ✅ FULL syllabus preserved, now with easy-to-edit routes for every topic + test + module test
// Just change pageRoute / testRoute / moduleTestRoute strings as you create new pages.

const modules = [
  {
    id: "module-1",
    name: "Module 1: Carbohydrate Metabolism",
    baseSlug: "carb-metabolism",
    topics: [
      {
        label: "Classification of carbohydrates",
        pageRoute: "/classification-of-carb",
        testRoute: "/tests/biochem/carb/classification-of-carbohydrates",
      },
      {
        label: "Digestion of carbohydrates",
        pageRoute: "/digestion-of-carb",
        testRoute: "/tests/biochem/carb/digestion-of-carbohydrates",
      },
      {
        label: "Absorption of carbohydrates",
        pageRoute: "/absorption-of-carb",
        testRoute: "/tests/biochem/carb/absorption-of-carbohydrates",
      },
      {
        label: "Metabolic pathways of carbohydrates (overview)",
        pageRoute: "/MetabolicPathwaysOfCarb",
        testRoute: "/tests/biochem/carb/metabolic-pathways-overview",
      },
      {
        label: "Disorders related to carbohydrate metabolism",
        pageRoute: "/DisordersOfCarb",
        testRoute: "/tests/biochem/carb/disorders-of-carbohydrate-metabolism",
      },
      {
        label: "Regulation of blood glucose",
        pageRoute: "/RegulationOfBloodGlucose",
        testRoute: "/tests/biochem/carb/regulation-of-blood-glucose",
      },
      {
        label:
          "Diabetes mellitus type 1 – definition, etiology, clinical features, complications, brief management",
        pageRoute: "/DiabetesMellitusType1",
        testRoute: "/tests/biochem/carb/diabetes-mellitus-type-1",
      },
      {
        label:
          "Diabetes mellitus type 2 – definition, risk factors, clinical features, complications, brief management",
        pageRoute: "/DiabetesMellitusType2",
        testRoute: "/tests/biochem/carb/diabetes-mellitus-type-2",
      },
    ],
    moduleTestRoute: "/tests/biochem/modules/carb-metabolism",
  },
  {
    id: "module-2",
    name: "Module 2: Lipid Metabolism",
    baseSlug: "lipid-metabolism",
    topics: [
      {
        label: "Definition and classification of fatty acids",
        pageRoute: "/FattyAcidsClassification",
        testRoute: "/tests/biochem/lipid/fatty-acids-classification",
      },
      {
        label:
          "Mono‑unsaturated fatty acids (MUFA) – definition and clinical significance",
        pageRoute: "/MUFA",
        testRoute: "/tests/biochem/lipid/mufa",
      },
      {
        label:
          "Polyunsaturated fatty acids (PUFA) – definition and clinical significance",
        pageRoute: "/PUFA",
        testRoute: "/tests/biochem/lipid/pufa",
      },
      {
        label:
          "Essential fatty acids – definition, examples and clinical importance",
        pageRoute: "/EssentialFattyAcids",
        testRoute: "/tests/biochem/lipid/essential-fatty-acids",
      },
      {
        label: "Trans fatty acids – definition and adverse health effects",
        pageRoute: "/biochem/lipid/trans-fatty-acids",
        testRoute: "/tests/biochem/lipid/trans-fatty-acids",
      },
      {
        label: "Digestion of lipids",
        pageRoute: "/biochem/lipid/digestion-of-lipids",
        testRoute: "/tests/biochem/lipid/digestion-of-lipids",
      },
      {
        label: "Absorption of lipids",
        pageRoute: "/biochem/lipid/absorption-of-lipids",
        testRoute: "/tests/biochem/lipid/absorption-of-lipids",
      },
      {
        label: "Metabolism of lipids – major pathways (overview)",
        pageRoute: "/biochem/lipid/lipid-metabolic-pathways",
        testRoute: "/tests/biochem/lipid/lipid-metabolic-pathways",
      },
      {
        label: "Disorders related to lipid metabolism (brief)",
        pageRoute: "/biochem/lipid/disorders-of-lipid-metabolism",
        testRoute: "/tests/biochem/lipid/disorders-of-lipid-metabolism",
      },
      {
        label:
          "Compounds formed from cholesterol – overview of major derivatives",
        pageRoute: "/biochem/lipid/cholesterol-derivatives",
        testRoute: "/tests/biochem/lipid/cholesterol-derivatives",
      },
      {
        label:
          "Ketone bodies – types, significance, and urine ketone testing (indication, procedure, interpretation)",
        pageRoute: "/biochem/lipid/ketone-bodies",
        testRoute: "/tests/biochem/lipid/ketone-bodies",
      },
      {
        label:
          "Lipoproteins – types (chylomicrons, VLDL, LDL, HDL etc.) and their functions",
        pageRoute: "/biochem/lipid/lipoproteins",
        testRoute: "/tests/biochem/lipid/lipoproteins",
      },
      {
        label:
          "Lipid profile – components of a standard lipid profile, principle, interpretation",
        pageRoute: "/biochem/lipid/lipid-profile",
        testRoute: "/tests/biochem/lipid/lipid-profile",
      },
      {
        label:
          "Atherosclerosis – brief concept, role of lipids and clinical relevance",
        pageRoute: "/biochem/lipid/atherosclerosis",
        testRoute: "/tests/biochem/lipid/atherosclerosis",
      },
    ],
    moduleTestRoute: "/tests/biochem/modules/lipid-metabolism",
  },
  {
    id: "module-3",
    name: "Module 3: Proteins and Amino Acids",
    baseSlug: "proteins-aminoacids",
    topics: [
      {
        label:
          "Classification of amino acids based on nutrition (essential, non‑essential, etc.)",
        pageRoute: "/biochem/protein/aminoacids-nutritional-classification",
        testRoute: "/tests/biochem/protein/aminoacids-nutritional-classification",
      },
      {
        label:
          "Classification of amino acids based on metabolic fate/metabolic rate (glucogenic, ketogenic, etc.)",
        pageRoute: "/biochem/protein/aminoacids-metabolic-classification",
        testRoute: "/tests/biochem/protein/aminoacids-metabolic-classification",
      },
      {
        label: "Digestion of proteins",
        pageRoute: "/biochem/protein/digestion-of-proteins",
        testRoute: "/tests/biochem/protein/digestion-of-proteins",
      },
      {
        label: "Absorption of amino acids",
        pageRoute: "/biochem/protein/absorption-of-aminoacids",
        testRoute: "/tests/biochem/protein/absorption-of-aminoacids",
      },
      {
        label:
          "Metabolism of proteins – major pathways and overview of catabolism/anabolism",
        pageRoute: "/biochem/protein/metabolism-overview",
        testRoute: "/tests/biochem/protein/metabolism-overview",
      },
      {
        label:
          "Disorders related to protein and amino acid metabolism (general overview)",
        pageRoute: "/biochem/protein/disorders-of-protein-metabolism",
        testRoute: "/tests/biochem/protein/disorders-of-protein-metabolism",
      },
      {
        label:
          "Biologically important compounds synthesized from amino acids – names of key compounds",
        pageRoute: "/biochem/protein/biologically-important-compounds",
        testRoute: "/tests/biochem/protein/biologically-important-compounds",
      },
      {
        label:
          "Inborn errors of amino acid metabolism of aromatic amino acids – names and brief description",
        pageRoute: "/biochem/protein/inborn-errors-aromatic-aminoacids",
        testRoute: "/tests/biochem/protein/inborn-errors-aromatic-aminoacids",
      },
      {
        label: "Plasma proteins – types (albumin, globulins, fibrinogen etc.)",
        pageRoute: "/biochem/protein/plasma-proteins-types",
        testRoute: "/tests/biochem/protein/plasma-proteins-types",
      },
      {
        label: "Functions of plasma proteins",
        pageRoute: "/biochem/protein/plasma-proteins-functions",
        testRoute: "/tests/biochem/protein/plasma-proteins-functions",
      },
      {
        label: "Normal reference values for major plasma proteins",
        pageRoute: "/biochem/protein/plasma-proteins-reference-values",
        testRoute:
          "/tests/biochem/protein/plasma-proteins-reference-values",
      },
      {
        label: "Proteinuria – definition and common causes",
        pageRoute: "/biochem/protein/proteinuria",
        testRoute: "/tests/biochem/protein/proteinuria",
      },
      {
        label: "Hypoproteinemia – definition and common causes",
        pageRoute: "/biochem/protein/hypoproteinemia",
        testRoute: "/tests/biochem/protein/hypoproteinemia",
      },
      {
        label: "Hyper‑gammaglobulinemia – definition and common causes",
        pageRoute: "/biochem/protein/hyper-gammaglobulinemia",
        testRoute: "/tests/biochem/protein/hyper-gammaglobulinemia",
      },
      {
        label:
          "Electrophoresis – principle, normal serum protein pattern, abnormal patterns (brief)",
        pageRoute: "/biochem/protein/electrophoresis",
        testRoute: "/tests/biochem/protein/electrophoresis",
      },
    ],
    moduleTestRoute: "/tests/biochem/modules/proteins-aminoacids",
  },
  {
    id: "module-4",
    name: "Module 4: Clinical Enzymology",
    baseSlug: "clinical-enzymology",
    topics: [
      {
        label: "Isoenzymes – definition and key properties",
        pageRoute: "/biochem/enzymes/isoenzymes",
        testRoute: "/tests/biochem/enzymes/isoenzymes",
      },
      {
        label: "Liver disease–related enzymes: ALT, AST, ALP, GGT",
        pageRoute: "/biochem/enzymes/liver-disease-enzymes",
        testRoute: "/tests/biochem/enzymes/liver-disease-enzymes",
      },
      {
        label: "Myocardial infarction–related enzymes: CK, troponins, AST, LDH",
        pageRoute: "/biochem/enzymes/mi-markers",
        testRoute: "/tests/biochem/enzymes/mi-markers",
      },
      {
        label: "Muscle disease–related enzymes: CK, Aldolase",
        pageRoute: "/biochem/enzymes/muscle-disease-enzymes",
        testRoute: "/tests/biochem/enzymes/muscle-disease-enzymes",
      },
      {
        label: "Bone disease–related enzyme – alkaline phosphatase (ALP)",
        pageRoute: "/biochem/enzymes/bone-disease-alp",
        testRoute: "/tests/biochem/enzymes/bone-disease-alp",
      },
      {
        label: "Prostate cancer–related enzymes: PSA, Acid phosphatase (ACP)",
        pageRoute: "/biochem/enzymes/prostate-markers",
        testRoute: "/tests/biochem/enzymes/prostate-markers",
      },
    ],
    moduleTestRoute: "/tests/biochem/modules/clinical-enzymology",
  },
  {
    id: "module-5",
    name: "Module 5: Acid–Base Balance",
    baseSlug: "acid-base-balance",
    topics: [
      {
        label: "Acid–base maintenance – basic concepts",
        pageRoute: "/biochem/acid-base/basic-concepts",
        testRoute: "/tests/biochem/acid-base/basic-concepts",
      },
      {
        label: "pH – definition and normal value of blood pH",
        pageRoute: "/biochem/acid-base/blood-ph",
        testRoute: "/tests/biochem/acid-base/blood-ph",
      },
      {
        label: "Regulation of blood pH – buffer systems, respiratory, renal",
        pageRoute: "/biochem/acid-base/regulation-of-ph",
        testRoute: "/tests/biochem/acid-base/regulation-of-ph",
      },
      {
        label: "Arterial blood gas (ABG) – list of normal values",
        pageRoute: "/biochem/acid-base/abg-normal-values",
        testRoute: "/tests/biochem/acid-base/abg-normal-values",
      },
      {
        label:
          "Acid–base disorders – major types, definitions, common causes",
        pageRoute: "/biochem/acid-base/acid-base-disorders",
        testRoute: "/tests/biochem/acid-base/acid-base-disorders",
      },
    ],
    moduleTestRoute: "/tests/biochem/modules/acid-base-balance",
  },
  {
    id: "module-6",
    name: "Module 6: Heme Catabolism and Jaundice",
    baseSlug: "heme-catabolism-jaundice",
    topics: [
      {
        label: "Heme catabolism – concept and steps (overview)",
        pageRoute: "/biochem/heme/heme-catabolism-overview",
        testRoute: "/tests/biochem/heme/heme-catabolism-overview",
      },
      {
        label: "Heme degradation pathway – stages from heme to final products",
        pageRoute: "/biochem/heme/heme-degradation-pathway",
        testRoute: "/tests/biochem/heme/heme-degradation-pathway",
      },
      {
        label:
          "Jaundice – types, causes, urine & blood investigations, Van den Bergh test",
        pageRoute: "/biochem/heme/jaundice-overview",
        testRoute: "/tests/biochem/heme/jaundice-overview",
      },
    ],
    moduleTestRoute: "/tests/biochem/modules/heme-catabolism-jaundice",
  },
  {
    id: "module-7",
    name: "Module 7: Organ Function Tests",
    baseSlug: "organ-function-tests",
    topics: [
      {
        label:
          "Renal function tests – parameters and key normal values",
        pageRoute: "/biochem/oft/renal-function-tests",
        testRoute: "/tests/biochem/oft/renal-function-tests",
      },
      {
        label:
          "Liver function tests – parameters and key normal values",
        pageRoute: "/biochem/oft/liver-function-tests",
        testRoute: "/tests/biochem/oft/liver-function-tests",
      },
      {
        label:
          "Thyroid function tests – parameters and key normal values",
        pageRoute: "/biochem/oft/thyroid-function-tests",
        testRoute: "/tests/biochem/oft/thyroid-function-tests",
      },
    ],
    moduleTestRoute: "/tests/biochem/modules/organ-function-tests",
  },
  {
    id: "module-8",
    name: "Module 8: Immunochemistry",
    baseSlug: "immunochemistry",
    topics: [
      {
        label: "Structure of immunoglobulins – basic structural components",
        pageRoute: "/biochem/immunochemistry/structure-of-immunoglobulins",
        testRoute:
          "/tests/biochem/immunochemistry/structure-of-immunoglobulins",
      },
      {
        label: "Classes of immunoglobulins – names and brief features",
        pageRoute: "/biochem/immunochemistry/classes-of-immunoglobulins",
        testRoute:
          "/tests/biochem/immunochemistry/classes-of-immunoglobulins",
      },
      {
        label:
          "Functions of immunoglobulins – major roles in immunity",
        pageRoute: "/biochem/immunochemistry/functions-of-immunoglobulins",
        testRoute:
          "/tests/biochem/immunochemistry/functions-of-immunoglobulins",
      },
      {
        label:
          "ELISA test – principle, steps, interpretation of results",
        pageRoute: "/biochem/immunochemistry/elisa",
        testRoute: "/tests/biochem/immunochemistry/elisa",
      },
    ],
    moduleTestRoute: "/tests/biochem/modules/immunochemistry",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const moduleVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.35, ease: "easeOut" },
  }),
};

const contentVariants = {
  collapsed: { opacity: 0, height: 0 },
  expanded: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const BioChemistrySyllabus = () => {
  const [openModuleId, setOpenModuleId] = useState(null);

  const toggleModule = (id) => {
    setOpenModuleId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <motion.div
        className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <header className="mb-10 text-center">
          <p className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Biochemistry syllabus
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Metabolism & Clinical Biochemistry
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-700 sm:text-base">
            Tap on any module to expand it. Each topic and test already has a
            route string you can connect to real pages.
          </p>
        </header>

        <div className="relative flex gap-4 sm:gap-6">
          {/* Left timeline (desktop) */}
          <div className="relative hidden w-10 justify-center md:flex">
            <div className="mt-4 mb-6 h-full w-[3px] rounded-full bg-slate-200" />
          </div>

          {/* Modules */}
          <div className="flex-1 space-y-4 sm:space-y-6">
            {modules.map((mod, index) => {
              const isOpen = openModuleId === mod.id;
              return (
                <motion.div
                  key={mod.id}
                  custom={index}
                  variants={moduleVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative flex items-start gap-3 sm:gap-4"
                >
                  {/* Node number */}
                  <div className="hidden md:flex md:w-10 md:justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white shadow-md">
                      {index + 1}
                    </div>
                  </div>

                  {/* Module card */}
                  <section className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 shadow-sm">
                    <button
                      type="button"
                      onClick={() => toggleModule(mod.id)}
                      className="flex w-full items-center justify-between gap-3 text-left"
                    >
                      <div>
                        <h2 className="text-base font-semibold sm:text-lg">
                          {mod.name}
                        </h2>
                        <p className="mt-1 text-[11px] text-slate-600 sm:text-xs">
                          {mod.topics.length} topics • Tap to{" "}
                          {isOpen ? "collapse" : "expand"}
                        </p>
                      </div>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-700">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          variants={contentVariants}
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-xs text-slate-700 sm:text-sm">
                            Click the topic name to go to its lesson page, or
                            “Take test” for the corresponding quiz.
                          </p>

                          {/* Topics list */}
                          <div className="mt-4 space-y-3">
                            {mod.topics.map((topicObj) => (
                              <div
                                key={topicObj.label}
                                className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md sm:text-sm"
                              >
                                {/* Topic page link */}
                                <Link
                                  to={topicObj.pageRoute}
                                  className="flex items-start gap-2 text-slate-900 hover:text-emerald-600"
                                >
                                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                                  <span>{topicObj.label}</span>
                                </Link>

                                {/* Topic test link */}
                                <div className="mt-1 pl-5">
                                  <Link
                                    to={topicObj.testRoute}
                                    className="inline-flex items-center text-[11px] font-semibold text-emerald-600 hover:text-emerald-700"
                                  >
                                    Take test
                                    <span className="ml-1 text-xs">↗</span>
                                  </Link>
                                </div>

                                {/* Example comment to guide you:
                                   To change this topic route, just edit topicObj.pageRoute and topicObj.testRoute above.
                                   e.g. pageRoute: "/biochem/carb/classification-of-carbohydrates"
                                   e.g. testRoute: "/tests/biochem/carb/classification-of-carbohydrates"
                                */}
                              </div>
                            ))}
                          </div>

                          {/* Module-level major test */}
                          {mod.moduleTestRoute && (
                            <div className="mt-4 flex justify-end">
                              <Link
                                to={mod.moduleTestRoute}
                                className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-600"
                              >
                                Module test for {mod.name}
                                <span className="ml-2 text-sm">🧪</span>
                              </Link>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </section>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          To wire new pages, only edit <code>pageRoute</code>,{" "}
          <code>testRoute</code>, and <code>moduleTestRoute</code> strings in
          the <code>modules</code> array above.
        </div>
      </motion.div>
    </div>
  );
};

export default BioChemistrySyllabus;
