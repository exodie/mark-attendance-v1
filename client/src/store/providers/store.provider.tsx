import { ReactNode, useState } from "react";

import { StoreContext } from "../store";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<StoreContextProps>({
    isAuth: false,
  });

  const setAuthStatus = () => {
    setData({ ...data, isAuth: !data.isAuth });
  };

  return (
    <StoreContext.Provider value={{ data, setAuthStatus }}>
      {children}
    </StoreContext.Provider>
  );
};
