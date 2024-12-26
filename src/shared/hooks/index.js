
import {useQuery} from "@tanstack/react-query";
// import { getChapters, getArticles } from "../api"
import {getArticles, getChapters} from "../api/test";
import {useEffect} from "react";


export function useGetChapters() {
    const query = useQuery({
        queryKey: ["chapters"],
        queryFn: getChapters,
        // select: data => data.data,
    })

    useEffect(() => {
        console.log("Данные обновлены")
    }, [query.isSuccess, query.data]);

    useEffect(() => {
        if (query.isError) console.error(query.error)
    }, [query.error, query.isError])

    return query;
}

export function useGetArticles(chapterId) {
    const query = useQuery({
        queryKey: ["articles"],
        queryFn: (chapterId) => getArticles(chapterId),
        // select: data => data.data,
    })

    useEffect(() => {
        console.log("Данные обновлены")
    }, [query.isSuccess, query.data]);

    useEffect(() => {
        if (query.isError) console.error(query.error)
    }, [query.error, query.isError])

    return query;
}
