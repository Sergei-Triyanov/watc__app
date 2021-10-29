import React from "react";
import s from "./styles.module.sass";
import { IWatchDisplayItem } from "./type"

const WatchDisplayItem:React.FC<IWatchDisplayItem> = ({date, classes}) => {

    

    return(
        <div className={classes ? classes : s.item}>
            <p>
                {date}
            </p>
        </div>
    )
}

export default WatchDisplayItem;