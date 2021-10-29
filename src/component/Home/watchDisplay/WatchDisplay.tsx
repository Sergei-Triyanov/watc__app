import React from "react";
import { useCreateDate, useDateFromatCheck, useDateDaysString } from "../../../hook/dateHook/date";
import WatchDisplayItem from "./item/WatchDisplayItem";
import s from './styles.module.sass'

const WatchDisplay:React.FC = () => {

    const date = useCreateDate()
    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    const hours = date.getHours()

    return(
        <div className={s.display}>
            <WatchDisplayItem  date={useDateFromatCheck(hours)}/>
            <WatchDisplayItem  date={useDateFromatCheck(minutes)}/>
            <WatchDisplayItem  date={useDateFromatCheck(seconds)}/>
        </div>
    )
} 

export default WatchDisplay;