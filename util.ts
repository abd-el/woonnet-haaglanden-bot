export function differenceInMinutes(date: Date, date2: Date){
    return Math.abs(Math.floor((date.getTime() - date2.getTime()) / 1000 / 60));
}