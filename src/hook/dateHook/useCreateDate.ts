export function useCreateDate():Date;
export function useCreateDate(day:number):Date;
export function useCreateDate(day:string):Date;

export function useCreateDate (day?:(number|string)) {
    if (day) {
        return new Date(day)
    }
    return new Date()
}