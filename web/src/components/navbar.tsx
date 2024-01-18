import Link from "next/link";

import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  ScrollArea,
} from "./ui";

import { version } from "../../package.json";

export const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center m-auto w-full h-16 px-10 py-4">
      <h1 className="font-bold text-2xl">
        <Link href={"/"}>ISTracker</Link>
      </h1>

      <div>
        <Sheet>
          <SheetTrigger>Поддержка</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Все необходимое здесь</SheetTitle>
              <SheetDescription>Текущая версия: {version}</SheetDescription>
            </SheetHeader>

            <ScrollArea className="h-full rounded-md border p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda quam molestiae impedit at rerum ex earum, ipsa dolorum
              maxime libero in harum illo ut delectus quas praesentium eligendi
              eum? Expedita. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Assumenda quam molestiae impedit at rerum ex earum, ipsa
              dolorum maxime libero in harum illo ut delectus quas praesentium
              eligendi eum? Expedita. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Assumenda quam molestiae impedit at rerum ex
              earum, ipsa dolorum maxime libero in harum illo ut delectus quas
              praesentium eligendi eum? Expedita. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Assumenda quam molestiae impedit at
              rerum ex earum, ipsa dolorum maxime libero in harum illo ut
              delectus quas praesentium eligendi eum? Expedita. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Assumenda quam
              molestiae impedit at rerum ex earum, ipsa dolorum maxime libero in
              harum illo ut delectus quas praesentium eligendi eum? Expedita.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda quam molestiae impedit at rerum ex earum, ipsa dolorum
              maxime libero in harum illo ut delectus quas praesentium eligendi
              eum? Expedita. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Assumenda quam molestiae impedit at rerum ex earum, ipsa
              dolorum maxime libero in harum illo ut delectus quas praesentium
              eligendi eum? Expedita. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Assumenda quam molestiae impedit at rerum ex
              earum, ipsa dolorum maxime libero in harum illo ut delectus quas
              praesentium eligendi eum? Expedita. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Assumenda quam molestiae impedit at
              rerum ex earum, ipsa dolorum maxime libero in harum illo ut
              delectus quas praesentium eligendi eum? Expedita. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Assumenda quam
              molestiae impedit at rerum ex earum, ipsa dolorum maxime libero in
              harum illo ut delectus quas praesentium eligendi eum? Expedita.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda quam molestiae impedit at rerum ex earum, ipsa dolorum
              maxime libero in harum illo ut delectus quas praesentium eligendi
              eum? Expedita. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Assumenda quam molestiae impedit at rerum ex earum, ipsa
              dolorum maxime libero in harum illo ut delectus quas praesentium
              eligendi eum? Expedita. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Assumenda quam molestiae impedit at rerum ex
              earum, ipsa dolorum maxime libero in harum illo ut delectus quas
              praesentium eligendi eum? Expedita. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Assumenda quam molestiae impedit at
              rerum ex earum, ipsa dolorum maxime libero in harum illo ut
              delectus quas praesentium eligendi eum? Expedita. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Assumenda quam
              molestiae impedit at rerum ex earum, ipsa dolorum maxime libero in
              harum illo ut delectus quas praesentium eligendi eum? Expedita.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda quam molestiae impedit at rerum ex earum, ipsa dolorum
              maxime libero in harum illo ut delectus quas praesentium eligendi
              eum? Expedita. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Assumenda quam molestiae impedit at rerum ex earum, ipsa
              dolorum maxime libero in harum illo ut delectus quas praesentium
              eligendi eum? Expedita. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Assumenda quam molestiae impedit at rerum ex
              earum, ipsa dolorum maxime libero in harum illo ut delectus quas
              praesentium eligendi eum? Expedita. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Assumenda quam molestiae impedit at
              rerum ex earum, ipsa dolorum maxime libero in harum illo ut
              delectus quas praesentium eligendi eum? Expedita. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Assumenda quam
              molestiae impedit at rerum ex earum, ipsa dolorum maxime libero in
              harum illo ut delectus quas praesentium eligendi eum? Expedita.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda quam molestiae impedit at rerum ex earum, ipsa dolorum
              maxime libero in harum illo ut delectus quas praesentium eligendi
              eum? Expedita. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Assumenda quam molestiae impedit at rerum ex earum, ipsa
              dolorum maxime libero in harum illo ut delectus quas praesentium
              eligendi eum? Expedita. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Assumenda quam molestiae impedit at rerum ex
              earum, ipsa dolorum maxime libero in harum illo ut delectus quas
              praesentium eligendi eum? Expedita. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Assumenda quam molestiae impedit at
              rerum ex earum, ipsa dolorum maxime libero in harum illo ut
              delectus quas praesentium eligendi eum? Expedita. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Assumenda quam
              molestiae impedit at rerum ex earum, ipsa dolorum maxime libero in
              harum illo ut delectus quas praesentium eligendi eum? Expedita.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda quam molestiae impedit at rerum ex earum, ipsa dolorum
              maxime libero in harum illo ut delectus quas praesentium eligendi
              eum? Expedita.
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};