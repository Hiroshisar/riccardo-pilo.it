import { Outlet, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const tabs = [
  { label: "Lavoro", path: "workhistory" },
  { label: "Istruzione", path: "academichistory" },
  { label: "Certificati", path: "certifications" },
  { label: "Skills", path: "skills" }
];

function Curriculum() {
  return (
    <div className="mt-5 flex justify-center px-2 sm:px-4 md:px-0">
      <div className="w-full max-w-5xl">
        <div className="flex flex-col gap-2 rounded-2xl bg-black/10 p-2 backdrop-blur-sm sm:flex-row">
          {tabs.map((tab) => (
            <NavLink key={tab.path} to={tab.path} className="relative flex-1">
              {({ isActive }) => (
                <div className="relative flex cursor-pointer items-center justify-center py-3 sm:py-4">
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="bg-secondary-complement shadow-secondary absolute inset-0 rounded-xl"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 text-sm transition-colors duration-300 sm:text-base md:text-lg ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {tab.label}
                  </span>
                </div>
              )}
            </NavLink>
          ))}
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
