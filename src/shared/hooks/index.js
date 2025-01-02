
import {useMutation, useQuery} from "@tanstack/react-query";
import { getChapters, getArticles } from "../api"
// import {getArticles, getChapters} from "../api/test";
import {useEffect} from "react";


export function useGetChapters() {
    const query = useQuery({
        queryKey: ["chapters"],
        queryFn: getChapters,
        select: data => data.data,
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
        queryKey: ["articles", chapterId],
        queryFn: () => getArticles(chapterId),
        select: data => data.data,
    })

    useEffect(() => {
        console.log("Данные обновлены")
    }, [query.isSuccess, query.data]);

    useEffect(() => {
        if (query.isError) console.error(query.error)
    }, [query.error, query.isError])

    return query;
}

export function useCreateChapter(sectionId, chapter) {
    const mutation = useMutation({

    })

    return mutation
}

export function useUpdateChapter(chapterId, chapter) {
    const mutation = useMutation({

    })
}

export function useDeleteChapter(chapterId) {

}

export function useCreateSection(section) {
    const mutation = useMutation({

    })
    return mutation
}

export function useUpdateSection(sectionId, section) {
    const mutation = useMutation({

    })
    return mutation
}

export function useDeleteSection(sectionId) {
    const mutation = useMutation({

    })
}
