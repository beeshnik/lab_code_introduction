import React from "react"
import {useGetChapters} from "../../shared/hooks";
import Section from "../../widgets/section";
import Chapter from "../../widgets/chapter";
import {Link} from "react-router-dom";
import "./styles.css"
import CustomButton from "../../shared/ui/button";
import {checkNameLength} from "./model";
import Loading from "../../widgets/loading";

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
                    <Loading/> :
                    query.isError ? "Ошибка!" : query?.data?.sections.map((section, index) => (
                        <Section
                            sectionId={section.id}
                            title={section.title}
                            viewTitle={checkNameLength(section.title)}
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
                                    viewTitle={checkNameLength(chapter.title)}
                                    chapterId={chapter.id}
                                    sectionTitle={section.title}
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