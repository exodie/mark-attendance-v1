import { FC, Key, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Form, Table, Button, App } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";

import { getStudentsList, setStudentAttendance } from "../../api/api";

export const GroupTable: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false),
    [students, setStudents] = useState<StudentListProps[]>([]),
    [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  /**
   * - message: string
   * - status: boolean
   */
  const { state } = useLocation();

  /** Use default antd notification */
  const { notification } = App.useApp();

  /**
   * Асинхронное получание данных с сервера (данные о студентах и парах)
   * @returns Promise<void>
   */
  const fetchingStudents = async (): Promise<void> => {
    setIsLoading(true);
    const response = await getStudentsList();
    setStudents(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchingStudents();
    return () =>
      notification.info({
        message: state.data.message,
        duration: 2,
      });
  }, []);

  /**
   * Инициализация колонок для послед. рендера в @components Table
   */
  const columnsTable: ColumnsTableProps[] = [
    { title: "Номер", dataIndex: "id", key: "id" },
    { title: "ФИО", dataIndex: "name", key: "name" },
  ];

  /**
   * Функция сразу дает в поле key параметр id (Без нее была ошибка по unique prop "key")
   * @returns map object from user
   */
  const dataModified = () => {
    return students.map((item) => ({
      ...item,
      key: item.id,
    }));
  };

  /**
   * Обработчик по выбору студентов
   * @param newSelectedRowKeys - Принимает текущее состояние выбранных ключей
   */
  const onSelectChange = (newSelectedRowKeys: Key[]): void =>
    setSelectedRowKeys(newSelectedRowKeys);

  /**
   * Для параметра rowSelection в @components Table
   */
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  /**
   * Обработчик отправки данных на сервер
   */
  const handleClickButton = async () => {
    await setStudentAttendance(selectedRowKeys as number[]).then((res) => {
      if (res.status === true) {
        notification.success({ message: res.message, duration: 2 });
        setSelectedRowKeys([]);
      } else {
        notification.error({
          message:
            "Упс, похоже ты никого не выбрал, попробуй снова или обратись к разработчику!",
          duration: 2,
        });
      }
    });
  };

  return (
    <Form className="form_students">
      <Table
        className="form_students-table"
        rowSelection={rowSelection}
        columns={columnsTable}
        dataSource={dataModified()}
        pagination={{ pageSize: students.length }}
      />

      <Button
        onClick={handleClickButton}
        type="primary"
        className="form_students-table_button"
        size="large"
      >
        Отправить <CloudUploadOutlined />
      </Button>
    </Form>
  );
};
