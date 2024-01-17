import { FC } from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Group } from "@/interfaces";

import { GetStatusOfUser } from "../status-user";

export const GroupCart: FC<Group> = (props) => {
  return (
    <Card className="bg-foreground border-2 text-white">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription className="max-w-[250px]">
          {props.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h1>Ответственные:</h1>
        <ul>
          {props.responsiblePerson.map(({ name, link }, index) => (
            <div key={index} className="w-full flex items-center gap-2">
              <GetStatusOfUser link={link} />
              <li>{name}</li>
              <Link href={link} target="_blank">
                <ExternalLinkIcon />
              </Link>
            </div>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="w-full flex flex-row gap-2">
        <Button>Отметить</Button>
        <Button disabled>Взаимодействие</Button>
      </CardFooter>
    </Card>
  );
};
