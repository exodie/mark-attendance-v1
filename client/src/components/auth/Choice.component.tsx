// lib
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

// styles
import { Form, Card, Typography, Modal, Input, notification } from "antd";

// api uses
import { studentsAuthorization } from "../../api/api";

export const ChoiceCharacter: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false),
    [isModalOpen, setIsModalOpen] = useState(false),
    [login, setLogin] = useState<string>(""),
    [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const tryAuth = (login: string) => {
    showModal();

    setLogin(login);
  };

  const handleOk = () => {
    setIsModalOpen(false);

    studentsAuthorization(login, password).then((res) => {
      if (res.status === true) {
        navigate(`/table/${login}`, { replace: true, state: { data: res } });
      } else {
        notification.error({
          message: res.message,
          duration: 2,
        });
      }
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setPassword("");
  };

  const showModal = () => {
    setIsModalOpen(true);
    setPassword("");
  };

  return (
    <Form className="form_auth">
      <Typography.Title className="form_auth-title">
        Войдите в аккаунт
      </Typography.Title>
      <Card
        loading={isLoading}
        onClick={() => tryAuth("01")}
        className="form_auth-card"
        hoverable
        cover={
          <img src="https://sun7-16.userapi.com/s/v1/ig2/foCv8KGC6y6XiDwXYZ5G0JgVSB5pEN7qirInnWP9DVM_XhkRt-Uai8TQPGuqX4bgEVKDbO4oJLEHF_imhIzcwLlB.jpg?size=386x386&quality=95&crop=131,84,386,386&ava=1" />
        }
      >
        <Card.Meta
          title="Егор Зимичев"
          description="Староста"
          className="form_auth-card_desc"
        />
      </Card>
      <Card
        loading={isLoading}
        onClick={() => tryAuth("02")}
        className="form_auth-card"
        hoverable
        cover={
          <img src="https://sun7-9.userapi.com\/s\/v1\/ig2\/VjevKFMCEghSwX5dPZhdLYHRtMsF-vGoxlpo_FJuwjed153KQLKawSHCQAmtmRbBieCs78jUVOWqbkztS-yb-jTn.jpg?size=400x400&quality=95&crop=539,96,1365,1365&ava=1" />
        }
      >
        <Card.Meta
          title="Даниил Рябцев"
          description="Заместитель старосты"
          className="form_auth-card_desc"
        />
      </Card>

      <Modal
        title="Введите пароль"
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          maxLength={12}
          showCount
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Modal>
    </Form>
  );
};
