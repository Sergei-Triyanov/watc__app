import React from "react";
import { IWatchDisplayItem } from "./type"

const WatchDisplayItem:React.FC<IWatchDisplayItem> = ({date, classes}) => {
    return(
        <div className={classes ? classes : ''}>
            <p>
                {date}
            </p>
        </div>
    )
}