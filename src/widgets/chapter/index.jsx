import React from 'react';
import {Link} from "react-router-dom";
import "./styles.css"
import Icon from "../../shared/ui/icon";
import PublicStatus from "../../shared/ui/publicStatus";
import DateLabel from "../../shared/ui/dateLabel";

export default function Chapter(props) {

    return (
        <div>
            <Link to={`/${props.chapterId}/articles`} style={{textDecoration: 'none', color: 'inherit'}}>
                <div className="chapter hoverable">
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
                        <DateLabel updateDate={props.updateDate} colorType={"weak"}/>
                    </div>
                </div>
            </Link>
        </div>
    )
}
