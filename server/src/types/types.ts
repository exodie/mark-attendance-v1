export type DateDayProps = "Sun" | "Mon" | "Tue" | "Wen" | "Thi" | "Fri" | "Sat";

export type LessonsProps = {
    lessons: {
        title: string;
        start: string;
        end: string;
    }[][];
}
