import React from 'react';
import {Link} from "react-router-dom";

export default function AddChapterPage(props) {
    return (
        <div>
            <Link to={'/'}>
                <button>Назад</button>
            </Link>
            Добавить главу
        </div>
    )
}