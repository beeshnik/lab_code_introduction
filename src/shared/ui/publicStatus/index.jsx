import React from 'react';
import "./styles.css"

export default function PublicStatus(props) {
    return (
        <div className={`public-status-${props.isEnabled === true}`}>
            {props.isEnabled ? "Опубликовано" : "Черновик"}
        </div>
    )
}

