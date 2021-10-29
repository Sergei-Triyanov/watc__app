import React from 'react';
import { useCreateDate, useDateDaysString } from '../../hook/dateHook/date';
import { useActions } from '../../hook/useAction';

import s from './styles.module.sass'
import WatchDisplay from './watchDisplay/WatchDisplay';

const Home:React.FC = () => {
    const { startClock } = useActions()
    const date = useCreateDate()

    React.useEffect(()=>{
        setTimeout(()=>{
            startClock(date.getTime())
        }, 1000)
    })

    const day = useDateDaysString(date.getDay())

    return(
        <div className={s.home}>
            <h2>To day</h2>
            <p>{day}</p>
            <WatchDisplay/>
        </div>    
    )
}

export default Home;