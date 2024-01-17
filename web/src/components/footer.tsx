"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "./ui/button";

export const Footer = () => {
  const { setTheme } = useTheme();

  return (
    <footer className="w-full p-2 flex items-center mb-0 mt-auto">
      <span className="text-background font-medium text-[12px]">
        *Работает только с ПрИ-23
      </span>

      <div className="mr-0 ml-auto">
        <Button size={"icon"} variant={"link"} onClick={() => setTheme("dark")}>
          <SunIcon className="w-6 h-6" />
        </Button>
        <Button size={"icon"} variant={"link"} onClick={() => setTheme("light")}>
          <MoonIcon className="w-6 h-6" />
        </Button>
      </div>
    </footer>
  );
};
