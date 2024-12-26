
import {useQuery} from "@tanstack/react-query";
// import { getChapters } from "../api"
import { getChapters } from "../api/test";
import {useEffect} from "react";


export function useGetChapters() {
    const query = useQuery({
        queryKey: ["chapters"],
        queryFn: getChapters,
        // select: data => data.data,
    })

    useEffect(() => {
        console.log(query.data)
    }, [query.isSuccess, query.data]);

    useEffect(() => {
        if (query.isError) console.error(query.error)
    }, [query.isError])

    return query;
}
