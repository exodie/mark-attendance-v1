import { GroupCart, SearchComponent } from "@/components";

import { __group_cart__ } from "@/__mocks__/group-cart.mocks";

export default function AuthGroupSelection() {
  return (
    <section className="flex flex-col m-auto">
      <nav className="flex sm:flex-row md:flex-row lg:flex-row flex-col items-center justify-center w-full p-10">
        <h1 className="font-medium text-xl">Выберите вашу группу</h1>

        <SearchComponent />
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
