"use client";

import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { Input, Button } from "@/components/ui";

import { setSearchParams } from "@/lib/features/groups/groups-slice";

export const SearchComponent: FC = () => {
  const [search, setSearch] = useState<string>("");

  const dispatch = useDispatch();

  return (
    <div className="flex flex-row items-center gap-2 max-w-sm m-auto mt-4 sm:mr-0 sm:ml-auto">
      <Input
        placeholder="Поиск группы"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit" onClick={() => dispatch(setSearchParams(search))}>
        Искать
      </Button>
    </div>
  );
};
