import { ClockActionTypes, ClockTypes } from '../type/clock'

export const startClock = (payload:number):ClockTypes => {
    return { type: ClockActionTypes.START, payload }
}