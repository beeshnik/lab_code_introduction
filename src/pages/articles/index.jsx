import React from 'react';
import {useGetArticles} from "../../shared/hooks";
import {Link, useParams} from "react-router-dom";
import Article from "../../widgets/article";

export default function ArticlesPage(props) {
    const params = useParams();

    const articles = useGetArticles(params.chapterId);

    return (
        <div>
            {`Справки для ${params.chapterId}`}
            {articles.isLoading ? "Загрузка..."
                :
                articles.isError ? "Ошибка!" : articles?.data?.articles.map((article, index) => (
                    <Article title={article.title} key={index} id={article.id} />
                ))}
            <Link to={'/'}>
                <button>Назад</button>
            </Link>
            <Link to={`/${params.chapterId}/add-article`}>
                <button>Создать справку</button>
            </Link>
        </div>
    )
}
