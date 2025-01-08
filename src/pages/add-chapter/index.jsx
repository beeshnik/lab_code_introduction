import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import NameInput from "../../shared/ui/nameInput";
import IconSelect from "../../widgets/iconSelect";
import DraftStatus from "../../widgets/draftStatus";
import {FormProvider, useForm} from "react-hook-form";
import SectionList from "../../widgets/sectionList";
import {useCreateChapter} from "../../shared/hooks";
import "./styles.css"
import CustomButton from "../../shared/ui/Button";

export default function AddChapterPage(props) {

    const methods = useForm({
        defaultValues: {
            "isEnabled": false,
        }
    })

    const addChapter = useCreateChapter();
    const navigate = useNavigate();

    useEffect(() => {
        const error = addChapter.isError
        if (error) {
            methods.setError("title")
            methods.setError("icon")
            methods.setError("sectionId")
            alert("Не удалось создать раздел")
        }
    }, [addChapter.isError]);

    useEffect(() => {
        if (addChapter.isSuccess) {
            navigate("/")
        }
    }, [addChapter.isSuccess]);

    const onSubmit = (form) => {
        addChapter.mutate({
            sectionId: form.sectionId,
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
            <h1>Новая глава</h1>
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
                            <CustomButton type="submit">Создать</CustomButton>
                        </div>

                    </div>
                </form>
            </FormProvider>
        </div>
    )
}
