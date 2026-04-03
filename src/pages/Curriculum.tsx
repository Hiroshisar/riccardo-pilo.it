import CurriculumItem from "../components/CurriculumItem";
import { curriculumWorkData } from "../data/content";
import type { workDataType } from "../utils/types";

function Curriculum() {
  return (
    <>
      <div>
        {curriculumWorkData.map((work: workDataType, index) => (
          <CurriculumItem key={index} item={work} />
        ))}
      </div>
    </>
  );
}

export default Curriculum;
