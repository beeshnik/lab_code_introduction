import React from 'react';
import {useGetArticles} from "../../shared/hooks";
import {Link, useParams} from "react-router-dom";
import Article from "../../widgets/article";
import ArticleValue from "../../widgets/articleValue";
import "./styles.css"
import CustomButton from "../../shared/ui/button";
import DateLabel from "../../shared/ui/dateLabel";
import EmptyDirectory from "../../shared/ui/emptyDirectory";

export default function ArticlesPage(props) {
    const params = useParams();

    const articles = useGetArticles(params.chapterId);

    return (
        <div>
            <div className="articles-header">
                <Link to={'/'}>
                    <CustomButton variant={"secondary"}>Назад</CustomButton>
                </Link>
                <Link to={`/${params.chapterId}/add-article`}>
                    <CustomButton>Создать справку</CustomButton>
                </Link>
            </div>
            <div className={"articles"}>
                {articles.isLoading ? "Загрузка..."
                    :
                    articles.isError ? "Ошибка!"
                        :
                        articles?.data?.articles.length > 0 ? articles?.data?.articles.map((article, index) => (
                            <Article title={article.title} key={index} isEnabled={article.isEnabled} updateDate={article.updateDate}>
                                <ArticleValue id={article.id} chapterId={params.chapterId}/>
                            </Article>
                            ))
                            :
                            <EmptyDirectory />

                }
            </div>
        </div>
    )
}
