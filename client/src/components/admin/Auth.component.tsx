// lib
import { FC, useState } from "react";

// styles
import { Button, Input } from "antd";
import "./styles/admin.scss";

// api
import { studentsAuthorization } from "../../api/api";

// store
import { useStore } from "../../store/hooks/store.hook";

/**
 * Вход в админ-панель
 * @returns JSX.Element as component
 */
export const AdminAuth: FC = () => {
  const [password, setPassword] = useState<string>(""); // state password input
  const { setAuthStatus } = useStore();

  return (
    <section className="admin_auth">
      <div className="admin_auth-block">
        <span className="admin_auth–block_title" style={{ fontSize: "22px" }}>
          Admin panel
        </span>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="admin_auth-block_input"
          placeholder="Password"
          showCount
          maxLength={6}
        />

        <Button
          onClick={() =>
            studentsAuthorization("000", password).then((res) => {
              if (res.status === true) {
                setAuthStatus();
              }
            })
          }
          className="admin_auth-block_btn"
          type="primary"
        >
          Enter
        </Button>
      </div>
    </section>
  );
};
