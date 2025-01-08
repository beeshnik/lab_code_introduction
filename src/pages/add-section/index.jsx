import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./styles.css"
import NameInput from "../../shared/ui/nameInput";
import IconSelect from "../../widgets/iconSelect";
import {FormProvider, useForm} from "react-hook-form";
import DraftStatus from "../../widgets/draftStatus";
import {useCreateSection} from "../../shared/hooks";
import CustomButton from "../../shared/ui/Button";

export default function AddSectionPage(props) {

    const methods = useForm({
        defaultValues: {
            "isEnabled": false,
        }
    })

    const addSection = useCreateSection()
    const navigate = useNavigate();

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

    useEffect(() => {
        if (addSection.isSuccess) {
            navigate("/")
        }
    }, [addSection.isSuccess]);

    return (
        <div>
            <Link to={'/'}>
                <CustomButton variant={"secondary"}>Назад</CustomButton>
            </Link>
            <h1>Новый раздел</h1>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="add-section">
                        <div className="create-names">
                            <NameInput name={"title"}
                                       label={"Название раздела"}
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