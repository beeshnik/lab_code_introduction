import React from "react"
import {useGetChapters} from "../../shared/hooks";
import Section from "../../widgets/section";
import Chapter from "../../widgets/chapter";

export default function HomePage(){

    const query = useGetChapters()

    return (
        <div>
            {query.isLoading ?
                "Загрузка" :
                query.isError ? "Ошибка!" : query?.data?.sections.map((section, index) => (
                    <Section title={section.title} key={index}>
                        {section.chapters.map((chapter, index) => (
                            <Chapter key={index} title={chapter.title}/>
                        ))}
                    </Section>
                ))}
        </div>)
}