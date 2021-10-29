import { combineReducers } from 'redux';
import { stopwatch } from './stopwatch';
import { clock } from './clock'
 
export const rootReducer = combineReducers({
    clock,
    stopwatch,
})

export type RootState = ReturnType<typeof rootReducer>