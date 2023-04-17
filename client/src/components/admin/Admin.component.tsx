// lib
import { FC, useEffect } from "react";

// styles
import { notification } from "antd";

// components
import { AdminAuth } from "./Auth.component";
import { MainAdmin } from "./Main.component";

// stores
import { useStore } from "../../store/hooks/store.hook";

/**
 * Admin panel
 * @returns JSX.Element as component
 */
export const Admin: FC = () => {
  const { data } = useStore();

  useEffect(() => {
    if (data.isAuth === false) {
      return () =>
        notification.warning({
          message: "You need to log in before you get to the next page!",
          duration: 2.5,
        });
    }
  }, []);

  return (
    <>
      <button onClick={() => console.log(data)}>logs</button>
      {data.isAuth === true ? <MainAdmin /> : <AdminAuth />}
    </>
  );
};
