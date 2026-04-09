import { FaDownload, FaGithub, FaMinus, FaPlus } from "react-icons/fa6";
import { formatDate } from "../utils/helpers";
import type { repoDataType } from "../utils/types";
import { motion, AnimatePresence } from "framer-motion";

function Card({
  card,
  curOpen,
  onOpen
}: {
  card: repoDataType;
  curOpen: number;
  onOpen: (id: number) => void;
}) {
  const isOpen = curOpen === card.id;

  const handleToggle = () => {
    onOpen(isOpen ? -1 : card.id);
  };

  function handleDownload() {
    const url = `https://github.com/Hiroshisar/${card.name}/archive/refs/heads/${card.default_branch}.zip`;

    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  const handleRedirect = () => {
    window.open(card.repoLink, "_blank");
  };

  return (
    <div className="mx-auto mt-6 w-full max-w-4xl px-4">
      <motion.div
        layout
        onClick={handleToggle}
        className="cursor-pointer rounded-2xl border border-white/20 bg-white/70 shadow-md backdrop-blur-md transition hover:shadow-xl"
        transition={{
          layout: {
            duration: 0.35,
            type: "spring",
            bounce: 0.25
          }
        }}
      >
        <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex flex-col">
            <span className="text-primary text-base font-semibold sm:text-lg">
              {card.name}
            </span>
            <span className="text-subtitle text-xs">
              Creato: {formatDate(card.createdAt)}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRedirect();
                }}
                className="hover:text-primary-complement rounded-lg p-2 text-gray-600 transition hover:bg-gray-100"
              >
                <FaGithub className="size-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload();
                }}
                className="hover:text-primary-complement rounded-lg p-2 text-gray-600 transition hover:bg-gray-100"
              >
                <FaDownload className="size-5" />
              </button>
            </div>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              className="hover:text-primary-complement rounded-lg p-2 text-gray-600 transition"
            >
              {isOpen ? <FaMinus /> : <FaPlus />}
            </motion.div>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.3
              }}
              className="overflow-hidden border-t border-gray-200"
            >
              <div className="px-5 py-4 sm:px-6">
                <div className="text-primary-complement mb-2 ml-2 font-bold">
                  {card.language}
                </div>
                <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                  {card.description || "No description provided."}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Card;
