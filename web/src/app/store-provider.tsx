"use client";

import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

import { store, AppStore } from "@/lib/store";
import { addGroups } from "@/lib/features/groups/groups-slice";

import { __group_cart__ } from "@/__mocks__/group-cart.mocks";

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore | null>();

  if (!storeRef.current) {
    storeRef.current = store();
    storeRef.current.dispatch(addGroups(__group_cart__)); // test
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
