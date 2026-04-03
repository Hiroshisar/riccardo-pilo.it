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
    window.open(card.repoLink);
  };

  return (
    <div className="mx-auto mt-5 w-full max-w-4xl px-4 sm:mt-12">
      <motion.div
        layout
        onClick={handleToggle}
        className={`cursor-pointer rounded-2xl border-y-4 border-white bg-white shadow-lg`}
        transition={{
          layout: {
            duration: 0.4,
            type: "spring",
            bounce: 0.3
          }
        }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <span className="truncate text-sm font-semibold sm:text-base">
            {card.name}
          </span>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <FaGithub
                className="hover:text-primary size-5 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRedirect();
                }}
              />
              <FaDownload
                className="hover:text-primary size-5 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload();
                }}
              />
            </div>

            <div className="bg-primary/60 h-5 w-px" />

            <motion.div
              className="hover:text-primary"
              animate={{ rotate: isOpen ? 180 : 0 }}
            >
              {isOpen ? <FaMinus /> : <FaPlus />}
            </motion.div>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0, scale: 0.98 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.98 }}
              transition={{
                duration: 0.35,
                type: "spring",
                bounce: 0.25
              }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 sm:px-8">
                <div className="mt-2 text-xs text-gray-500 sm:text-sm">
                  {formatDate(card.createdAt)}
                </div>

                <div className="text-primary-complement mt-3 text-right text-sm sm:text-base">
                  {card.description}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Card;
