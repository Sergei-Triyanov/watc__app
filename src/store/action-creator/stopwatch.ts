import { StopwatchType } from '../type/stopwatch'

export const startStopwatch = (payload:boolean) => {
    return { type: StopwatchType.START, payload }
}

export const pauseStopwatch = (payload:boolean) => {
    return { type:StopwatchType.PAUSE, payload }
}

export const startTimeStopwatch = (payload:number) => {
    return { type:StopwatchType.START_TIME, payload }
}

export const nowTimeStopwatch = (payload:number) => {
    return { type:StopwatchType.NOW_TIME, payload }
}

export const intervalStopwatch = (payload:number) => {
    return { type:StopwatchType.INTERVAL, payload }
}