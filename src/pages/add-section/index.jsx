import React from 'react';
import {Link} from "react-router-dom";

export default function AddSectionPage(props) {
    return (
        <div>
            Добавить раздел
            <Link to={'/'}>
                <button>Назад</button>
            </Link>
        </div>
    )
}