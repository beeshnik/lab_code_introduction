
import {useMutation, useQuery} from "@tanstack/react-query";
import {
    getChapters,
    getArticles,
    postChapter,
    postSection,
    putSection,
    deleteSection,
    deleteChapter,
    putChapter, getArticle, postArticle
} from "../api"
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

export function useGetArticle(articleId) {
    const query = useQuery({
        queryKey: ["article", articleId],
        queryFn: () => getArticle(articleId),
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

export function useCreateSection() {
    const mutation = useMutation({
        mutationKey: ["post section"],
        mutationFn: async (section) => postSection(section),
    })
    return mutation.mutate
}

export function useUpdateSection() {
    const mutation = useMutation({
        mutationKey: ["put section"],
        mutationFn: async (sectionId, section) => putSection(sectionId, section),
    })
    return mutation.mutate
}

export function useDeleteSection() {
    const mutation = useMutation({
        mutationKey: ["delete section"],
        mutationFn: async (sectionId) => deleteSection(sectionId),
    })
    return mutation.mutate
}

export function useCreateChapter() {
    const mutation = useMutation({
        mutationKey: ["post chapter"],
        mutationFn: async (chapterId, chapterData) => postChapter(chapterId, chapterData),
    })
    return mutation.mutate
}

export function useUpdateChapter() {
    const mutation = useMutation({
        mutationKey: ["put chapter"],
        mutationFn: async (chapterId, chapterData) => putChapter(chapterId, chapterData),
    })
    return mutation.mutate
}

export function useDeleteChapter() {
    const mutation = useMutation({
        mutationKey: ["delete chapter"],
        mutationFn: async (chapterId) => deleteChapter(chapterId),
    })
    return mutation.mutate
}

export function useCreateArticle() {
    const mutation = useMutation({
        mutationKey: ["post article"],
        mutationFn: async (chapterId, article) => postArticle(chapterId, article),
    })
    return mutation.mutate
}