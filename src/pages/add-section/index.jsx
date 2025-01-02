import React from 'react';
import {Link} from "react-router-dom";
import "./styles.css"

export default function AddSectionPage(props) {
    return (
        <div>
            <Link to={'/'}>
                Онлайн справки
            </Link>
            <h1>Новый раздел</h1>
            <div className="add-section">

            </div>
        </div>
    )
}