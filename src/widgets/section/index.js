import React from 'react';

export default function Section(props) {
    return (
        <div>
            {props.title}
            <br />
            {props.children}
        </div>
    )
}