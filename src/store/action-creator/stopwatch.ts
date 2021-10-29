import { StopwatchType, ActionTypeStopwatch } from '../type/stopwatch'

export const startStopwatch = (payload:boolean):ActionTypeStopwatch => {
    return { type: StopwatchType.START, payload }
}

export const pauseStopwatch = (payload:boolean):ActionTypeStopwatch => {
    return { type:StopwatchType.PAUSE, payload }
}

export const startTimeStopwatch = (payload:number):ActionTypeStopwatch => {
    return { type:StopwatchType.START_TIME, payload }
}

export const nowTimeStopwatch = (payload:number):ActionTypeStopwatch => {
    return { type:StopwatchType.NOW_TIME, payload }
}

export const intervalStopwatch = (payload:number):ActionTypeStopwatch => {
    return { type:StopwatchType.INTERVAL, payload }
}