import {Render} from "@measured/puck";
import {config} from "../puckEditor/model"
import {useEffect, useState} from "react";
import {defaultValue} from "./model";
import {useGetArticle} from "../../shared/hooks";

export default function ArticleValue(props) {

    const [articleState, setArticleState] = useState(defaultValue)

    const articleData = useGetArticle(props.id);

    useEffect(() => {
        if (articleData.data !== undefined) {
            setArticleState(articleData?.data?.content)
        }
    }, [articleData?.data]);


    return (
        <Render config={config} data={articleState} />
    )
}

