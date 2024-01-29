"use client";

import { SearchComponent } from "@/components";

import { __group_cart__ } from "@/__mocks__/group-cart.mocks";
import { FilteredGroupComponent } from "@/components/filter-group";

import { useAppSelector } from "@/lib/hooks";
import { selectGroups } from "@/lib/features/groups/groups-slice";

export default function GroupsSelection() {
  const state = useAppSelector(selectGroups);

  return (
    <section className="flex flex-col m-auto px-28">
      <nav className="flex sm:flex-row md:flex-row lg:flex-row flex-col items-center justify-center w-full py-10">
        <h1 className="font-medium text-xl">Выберите вашу группу</h1>

        <SearchComponent />
      </nav>

      <div className="flex flex-row flex-wrap gap-6">
        <FilteredGroupComponent
          groups={state.groups}
          searchParams={state.search}
        />
      </div>
    </section>
  );
}
