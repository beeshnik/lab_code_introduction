import axios from "axios";

const url = "http://lab-code.com:62533"

export function getChapters() {
    const link = `${url}/wiki-service-admin/api/v1/sections/chapters?format=json`
    return axios.get(link)
}
