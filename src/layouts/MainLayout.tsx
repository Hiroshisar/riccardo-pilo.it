import type { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MainLayout({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <div className="font-lexend flex min-h-dvh w-dvw flex-col bg-gray-100">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
        <NavBar />
      </div>
      <main className="flex-1 px-2 py-0.5">{children}</main>
      <div className="bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
