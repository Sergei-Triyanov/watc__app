import React from 'react';
import { useTypedSelector } from '../../hook/useTypedSelector';

const Stopwatch:React.FC = () => {

    const { start, statrtTime, nowTime, pause } = useTypedSelector(state => state.stopwatch)

    if (start) {
        return <h2>hello world</h2>
    }

    return(
        <div>
            {statrtTime}
        </div>    
    )
}

export default Stopwatch;