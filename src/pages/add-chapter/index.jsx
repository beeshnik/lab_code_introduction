import React from 'react';
import {Link} from "react-router-dom";
import NameInput from "../../shared/ui/nameInput";
import IconSelect from "../../widgets/iconSelect";
import DraftStatus from "../../widgets/draftStatus";
import {FormProvider, useForm} from "react-hook-form";
import SectionList from "../../widgets/sectionList";
import {useCreateChapter} from "../../shared/hooks";

export default function AddChapterPage(props) {

    const methods = useForm({
        defaultValues: {
            "isEnabled": false,
        }
    })

    const addChapter = useCreateChapter();

    const onSubmit = (form) => {
        const newForm = {
            displayOrder: "2",
            title: form.title,
            icon: form.icon,
            isEnabled: `${form.isEnabled}`,
        }
        addChapter({
            sectionId: form.sectionId,
            chapter: newForm,
        });
        console.log(newForm)
    }

    return (
        <div>
            <Link to={'/'}>
                Онлайн справки
            </Link>
            <h1>Новая глава</h1>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div>
                        <SectionList name={"sectionId"} label={"Название раздела"}/>
                        <NameInput name={"title"} label={"Название главы"}/>
                        <IconSelect name={"icon"}/>
                        <DraftStatus name={"isEnabled"}
                                     label={"Показывать пользователям"}
                        />
                        <button type="submit">Отправить данные</button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}