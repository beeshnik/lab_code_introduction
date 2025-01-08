import React from 'react';
import Icon from "../../shared/ui/icon";
import "./styles.css"
import PublicStatus from "../../shared/ui/publicStatus";
import DateLabel from "../../shared/ui/dateLabel";

export default function Section(props) {

    return (
        <div className="section">
            <div className="section-container">
                <div className="section-name">
                    <div className="section-icon">
                        <Icon name={props.icon} mode={"get"}/>
                    </div>
                    <div className="section-title">
                        {props.title}
                    </div>
                    <div className="section-status">
                        <PublicStatus isEnabled={props.isEnabled}/>
                    </div>
                </div>
                <div className="section-history">
                    <DateLabel updateDate={props.updateDate} colorType={"weak"}/>
                </div>
            </div>
            <div className="chapters">
                {props.children}
            </div>
        </div>
    )
}