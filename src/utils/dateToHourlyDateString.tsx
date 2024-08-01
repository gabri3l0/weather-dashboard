import {timeStampToDate} from "./timeStampToDate.tsx";

export function dateToHourlyDateString(dt: number) {
    const date = timeStampToDate(dt)
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const hour = date.getHours()
    return `${day} ${month} ${hour}:00`;
}
