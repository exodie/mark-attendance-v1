export const getCurrentDateNumber = (value: number | undefined) => {
    if (typeof value !== "undefined") return value < 10 ? `0${value}` : `${value}`;
}