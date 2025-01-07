import React from 'react';
import {Link, useParams} from "react-router-dom";
import ArticleConstructor from "../article-constructor";

export default function AddArticlePage(props) {
    const params = useParams();

    return (
        <div>
            <Link to={`/${params.chapterId}/articles`}>
                <button>Назад</button>
            </Link>
            <ArticleConstructor/>
        </div>
    )
}
