"use client";

import { useState } from "react";

import { Input, Button } from "@/components/ui";

export const SearchComponent = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="flex flex-row items-center gap-2 max-w-sm m-auto mt-4 sm:mr-0 sm:ml-auto">
      <Input
        placeholder="Поиск"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit" onClick={(e) => console.log(search)}>
        Искать
      </Button>
    </div>
  );
};
