import React from 'react';
import {Link, useParams} from "react-router-dom";

export default function AddArticlePage(props) {
    const params = useParams();

    return (
        <Link to={`/${params.chapterId}/articles`}>
            <button>Назад</button>
        </Link>
    )
}
