import React from "react"
import {useGetChapters} from "../../shared/hooks";
import Section from "../../widgets/section";
import Chapter from "../../widgets/chapter";
import {Link} from "react-router-dom"

export default function HomePage(){

    const query = useGetChapters()

    return (
        <div>
            {query.isLoading ?
                "Загрузка" :
                query.isError ? "Ошибка!" : query?.data?.sections.map((section, index) => (
                    <Section title={section.title} key={index}>
                        {section.chapters.map((chapter, index) => (
                            <Chapter key={index} title={chapter.title} chapterId={chapter.id}/>
                        ))}
                    </Section>
                ))}
            <Link to={"/add-section"}>
                <button>Создать раздел</button>
            </Link>
            <Link to={"/add-chapter"}>
                <button>Создать главу</button>
            </Link>
            <button>Редактировать</button>
        </div>)
}