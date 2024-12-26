import React from 'react';
import {Link} from "react-router-dom";

export default function Chapter(props) {
    return (
        <div>
            <Link to={`/${props.chapterId}/articles`}>
                {props.title}
                <br/>
            </Link>
        </div>
    )
}
