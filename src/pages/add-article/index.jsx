import React from 'react';
import PuckEditor from "../../widgets/puckEditor";
import "@measured/puck/puck.css";

export default function AddArticlePage(props) {
    return (
        <div className="article-container">
            <PuckEditor/>
        </div>
    )
}
