import React from 'react';
import Icon from "../../shared/ui/icon";
import "./styles.css"
import {formatDistanceToNow} from "date-fns";
import {ru} from "date-fns/locale";
import PublicStatus from "../../shared/ui/publicStatus";

export default function Section(props) {

    const lastDate = new Date(props.updateDate)
    const date = formatDistanceToNow(lastDate, {locale: ru})

    return (
        <div className="section">
            <div className="section-container">
                <div className="section-name">
                    <div className="section-icon">
                        <Icon name={props.icon}/>
                    </div>
                    <div className="section-title">
                        {props.title}
                    </div>
                    <div className="section-status">
                        <PublicStatus isEnabled={props.isEnabled} />
                    </div>
                </div>
                <div className="section-history">
                    {date}
                </div>
            </div>
            <div className="chapters">
                {props.children}
            </div>
        </div>
    )
}