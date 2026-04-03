import type { workDataType } from "../utils/types";

function CurriculumItem({ item }: { item: workDataType }) {
  return (
    <div className="mt-2 border">
      <div>
        {item.type} - {item.startDate}{" "}
        {item.endDate
          ? item.endDate === item.startDate
            ? ""
            : ` - ${item.endDate}`
          : "- current"}
      </div>
      <div>{item.employer}</div>
      {item.activities && (
        <ul className="list-disc space-y-1 pl-10">
          {item.activities.map((act) => (
            <li>{act}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CurriculumItem;
