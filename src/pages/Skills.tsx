import { curriculumSkillsData } from "../data/content";

function Skills() {
  return (
    <div className="flex justify-center">
      <div className="text-body-lg mt-5 flex w-200 flex-col justify-center">
        <div className="mt-5">
          <div className="font-bold">ATTIVITA'</div>
          <div className="">{curriculumSkillsData.activities.description}</div>
          <div>
            <ul className="list-disc">
              {curriculumSkillsData.activities.activities.map(
                (activ, index) => (
                  <li key={index} className="mt-2 ml-10">
                    {activ}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <div className="font-bold">COMPETENZE</div>
          <div>
            {curriculumSkillsData.competences.map((comp) => (
              <div className="mt-3">
                <div className="font-semibold">{comp.title}:</div>
                <div>{comp.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
