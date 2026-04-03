import { about } from "../data/content";

function Home() {
  return (
    <div className="text-body-sm sm:text-body md:text-body-lg">{about}</div>
  );
}

export default Home;
