import { GroupCart } from "@/components/cart/group-cart";

import { __group_cart__ } from "@/__mocks__/group-cart.mocks";

export default function AuthGroupSelection() {
  return (
    <div>
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
  );
}
