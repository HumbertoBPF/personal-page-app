import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Base from "./components/Base";
import EducationalBackground from "components/EducationalBackground";
import WorkExperience from "components/WorkExperience";
import ProfessionalCompetences from "components/ProfessionalCompetences";
import PrizesAndAwards from "components/PrizesAndAwards";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/educational-background" element={<EducationalBackground/>}/>
          <Route path="/work-experience" element={<WorkExperience/>}/>
          <Route path="/prizes-and-awards" element={<PrizesAndAwards/>}/>
          <Route path="/professional-competences" element={<ProfessionalCompetences/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
