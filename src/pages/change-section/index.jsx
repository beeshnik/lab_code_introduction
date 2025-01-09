import React, {useEffect} from 'react';
import {Link, useNavigate, useParams, useSearchParams} from "react-router-dom";
import NameInput from "../../shared/ui/nameInput";
import IconSelect from "../../widgets/iconSelect";
import DraftStatus from "../../widgets/draftStatus";
import {FormProvider, useForm} from "react-hook-form";
import { useUpdateSection } from "../../shared/hooks";
import "./styles.css"
import CustomButton from "../../shared/ui/button";

export default function ChangeSectionPage(props) {

    const updateSection = useUpdateSection();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const params = useParams();

    const methods = useForm({
        defaultValues: {
            isEnabled: Boolean(searchParams.get("isEnabled")),
            title: searchParams.get("title"),
            icon: searchParams.get("icon"),
        }
    })

    useEffect(() => {
        const error = updateSection.isError
        if (error) {
            methods.setError("title")
            methods.setError("icon")
            alert("Не удалось редактировать раздел")
        }
    }, [updateSection.isError]);

    const onSubmit = (form) => {
        updateSection.mutate({
            sectionId: params.sectionId,
            section: {
                ...form,
                displayOrder: "2",
            }
        })
    }

    useEffect(() => {
        if (updateSection.isSuccess) {
            navigate("/")
        }
    }, [updateSection.isSuccess]);

    return (
        <div>
            <Link to={'/'}>
                <CustomButton variant={"secondary"}>Назад</CustomButton>
            </Link>
            <h1>Редактирование раздела</h1>
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
                            <CustomButton type="submit">Изменить</CustomButton>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}
