import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Base from "./components/Base";
import EducationalBackground from "components/EducationalBackground";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/educational-background" element={<EducationalBackground/>}/>
          <Route path="/work-experience" element={<Home/>}/>
          <Route path="/prizes-and-awards" element={<Home/>}/>
          <Route path="/professional-competences" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
