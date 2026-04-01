import type { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MainLayout({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <div className="font-lexend h-dvh w-dvw bg-gray-100">
      <div>
        <NavBar />
      </div>
      <div className="px-2 py-0.5">{children}</div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
