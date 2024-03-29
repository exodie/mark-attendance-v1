"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "./ui/button";

export const Footer = () => {
  const { setTheme } = useTheme();

  return (
    <footer className="w-full p-2 flex items-center mb-0 mt-auto">
      <span className="font-medium text-[12px]">
        *Временно будет работать только с одной группой
      </span>

      <div className="p-2 mr-0 ml-auto">
        <Button size={"icon"} variant={"link"} onClick={() => setTheme("light")}>
          <SunIcon className="w-6 h-6" />
        </Button>
        <Button size={"icon"} variant={"link"} onClick={() => setTheme("dark")}>
          <MoonIcon className="w-6 h-6" />
        </Button>
      </div>
    </footer>
  );
};
