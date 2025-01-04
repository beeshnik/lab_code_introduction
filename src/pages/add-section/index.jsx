import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import "./styles.css"
import NameInput from "../../shared/ui/nameInput";
import IconSelect from "../../widgets/iconSelect";
import {FormProvider, useForm} from "react-hook-form";
import DraftStatus from "../../widgets/draftStatus";
import {useCreateSection} from "../../shared/hooks";

export default function AddSectionPage(props) {

    const methods = useForm({
        defaultValues: {
            "isEnabled": false,
        }
    })

    const addSection = useCreateSection()

    useEffect(() => {
        const error = addSection.isError
        if (error) {
            methods.setError("title")
            methods.setError("icon")
            alert("Не удалось создать раздел")
        }
    }, [addSection.isError]);

    const onSubmit = (form) => {
        addSection.mutate({
            section: {
                ...form,
                displayOrder: "2",
            }
        })
    }

    return (
        <div>
            <Link to={'/'}>
                Онлайн справки
            </Link>
            <h1>Новый раздел</h1>
            <div className="add-section">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <div>
                            <NameInput name={"title"}
                                       label={"Название раздела"}
                            />
                            <IconSelect name={"icon"}/>
                            <DraftStatus name={"isEnabled"}
                                         label={"Показывать пользователям"}
                            />
                            <button type="submit">Создать</button>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}