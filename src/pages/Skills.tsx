import { curriculumSkillsData, languageData } from "../data/content";

function Skills() {
  return (
    <div className="flex justify-center">
      <div className="text-body-lg mt-5 flex w-200 flex-col justify-center">
        <div className="mt-5">
          <div className="font-bold">ATTIVITÀ</div>
          <div className="">{curriculumSkillsData.activities.description}</div>
          <div>
            <ul className="list-disc">
              {curriculumSkillsData.activities.activities.map((activ) => (
                <li key={activ} className="mt-2 ml-10">
                  {activ}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <div className="font-bold">LINGUE</div>
          <div className="ml-5">
            {languageData.map((lang) => (
              <div key={lang.language} className="mt-3">
                <div className="font-semibold">{lang.language}:</div>
                <div>{lang.level}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <div className="font-bold">COMPETENZE</div>
          <div>
            <div className="ml-5">
              {curriculumSkillsData.competences.map((comp) => (
                <div key={comp.title} className="mt-3">
                  <div className="font-semibold">{comp.title}:</div>
                  <div>{comp.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
