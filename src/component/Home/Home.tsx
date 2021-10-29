import React from 'react';
import { useCreateDate, useDateDaysString } from '../../hook/dateHook/date';

import s from './styles.module.sass'

const Home:React.FC = () => {

    const date = useCreateDate()
    const day = useDateDaysString(date.getDay())

    return(
        <div className={s.home}>
            <h2>To day</h2>
            <div className={s.display}>
                <div>
                    <p>{day}</p> 
                </div>
                <div>
                    <p>{date.getHours()}</p>
                </div>
                <div>
                    <p>{date.getMinutes()}</p>
                </div>
            </div>
        </div>    
    )
}

export default Home;