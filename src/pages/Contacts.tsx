import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";
import { GrDocumentPdf } from "react-icons/gr";

function Contacts() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "r.pilo.lavoro@gmail.com",
      link: "mailto:r.pilo.lavoro@gmail.com"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "riccardo-pilo",
      link: "https://www.linkedin.com/in/riccardo-pilo/"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "Hiroshisar",
      link: "https://github.com/Hiroshisar"
    },
    {
      icon: <GrDocumentPdf />,
      label: "Curriculum",
      value: "Riccardo Pilo",
      link: "cv-pilo-2026.pdf"
    }
  ];

  return (
    <div className="mt-30 flex justify-center px-4">
      <div className="flex w-full max-w-3xl flex-wrap items-center justify-around gap-6 sm:flex-nowrap">
        {contacts.map((item) => (
          <a
            key={item.label}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 transition-all duration-300"
          >
            <div className="text-secondary-complement group-hover:text-secondary text-6xl transition-all duration-300 group-hover:scale-110 sm:text-7xl md:text-8xl">
              {item.icon}
            </div>

            <span className="text-secondary-complement group-hover:text-secondary text-sm transition-all duration-300 group-hover:scale-110 sm:text-base">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
