import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Curriculum />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
