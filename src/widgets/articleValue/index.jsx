import {Render} from "@measured/puck";
import {config} from "../puckEditor/model"
import {useEffect, useState} from "react";
import {useGetArticle} from "../../shared/hooks";
import Loading from "../loading";

export default function ArticleValue(props) {

    const [articleState, setArticleState] = useState(<Loading/>)

    const articleData = useGetArticle(props.id);

    useEffect(() => {
        if (articleData.data !== undefined) {
            setArticleState(<Render config={config} data={articleData?.data?.content}/>)
        }
    }, [articleData?.data]);

    return (
        <div>
            {articleState}
        </div>
    )
}

