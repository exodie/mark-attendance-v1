//import {allLessonsDay, lessonsTime} from "../constants.js";

//import {getItemFromObj} from "../utils.js";

export const getCurrentDateNumber = (value: number): string => value < 10 ? `0${value}` : `${value}`;

//export const checkingTimeLessons = (date: Date) => {
//    // Получение текущего состояния времени
//    const currentHours = date.getUTCHours() + 4,
//        currentMinutes = date.getUTCMinutes(),
//        currentDay: number = date.getDay(),
//        days: string[] = ["Sun", "Mon", "Tue", "Wen", "Thi", "Fri", "Sat"],
//        getDay: string = days[currentDay];
//
//    const objLessonsDay = getItemFromObj(allLessonsDay);
//    const objLessonsStart = getItemFromObj(lessonsTime); // start
//    
//    console.log(objLessonsDay);
//    console.log(objLessonsStart);
//
//    switch (getDay) {
//        case "Sun":
//            console.log(false);
//            break;
//
//        case "Mon":
//            console.log(true);
//            break;
//
//        case "Tue":
//            console.log(true);
//            break;
//
//        case "Wen":
//            console.log(true);
//            break;
//
//        case "Thi":
//            console.log(true);
//            break;
//
//        case "Fri":
//            console.log(true);
//            break;
//
//        case "Sat":
//            console.log(false);
//            break;
//
//        default:
//            break;
//    }
//}