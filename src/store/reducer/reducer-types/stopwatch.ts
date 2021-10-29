export interface Istate {
    start: boolean,
    pause: boolean,
    startTime: number,
    nowTime: number,
    interval: number[],
}

export enum StopwatchType {
    START = 'START',
    START_TIME = 'START_TIME',
    NOW_TIME = 'NOW_TIME',
    PAUSE = 'PAUSE',
    INTERVAL = 'INTERVAL'
}

interface ISatrtStopwatch {
    type: StopwatchType.START,
    payload: boolean,
}

interface IPauseStopwatch {
    type: StopwatchType.PAUSE,
    payload: boolean,
}

interface IStartTime {
    type: StopwatchType.START_TIME,
    payload: number,
}

interface INowTime {
    type: StopwatchType.NOW_TIME,
    payload: number,
}

interface IIntervalStopwatch {
    type: StopwatchType.INTERVAL,
    payload: number
}

export type ActionType = ISatrtStopwatch | IPauseStopwatch | IStartTime | INowTime | IIntervalStopwatch