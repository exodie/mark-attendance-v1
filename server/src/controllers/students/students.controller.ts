import {Request, Response} from "express";

import axios from "axios";

import {allStudentsList} from "../../constants.js";
import {getCurrentDateNumber} from "../../tools/date.js";

export class StudentsController {
    public async studentsAuth(req: Request, res: Response) {
        try {
            const {login, password} = req.body;

            console.log(`Try authorization to: [${login}] [${password}]`);

            const date = new Date();
            const currentHours = date.getUTCHours() + 4;
            const currentMinutes = date.getUTCMinutes();
            const currentDay: number = date.getDay();
            const days: string[] = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
            const getDay: string = days[currentDay];

            switch (login) {
                case "01":
                    if (password === process.env.HEAD_PASS || password === "yAMVq~uJGodu") {
                        if (getDay === "Воскресенье" || getDay === "Суббота") {
                            return res.send({message: "Сегодня выходной день, иди отдыхай!", status: false});
                        }

                        return res.status(200).send({
                            message: "О привет, давно тебя не видел 😎?!",
                            status: true,
                        });
                    }

                    res.send({
                        message: "Упс, не удалось войти в аккаунт, свяжитесь с разработчиком!",
                        status: false,
                    });
                    break;

                case "02":
                    if (password === process.env.DEP_HEAD_PASS || password === "nZ6GybnkVxc$") {
                        if (getDay === "Воскресенье" || getDay === "Суббота") {
                            return res.send({message: "Сегодня выходной день, иди отдыхай!", status: false});
                        }

                        return res.status(200).send({
                            message: "Привет, а какая пара сейчас вообще идет 🤔?!",
                            status: true,
                        });
                    }

                    res.send({
                        message: "Упс, не удалось войти в аккаунт, свяжитесь с разработчиком!",
                        status: false,
                    });
                    break;

                case "000":
                    if (password === process.env.ADMIN_PASS || password === "367946") {
                        return res.status(200).send({
                            message: "Добро пожаловать в админ-панель 👨‍💻.",
                            status: true
                        });
                    }

                    res.send({
                        message: "Упс, не удалось войти в аккаунт, свяжитесь с разработчиком!",
                        status: false,
                    });

                    break;

                default:
                    break;
            }
        } catch (e) {
            console.log(e);
        }
    }

    public getAllStudetsList(req: Request, res: Response) {
        try {
            res.status(200).send(allStudentsList);
        } catch (e) {
            console.log(e);
        }
    }

    public async setSelectedStudents(req: Request, res: Response) {
        try {
            const lists: number[] = req.body;

            const values: { id: number, name: string, status: boolean }[] = [];

            if (lists.length > 0) {
                console.log(lists);

                allStudentsList.map((studValue) => {
                    lists.map((listValue) => {
                        if (studValue.id === listValue) {
                            values.push({
                                id: studValue.id,
                                name: studValue.name,
                                status: true
                            });
                        }
                    });
                });


                const numberInList = values.map((item) => item.id);
                const studentsName = values.map((item) => item.name);

                const date = new Date();

                const DateOptions = {
                    currentDay: date.getDay(),
                    currentDate: getCurrentDateNumber(date.getDate()),
                    currentMonth: getCurrentDateNumber(date.getMonth() + 1),
                    currentYear: date.getFullYear(),
                    currentHours: getCurrentDateNumber(date.getUTCHours() + 4),
                    currentMinutes: getCurrentDateNumber(date.getUTCMinutes()),
                }

                const currentTime = `${DateOptions.currentHours}:${DateOptions.currentMinutes}`;

                const days: string[] = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
                const getDay: string = days[DateOptions.currentDay];

                const msg = `Дата: ${DateOptions.currentDate}.${DateOptions.currentMonth}.${DateOptions.currentYear} - ${getDay} | Текущее время: ${currentTime} | Номера в списке: ${numberInList} | ФИО: ${studentsName}`;

                await axios.post(`https://api.vk.com/method/messages.send?user_id=${626737025}&random_id=0&message=${msg}&v=5.131&access_token=${process.env.VK_SECRET_ACCESS_TOKEN}`);

                return res.send({message: "Данные успешно отправлены, скоро дойдут до получателя!", status: true});
            } else {
                return res.send({
                    message: "Упс, данные не отправлены, попробуй снова или обратись к разработчику!",
                    status: false
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
}