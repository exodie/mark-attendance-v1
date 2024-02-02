import { Group } from "@/interfaces";
import { FC } from "react";
import { GroupCart } from ".";

interface Props {
  groups: Group[];
  searchParams: string;
}

export const FilteredGroupComponent: FC<Props> = (props) => {
  const filteredGroups = props.groups.filter((group) =>
    group.title.toLowerCase().includes(props.searchParams.toLowerCase())
  );

  return (
    <div className="flex flex-row flex-wrap gap-4">
      {filteredGroups.map((item, index) => (
        <GroupCart
          key={index}
          id={item.id}
          title={item.title}
          description={item.description}
          responsiblePerson={item.responsiblePerson}
        />
      ))}
    </div>
  );
};
