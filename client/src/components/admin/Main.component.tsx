// lib
import { FC, useEffect, useState } from "react";
import dayjs from "dayjs";

// styles
import { Typography, TimePicker, Button, message } from "antd";

// store
import { useStore } from "../../store/hooks/store.hook";

export const MainAdmin: FC = () => {
  const [time, setTime] = useState<TimePickerProps>();

  const { data } = useStore();

  // to TimePicker format param.
  const format = "HH:mm";

  useEffect(() => {
    return message.open({
      key: "info",
      type: "success",
      content: "Welcome to admin panel!",
    });
  });

  return (
    <section className="admin-main">
      <Typography.Title className="admin-main_title">
        Admin panel
      </Typography.Title>

      <div className="admin-main_choice">
        <span className="admin-main_choice-text">Disable client:</span>
        <TimePicker
          onChange={(value) =>
            setTime({ ...time, hour: value!.hour(), minute: value!.minute() })
          }
          defaultValue={dayjs("12:08", format)}
          format={format}
        />
        <Button
          className="admin-main_choice-btn"
          type="primary"
          onClick={() => {
            if (typeof time === "undefined") return;

            console.log(time);
          }}
        >
          Apply
        </Button>
      </div>

      
    </section>
  );
};
