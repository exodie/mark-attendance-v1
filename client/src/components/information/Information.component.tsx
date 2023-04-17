import { FC, useState } from "react";

export const InformationLessons: FC = () => {
    const [currentLessons, setCurrentLessons] = useState<string>(); //"УТПО (лек) / 11:40 / 02-02-10"

    return (
        <section className="info_section">
            <span className="info_section-current">Текущая пара: {currentLessons || "Не найдено!"}</span>
        </section>
    )
}