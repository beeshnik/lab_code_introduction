import React from 'react';
import {Link} from "react-router-dom";
import "./styles.css"
import Icon from "../../shared/ui/icon";
import { format, compareAsc } from "date-fns";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale"
import PublicStatus from "../../shared/ui/publicStatus";

export default function Chapter(props) {

    const lastDate = new Date(props.updateDate)
    const date = formatDistanceToNow(lastDate, {locale: ru})

    return (
        <div>
            <Link to={`/${props.chapterId}/articles`} style={{textDecoration: 'none', color: 'inherit'}}>
                <div className="chapter">
                    <div className="chapter-name">
                        <div className="chapter-icon">
                            <Icon name={props.icon} mode={"get"}/>
                        </div>
                        <div className="chapter-title">
                            {props.title}
                        </div>
                        <div className="chapter-status">
                            <PublicStatus isEnabled={props.isEnabled}/>
                        </div>
                    </div>
                    <div className="chapter-history">
                        {date}
                    </div>
                </div>
            </Link>
        </div>

    )
}
