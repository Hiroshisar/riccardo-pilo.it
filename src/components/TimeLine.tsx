import type { curriculumDataType, GroupedWork } from "../utils/types";
import CurriculumItem from "./CurriculumItem";

function TimeLine({
  curriculumData
}: {
  curriculumData: curriculumDataType[];
}) {
  const groupedData: GroupedWork[] = Object.values(
    curriculumData.reduce<Record<number, GroupedWork>>((acc, entry) => {
      if (!acc[entry.year]) {
        acc[entry.year] = {
          year: entry.year,
          items: []
        };
      }

      acc[entry.year].items.push(entry);
      return acc;
    }, {})
  ).sort((a, b) => b.year - a.year);

  return (
    <div className="relative isolate mx-auto mt-5 max-w-5xl px-4">
      <div className="bg-secondary-complement absolute top-0 left-1/2 z-0 h-full w-px -translate-x-1/2" />

      <div className="relative z-10 flex flex-col gap-20">
        {groupedData.map((group, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={group.year}
              className="relative grid grid-cols-1 items-center md:grid-cols-2"
            >
              <div className={"mr-8 md:order-2 md:pl-8 md:text-left"}>
                <div className="flex flex-col gap-4">
                  {group.items.map((item, i) => (
                    <CurriculumItem key={i} item={item} />
                  ))}
                </div>
              </div>

              <div
                className={` ${
                  isLeft
                    ? "md:order-2 md:pl-8 md:text-left"
                    : "md:order-1 md:pr-8 md:text-right"
                } mt-2 md:mt-0`}
              >
                <div className="text-secondary-complement text-3xl font-bold">
                  {group.year}
                </div>
              </div>

              <div className="bg-secondary-complement absolute top-1/2 left-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full md:block" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TimeLine;
