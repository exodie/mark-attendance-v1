import { GroupCart } from "@/components/cart/group-cart";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { __group_cart__ } from "@/__mocks__/group-cart.mocks";

export default function AuthGroupSelection() {
  return (
    <section className="flex flex-col m-auto">
      <nav className="flex flex-row items-center w-full p-10">
        <h1 className="font-medium text-2xl">Выберите вашу группу</h1>

        <div className="flex flex-row items-center gap-2 max-w-sm mr-0 ml-auto">
          <Input placeholder="Поиск" type="text" />
          <Button type="submit">Искать</Button>
        </div>
      </nav>

      <div className="px-10 flex flex-row flex-wrap gap-4">
        {__group_cart__.map(
          ({ title, description, responsiblePerson }, index) => (
            <GroupCart
              key={index}
              title={title}
              description={description}
              responsiblePerson={responsiblePerson}
            />
          )
        )}
      </div>
    </section>
  );
}
