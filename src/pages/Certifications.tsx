import TimeLine from "../components/TimeLine";
import { curriculumCertificationsData } from "../data/content";

function Certifications() {
  return <TimeLine curriculumData={curriculumCertificationsData} />;
}

export default Certifications;
