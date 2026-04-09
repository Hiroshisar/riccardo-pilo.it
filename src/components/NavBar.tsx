import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";

const navItems = [
  { label: "Curriculum", path: "/curriculum" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contatti", path: "/contacts" }
];

function NavBar() {
  const location = useLocation();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="from-primary to-primary-complement flex h-15 items-center gap-2 border bg-linear-to-l px-2 sm:h-20 sm:px-4 md:h-24">
      <Logo />

      <div className="flex flex-1 gap-2 rounded-2xl bg-black/10 p-1 backdrop-blur-sm sm:p-2">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          const isHovered = hovered === item.path;

          return (
            <div
              key={item.path}
              className="relative flex-1"
              onMouseEnter={() => setHovered(item.path)}
              onMouseLeave={() => setHovered(null)}
            >
              <NavLink to={item.path}>
                <div className="relative flex cursor-pointer items-center justify-center py-2 sm:py-3">
                  {(isActive || isHovered) && (
                    <motion.div
                      layoutId="shared-pill"
                      className="bg-primary-complement shadow-primary absolute inset-0 rounded-xl"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 text-sm transition-colors duration-300 sm:text-base md:text-lg ${
                      isActive ? "text-white" : "text-gray-200"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
