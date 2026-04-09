import TimeLine from "../components/TimeLine";
import { curriculumWorkData } from "../data/content";

function WorkHistory() {
  return <TimeLine curriculumData={curriculumWorkData} />;
}

export default WorkHistory;
