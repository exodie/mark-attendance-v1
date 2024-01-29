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
    <Card className="border-1">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>
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
        <Link href={`/auth/signin/${props.title}`}>
          <Button>Отметить</Button>
        </Link>
        <Button disabled>Взаимодействие</Button>
      </CardFooter>
    </Card>
  );
};
