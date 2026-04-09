import { presentation } from "../data/content";

function Home() {
  return (
    <div className="mt-20 flex justify-center">
      <div className="text-body-sm sm:text-body md:text-body-lgflex w-300 flex-col text-center">
        <div className="text-h3">{presentation.main}</div>
        <h2 className="text-h3 mt-10">{presentation.subtitle}</h2>
      </div>
    </div>
  );
}

export default Home;
