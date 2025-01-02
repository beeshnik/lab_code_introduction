import React from 'react';

export default function PublicStatus(props) {
    return (
        <div>
            {props.isEnabled ? "Опубликовано" : "Черновик"}
        </div>
    )
}

