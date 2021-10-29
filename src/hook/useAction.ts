import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as StopwatchActionCreator from "../store/action-creator/stopwatch"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
        ...StopwatchActionCreator,
    }, dispatch)
}