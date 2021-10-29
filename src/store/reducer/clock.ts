import { IStateDefaultClock, ClockActionTypes, ClockTypes } from '../type/clock'

const stateDefaultClock:IStateDefaultClock = {
    startDate: 0
}

export const clock = (state:IStateDefaultClock = stateDefaultClock, action:ClockTypes) => {
    switch (action.type) {
        case ClockActionTypes.START:
            return {start: action.payload}
        default:
            return state;
    }
}
