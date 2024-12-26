
const chapters = {
    "sections": [
        {
            "id": "77a4d8ec-9444-43a9-ab08-cf4190aae754",
            "icon": "FaBell",
            "title": "Раздел 1",
            "displayOrder": 0,
            "isEnabled": false,
            "createDate": "2024-11-21T05:43:14.573402Z",
            "updateDate": "2024-11-21T09:55:57.351453Z",
            "chapters": [
                {
                    "id": "e32330b5-8d61-4379-9328-ca301e81721a",
                    "icon": "FaAndroid",
                    "title": "Глава 11",
                    "displayOrder": 0,
                    "isEnabled": true,
                    "createDate": "2024-11-21T05:47:20.542751Z",
                    "updateDate": "2024-11-25T05:42:36.624366Z",
                    "sectionId": "77a4d8ec-9444-43a9-ab08-cf4190aae754"
                },
                {
                    "id": "cbad7ff2-c991-4e97-8ea9-3471dd55b0d9",
                    "icon": "FaCar",
                    "title": "Глава 2",
                    "displayOrder": 3,
                    "isEnabled": true,
                    "createDate": "2024-11-21T05:47:27.123271Z",
                    "updateDate": "2024-11-21T05:47:27.132879Z",
                    "sectionId": "77a4d8ec-9444-43a9-ab08-cf4190aae754"
                },
                {
                    "id": "5ae2a079-a08f-473a-85f2-d50041a070d4",
                    "icon": "FaApple",
                    "title": "Глава 10",
                    "displayOrder": 2,
                    "isEnabled": true,
                    "createDate": "2024-11-21T07:10:37.351539Z",
                    "updateDate": "2024-11-21T07:10:37.370933Z",
                    "sectionId": "77a4d8ec-9444-43a9-ab08-cf4190aae754"
                }
            ]
        },
        {
            "id": "6877d40e-7fe2-409d-beb6-49435a1b44fd",
            "icon": "FaFile",
            "title": "Раздел 2",
            "displayOrder": 3,
            "isEnabled": true,
            "createDate": "2024-11-25T05:35:51.872552Z",
            "updateDate": "2024-11-25T05:35:51.872610Z",
            "chapters": []
        },
        {
            "id": "05f266b3-d5bf-4dc7-ae3b-bfb49ef1e18d",
            "icon": "FaFile",
            "title": "Раздел 3",
            "displayOrder": 3,
            "isEnabled": true,
            "createDate": "2024-11-28T05:37:48.099877Z",
            "updateDate": "2024-12-01T09:53:19.946822Z",
            "chapters": []
        },
        {
            "id": "4b577644-7efb-4414-ae3c-d541f31853fa",
            "icon": "FaHome",
            "title": "Раздел 4",
            "displayOrder": 3,
            "isEnabled": true,
            "createDate": "2024-12-01T09:54:40.466752Z",
            "updateDate": "2024-12-02T06:01:28.682194Z",
            "chapters": []
        }
    ]
}

const articles = {
    "articles": [
        {
            "id": "ca504fb8-f1a9-4f3c-b79f-057d8e09e238",
            "title": "Text",
            "displayOrder": 1,
            "isEnabled": true,
            "createDate": "2024-10-25T05:25:40.434524Z",
            "updateDate": "2024-10-25T05:25:40.434567Z"
        },
        {
            "id": "e393a334-d0d7-4570-aee0-1646f8529529",
            "title": "Text",
            "displayOrder": 1,
            "isEnabled": true,
            "createDate": "2024-10-25T05:29:07.945516Z",
            "updateDate": "2024-10-25T05:29:07.945561Z"
        }
    ]
}
const article = {
    "title": "Text",
    "displayOrder": 1,
    "isEnabled": true,
    "createDate": "2024-10-25T05:57:40.600184Z",
    "updateDate": "2024-10-25T05:57:40.600238Z",
    "content": {
        "title": "TEST"
    },
    "contentCreateDate": "2024-10-25T05:57:40.615254Z",
    "contentUpdateDate": "2024-10-25T05:57:40.615296Z"
}

const inetSpeed = 2000

export function getChapters(){
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(chapters);
        }, inetSpeed)
    })
}

export function getArticles(chapterId){
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(articles);
        }, inetSpeed)
    })
}

export function getArticle(articleId){
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(article);
        }, inetSpeed)
    })
}

