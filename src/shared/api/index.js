import axios from "axios";

// const url = "http://localhost:80"
const url = "http://lab-code.com:62533"

const api = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
    }
})

export function getChapters() {
    return api.get("/wiki-service-admin/api/v1/sections/chapters")
}

export function getArticles(chapterId){
    return api.get(`/wiki-service-admin/api/v1/sections/chapters/${chapterId}/articles`)
}

export function getArticle(articleId){
    return api.get(`/wiki-service-admin/api/v1/sections/chapters/articles/${articleId}`)
}

export async function postSection(data){
    return api.post(`/wiki-service-admin/api/v1/sections/section`,
        JSON.stringify(data.section))
}

export async function postChapter(data){
    return api.post(`/wiki-service-admin/api/v1/sections/${data.sectionId}/chapters/chapter`,
        JSON.stringify(data.chapter))
}

export async function postArticle(data){
    return api.post(`/wiki-service-admin/api/v1/sections/chapters/${data.chapterId}/articles/article`,
        JSON.stringify(data.article))
}

export async function putSection(data){
    return api.put(`/wiki-service-admin/api/v1/sections/${data.sectionId}`,
        JSON.stringify(data.section))
}

export async function putChapter(data){
    return api.put(`/wiki-service-admin/api/v1/sections/chapters/${data.chapterId}`,
        JSON.stringify(data.chapter))
}

export async function deleteSection(data){
    return await api.delete(`/wiki-service-admin/api/v1/sections/${data.sectionId}/delete`)
}

export async function deleteChapter(data){
    return await api.delete(`/wiki-service-admin/api/v1/sections/chapters/${data.chapterId}/delete`)
}