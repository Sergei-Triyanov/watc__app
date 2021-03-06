import { IStateDefaultStopwatch, StopwatchType, ActionTypeStopwatch } from '../type/stopwatch'

const stateDefaulStopwatch:IStateDefaultStopwatch = {
    start: false,
    pause: false,
    startTime: 0,
    nowTime: 0,
    interval: [],
}

export const stopwatch = (state:IStateDefaultStopwatch = stateDefaulStopwatch, action:ActionTypeStopwatch) => {
    switch (action.type) {
        case StopwatchType.START:
            return { state: state, start: action.payload }
        case StopwatchType.START_TIME:
            return { ...state, startTime: action.payload } 
        case StopwatchType.NOW_TIME:
            return { ...state, nowTime: action.payload, }
        case StopwatchType.PAUSE:
            return { ...state, pause: action.payload, }
        case StopwatchType.INTERVAL:
            return { ...state, interval: [ ...state.interval, action.payload ]}
        default:
            return state;
    }
}