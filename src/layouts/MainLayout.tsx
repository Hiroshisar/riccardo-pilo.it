import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import { useRef } from "react";

function MainLayout() {
  const mainRef = useRef<HTMLElement | null>(null);

  return (
    <div className="font-lexend flex h-screen flex-col bg-gray-100">
      <ScrollProgress targetRef={mainRef} />

      <div className="shrink-0">
        <NavBar />
      </div>

      <main ref={mainRef} className="flex-1 overflow-y-auto px-2 py-0.5">
        <Outlet />
      </main>

      <div className="shrink-0">
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
