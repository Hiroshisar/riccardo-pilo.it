import type { curriculumDataType } from "../utils/types";

function CurriculumItem({ item }: { item: curriculumDataType }) {
  return (
    <div className="mt-5 rounded-2xl bg-gray-200 p-3">
      <div className="text-body-lg font-bold">{item.type}</div>
      <div className="text-body">
        {item.startDate}{" "}
        {item.endDate
          ? item.endDate === item.startDate
            ? ""
            : ` - ${item.endDate}`
          : " - current"}
      </div>
      <div className="text-primary-complement text-body">
        {item.employer ? item.employer : item.school}
      </div>
      {item.activities ? (
        <ul className="text-body-sm md:text-body mt-2 list-disc space-y-1 pl-10">
          {item.activities.map((act, index) => (
            <li key={index} className="mt-3">
              {act}
            </li>
          ))}
        </ul>
      ) : (
        item.link && (
          <a href={item.link} target="_blank">
            My Open Badge
          </a>
        )
      )}
    </div>
  );
}

export default CurriculumItem;
