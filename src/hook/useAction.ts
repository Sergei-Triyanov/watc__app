import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as StopwatchActionCreator from "../store/action-creator/stopwatch"
import * as ClockActionCreator from "../store/action-creator/clock"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
        ...StopwatchActionCreator,
        ...ClockActionCreator,
    }, dispatch)
}