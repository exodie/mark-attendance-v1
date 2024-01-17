"use client";

import { useEffect, useState } from "react";

export const GetStatusOfUser = ({ link }: { link: string }) => {
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    if (link === "https://vk.com/id223267204") {
      setStatus(true);
    }

    if (link === "https://vk.com/teaholic_iroh") {
      setStatus(false);
    }
  }, [status]);

  return (
    <span
      className={`h-2 w-2 rounded-full ${
        status === false ? "bg-red-500" : "bg-green-400"
      }`}
      aria-label="Текущая активность"
    />
  );
};
