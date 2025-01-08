import React from "react"
import {useGetChapters} from "../../shared/hooks";
import Section from "../../widgets/section";
import Chapter from "../../widgets/chapter";
import {Link} from "react-router-dom";
import "./styles.css"
import CustomButton from "../../shared/ui/Button";

export default function HomePage(){

    const query = useGetChapters()

    return (
        <div className="container">
            <div className="header">
                <div className="label">
                    <h2>Онлайн справка</h2>
                </div>
                <div className="navigation">
                    <Link to={`/add-section`}>
                        <CustomButton>Создать раздел</CustomButton>
                    </Link>
                    <Link to={`/add-chapter`}>
                        <CustomButton>Создать главу</CustomButton>
                    </Link>
                </div>
            </div>
            <div className="sections">
                {query.isLoading ?
                    "Загрузка" :
                    query.isError ? "Ошибка!" : query?.data?.sections.map((section, index) => (
                        <Section title={section.title}
                                 key={index}
                                 icon={section.icon}
                                 createDate={section.createDate}
                                 updateDate={section.updateDate}
                                 isEnabled={section.isEnabled}
                                 displayOrder={section.displayOrder}
                        >
                            {section.chapters.map((chapter, index) => (
                                <Chapter
                                    key={index}
                                    title={chapter.title}
                                    chapterId={chapter.id}
                                    icon={chapter.icon}
                                    isEnabled={chapter.isEnabled}
                                    createDate={chapter.createDate}
                                    updateDate={chapter.updateDate}
                                    sectionId={chapter.sectionId}
                                    displayOrder={chapter.displayOrder}
                                />
                            ))}
                        </Section>
                    ))}
            </div>
        </div>)
}