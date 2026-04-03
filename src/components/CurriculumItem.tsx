import type { curriculumDataType } from "../utils/types";

function CurriculumItem({ item }: { item: curriculumDataType }) {
  return (
    <div className="mt-5 rounded-2xl bg-gray-200 p-3">
      <div className="text-body-lg font-bold">
        {item.type} - {item.startDate}{" "}
        {item.endDate
          ? item.endDate === item.startDate
            ? ""
            : ` - ${item.endDate}`
          : " - current"}
      </div>
      <div className="text-primary-complement text-body">{item.employer}</div>
      {item.activities && (
        <ul className="text-mediumText sm:text-body-sm md:text-body mt-2 list-disc space-y-1 pl-10">
          {item.activities.map((act) => (
            <li>{act}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CurriculumItem;
