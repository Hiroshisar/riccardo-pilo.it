import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";
import WorkHistory from "./pages/WorkHistory";
import AcademicHistory from "./pages/AcademicHistory";
import Certifications from "./pages/Certifications";
import Skills from "./pages/Skills";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="/curriculum" element={<Curriculum />}>
            <Route index element={<Navigate to="workhistory" replace />} />
            <Route path="workhistory" element={<WorkHistory />} />
            <Route path="academichistory" element={<AcademicHistory />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="skills" element={<Skills />} />
          </Route>

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
