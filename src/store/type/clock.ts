export interface IStateDefaultClock {
    startDate: number,
}

export enum ClockActionTypes {
    START = 'START'
}

interface IStartClock {
    type: ClockActionTypes.START,
    payload: number,
}

export type ClockTypes = IStartClock;
