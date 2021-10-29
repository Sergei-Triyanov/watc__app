import { combineReducers } from 'redux';
import { stopwatch } from './stopwatch';

export const rootReducer = combineReducers({
    stopwatch,
})

export type RootState = ReturnType<typeof rootReducer>