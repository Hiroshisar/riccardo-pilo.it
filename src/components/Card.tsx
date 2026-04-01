import { FaDownload, FaGithub, FaMinus, FaPlus } from "react-icons/fa6";
import { formatDate } from "../utils/helpers";
import type { cardType } from "../utils/types";

function Card({
  card,
  curOpen,
  onOpen
}: {
  card: cardType;
  curOpen: number;
  onOpen: (id: number) => void;
}) {
  const isOpen = curOpen === card.id;

  const handleToggle = () => {
    onOpen(isOpen ? 0 : card.id);
  };
  function handleDownload(e: any) {
    e.stopPropagation();

    const url = `https://github.com/Hiroshisar/${card.name}/archive/refs/heads/${card.default_branch}.zip`;

    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  const handleRedirect = (e: any) => {
    e.stopPropagation();
    window.open(card.repoLink);
  };

  return (
    <div
      className="mx-auto mt-10 flex w-175 flex-col gap-6"
      onClick={handleToggle}
    >
      <div
        className={`cursor-pointer items-center ${isOpen ? "rounded-lg" : "rounded-full"} border-t-4 border-b-4 border-white bg-white px-6 py-5 pr-12 shadow-[0_0_30px_rgba(0,0,0,0.15)]`}
      >
        <div className="grid align-middle">
          <div className="flex">
            <div className="w-20 rounded-md pl-5">{card.name}</div>
            <div className="flex w-full justify-evenly gap-3 rounded-md">
              <div className="ml-auto flex gap-5">
                <FaGithub
                  className="hover:text-primary"
                  onClick={(e) => handleRedirect(e)}
                />
                <FaDownload
                  className="hover:text-primary"
                  onClick={(e) => handleDownload(e)}
                />
              </div>
              <div className="ml-auto">{isOpen ? <FaMinus /> : <FaPlus />}</div>
            </div>
          </div>
          {isOpen && (
            <div className="text-body-sm overflow-hidden rounded-md">
              <div className="text-label text-subtitle mt-2 pl-5">
                {card ? formatDate(card.createdAt) : ""}
              </div>
              <div className="text-body-sm text-primary-complement mt-3 text-right">
                {card.description}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
