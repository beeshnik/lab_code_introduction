import axios from "axios";

const url = "http://localhost:80"
// const url = "http://lab-code.com:62533"

export function getChapters() {
    const link = `${url}/wiki-service-admin/api/v1/sections/chapters`
    return axios.get(link)
}

export function getArticles(chapterId){
    console.log(chapterId)
    const link = `${url}/wiki-service-admin/api/v1/sections/chapters/${chapterId}/articles`
    return axios.get(link)
}

export function postChapter(chapter){
    return new Promise(resolve => {

    })
}