import { Request, Response } from "express";
import { allLessonsDay, lessonsTime } from "../../constants.js";

import type { DateDayProps } from "../../types/types.js";
import { getItemFromObj } from "../../utils.js";

export class LessonsController {
    public getCurrentLessons(dayNumber: number, type?: "title" | "time"): string | undefined {
        try {
            switch (type) {
                case "title":
                    const lessonsTitle = new Set<string>();

                    lessonsTitle.add(allLessonsDay.map(item =>
                        item.lessons[dayNumber].map(item => item.title)).toString()
                    )

                    return lessonsTitle.values().next().value;

                case "time":
                    const lessonsTime = new Set<string>();

                    lessonsTime.add(
                        allLessonsDay.map(item =>
                            item.lessons[dayNumber].map(time => [time.start, time.end])).toString()
                    )

                    return lessonsTime.values().next().value;

                default: break;
            }

            const lessonsTitle = new Set<string>();

            lessonsTitle.add(allLessonsDay.map(item =>
                item.lessons[dayNumber].map(item => item.title)).toString()
            )

            return lessonsTitle.values().next().value;
        } catch (e) {
            console.log(e);
        }
    }

    public async getAllLessons(req: Request, res: Response) {
        try {
            const date = new Date();
            const currentDay = date.getDay();
            const days: DateDayProps[] = ["Sun", "Mon", "Tue", "Wen", "Thi", "Fri", "Sat"];
            const getDay = days[currentDay];

            const objLessonsDay = getItemFromObj(allLessonsDay);
            const objLessonsStart = getItemFromObj(lessonsTime); // start
            const objLessonsEnd = getItemFromObj(lessonsTime); // end

            console.log(`LessonsDay: ${objLessonsDay} LessonsStart: ${objLessonsStart} LessonsEnd: ${objLessonsEnd}`);

            const currentLessons = objLessonsDay[0],
                currentLessonsStart = currentLessons.physical_culture?.start,
                currentLessonsEnd = currentLessons.physical_culture?.end,
                currentLessonsStartArray = [
                    currentLessonsStart?.split(':')[0],
                    currentLessonsStart?.split(':')[1]
                ],
                currentLessonsEndArray = [
                    currentLessonsEnd?.split(':')[0],
                    currentLessonsEnd?.split(':')[1]
                ];

            console.log(`
                Current lessons: ${currentLessons.physical_culture?.start, currentLessons.physical_culture?.end}
                Current lessons start: ${currentLessonsStart}
                Current lessons end: ${currentLessonsEnd}
                Current lessons start Arr: ${currentLessonsStartArray}
                `);

            const currentTime = date.toTimeString();
            const currentHours = currentTime.split(' ')[0].split(':')[0];
            const currentMinutes = currentTime.split(' ')[0].split(':')[1];
            console.log(`Current server time: ${currentHours}:${currentMinutes}`);

            // check false hours
            if (Number(currentHours) < Number(currentLessonsStartArray[0]) || Number(currentHours) > Number(currentLessonsEndArray[0]))
                return res.send({ message: "Активной пары - не найдено", status: false });

            switch (getDay) {
                case "Sun":
                    return res.send({ message: "Сегодня выходной, отдыхай!", status: false });

                case "Mon":
                    if (Number(currentHours) >= Number(currentLessonsStartArray[0])
                        && Number(currentMinutes) >= Number(currentLessonsStartArray[1])
                        && Number(currentHours) <= Number(currentLessonsEndArray[0])
                        && Number(currentMinutes) <= Number(currentLessonsEndArray[1])) {
                        if (Number(currentHours) >= Number(objLessonsStart[0])) {
                            return res.send({ message: currentLessons });
                        }
                    }

                case "Tue":

                case "Wen":


                case "Thi":


                case "Fri":


                case "Sat":
                    return res.send({ message: "Сегодня выходной, отдыхай!", status: false });
            }

            // res.send(`Now: ${days[currentDay]};`);
        } catch (e) {
            console.log(e);
        }
    }
}