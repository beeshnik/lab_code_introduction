import axios from "axios";

const url = "http://localhost:80"
// const url = "http://lab-code.com:62533"

export function getChapters() {
    const link = `${url}/wiki-service-admin/api/v1/sections/chapters`
    return axios.get(link)
}

export function getArticles(chapterId){
    const link = `${url}/wiki-service-admin/api/v1/sections/chapters/${chapterId}/articles`
    return axios.get(link)
}

export function getArticle(articleId){
    const link = `${url}/wiki-service-admin/api/v1/sections/chapters/articles/${articleId}`
    return axios.get(link)
}

export async function postSection(section){
    const link = `${url}/wiki-service-admin/api/v1/sections/section`
    return await axios.post(link, JSON.stringify(section))
}

export async function postChapter(sectionId, chapter){
    const link = `${url}/wiki-service-admin/api/v1/sections/${sectionId}/chapters/chapter`
    return await axios.post(link, JSON.stringify(chapter))
}

export async function postArticle(chapterId, article){
    const link = `${url}/wiki-service-admin/api/v1/sections/chapters/${chapterId}/articles/article`
    return await axios.post(link, JSON.stringify(article))
}

export async function putSection(sectionId, section){
    const link = `${url}/wiki-service-admin/api/v1/sections/${sectionId}`
    return await axios.put(link, JSON.stringify(section))
}

export async function putChapter(chapterId, chapter){
    const link = `${url}/wiki-service-admin/api/v1/sections/chapters/${chapterId}`
    return await axios.put(link, JSON.stringify(chapter))
}

export async function deleteSection(sectionId){
    const link = `${url}/wiki-service-admin/api/v1/sections/${sectionId}/delete`
    return await axios.delete(link)
}

export async function deleteChapter(chapterId){
    const link = `${url}/wiki-service-admin/api/v1/sections/chapters/${chapterId}/delete`
    return await axios.delete(link)
}