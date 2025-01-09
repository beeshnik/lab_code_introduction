import React, {useEffect} from 'react';
import {Link, useNavigate, useParams, useSearchParams} from "react-router-dom";
import NameInput from "../../shared/ui/nameInput";
import IconSelect from "../../widgets/iconSelect";
import DraftStatus from "../../widgets/draftStatus";
import {FormProvider, useForm} from "react-hook-form";
import SectionList from "../../widgets/sectionList";
import { useUpdateChapter} from "../../shared/hooks";
import "./styles.css"
import CustomButton from "../../shared/ui/button";

export default function ChangeChapterPage(props) {

    const updateChapter = useUpdateChapter();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const params = useParams();

    const methods = useForm({
        defaultValues: {
            isEnabled: Boolean(searchParams.get("isEnabled")),
            title: searchParams.get("title"),
            icon: searchParams.get("icon"),
            sectionId: searchParams.get("sectionId"),
        }
    })

    useEffect(() => {
        const error = updateChapter.isError
        if (error) {
            methods.setError("title")
            methods.setError("icon")
            methods.setError("sectionId")
            alert("Не удалось редактировать главу")
        }
    }, [updateChapter.isError]);

    useEffect(() => {
        if (updateChapter.isSuccess) {
            navigate("/")
        }
    }, [updateChapter.isSuccess]);

    const onSubmit = (form) => {
        updateChapter.mutate({
            chapterId: params.chapterId,
            chapter: {
                ...form,
                displayOrder: "2",
            }
        });
    }

    return (
        <div>
            <Link to={'/'}>
                <CustomButton variant={"secondary"}>Назад</CustomButton>
            </Link>
            <h1>Редактирование главы</h1>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className={"add-section"}>
                        <div className="create-names">
                            <SectionList name={"sectionId"}
                                         label={"Название раздела"}
                            />
                        </div>
                        <div className="create-names">
                            <NameInput name={"title"}
                                       label={"Название главы"}
                            />
                            <IconSelect name={"icon"}/>
                        </div>
                        <div className="section-visibility">
                            <DraftStatus name={"isEnabled"}
                                         label={"Показывать пользователям"}
                            />
                        </div>
                        <div className="section-button">
                            <CustomButton type="submit">Изменить</CustomButton>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}
