import TimeLine from "../components/TimeLine";
import { curriculumAcademicData } from "../data/content";

function AcademicHistory() {
  return <TimeLine curriculumData={curriculumAcademicData} />;
}

export default AcademicHistory;
