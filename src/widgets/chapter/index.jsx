import React from 'react';
import {Link} from "react-router-dom";
import "./styles.css"
import Icon from "../../shared/ui/icon";
import { format, compareAsc } from "date-fns";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale"

export default function Chapter(props) {

    const lastDate = new Date(props.updateDate)
    const date = formatDistanceToNow(lastDate, {locale: ru})

    return (
        <Link to={`/${props.chapterId}/articles`} style={{textDecoration: 'none'}}>
            <div className="chapter">
                <div className="chapter-name">
                    <div className="chapter-icon">
                        <Icon name={props.icon} mode={"get"}/>
                    </div>
                    <div className="chapter-title">
                        {props.title}
                    </div>
                    <div className="chapter-status">
                        {props.isEnabled ? "Опубликовано" : "Черновик"}
                    </div>
                </div>
                <div className="chapter-history">
                    {date}
                </div>
            </div>
        </Link>
    )
}
