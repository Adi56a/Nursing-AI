import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BioChemistrySyllabus from './pages/BioChemistrySyllabus';
import ClassificationOfCarb from './pages/BioChemistryPages/Module1/ClassificationOfCarb';
import DigestionOfCarb from './pages/BioChemistryPages/Module1/DigestionOfCarb';
import AbsorptionOfCarb from './pages/BioChemistryPages/Module1/AbsorptionOfCarb';
import MetabolicPathwaysOfCarb from './pages/BioChemistryPages/Module1/MetabolicPathwayOfCarb';
import DisordersOfCarb from './pages/BioChemistryPages/Module1/DisordersOfCarb';
import RegulationOfBloodGlucose from './pages/BioChemistryPages/Module1/RegulationOfBloodGlucose';
import DiabetesMellitusType1 from './pages/BioChemistryPages/Module1/DiabetesMellitusType1';
import DiabetesMellitusType2 from './pages/BioChemistryPages/Module1/DiabetesMellitusType2';
import FattyAcidsClassification from './pages/BioChemistryPages/Module2/FattyAcidsClassification';

import MUFA from './pages/BioChemistryPages/Module2/MUFA';
import PUFA from './pages/BioChemistryPages/Module2/PUFA';
import EssentialFattyAcids from './pages/BioChemistryPages/Module2/EssentialFattyAcids';



const App = () => {
  return (
    <BrowserRouter>
      <div>
     

       

        {/* Route definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio-chem-syllabus" element={<BioChemistrySyllabus />} />
          <Route path="/classification-of-carb" element={<ClassificationOfCarb />} />
          <Route path="/digestion-of-carb" element={<DigestionOfCarb />} />
          <Route path="/absorption-of-carb" element={<AbsorptionOfCarb />} />
          <Route path="/MetabolicPathwaysOfCarb" element={<MetabolicPathwaysOfCarb/>} />
          <Route path="/DisordersOfCarb" element={<DisordersOfCarb/>} />
          <Route path="/RegulationOfBloodGlucose" element={<RegulationOfBloodGlucose/>} />
          <Route path="/DiabetesMellitusType1" element={<DiabetesMellitusType1/>} />
          <Route path="/DiabetesMellitusType2" element={<DiabetesMellitusType2/>} />

          {/* module 2 */}

          <Route path="/FattyAcidsClassification" element={<FattyAcidsClassification/>} />
          <Route path="/MUFA" element={<MUFA/>} />
          <Route path="/PUFA" element={<PUFA/>} />
          <Route path="/EssentialFattyAcids" element={<EssentialFattyAcids/>} />





        
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
