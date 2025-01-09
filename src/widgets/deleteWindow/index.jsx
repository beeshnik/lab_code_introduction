import * as React from 'react';
import Modal from '@mui/material/Modal';
import CustomButton from "../../shared/ui/button";
import "./styles.css"
import {useDeleteChapter, useDeleteSection} from "../../shared/hooks";
import {useEffect} from "react";

export default function DeleteWindow(props) {

    const deleteChapter = useDeleteChapter()
    const deleteSection = useDeleteSection()

    const handleDelete = () => {
        const data = props.data
        if (data.entity === "section"){
            deleteSection.mutate({
                sectionId: data.id
            })
        }
        else if (data.entity === "chapter"){
            deleteChapter.mutate({
                chapterId: data.id
            })
        }
    }

    useEffect(() => {
        const error = deleteChapter.isError || deleteSection.isError
        if (error) {
            alert("Удаление не удалось")
        }
    }, [deleteChapter.isError, deleteSection.isError]);

    useEffect(() => {
        if (deleteChapter.isSuccess || deleteSection.isSuccess) {
            props.handleClose()
        }
    }, [deleteChapter.isSuccess, deleteSection.isSuccess]);

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <div className={"delete-window"}>
                    <h2 id="parent-modal-title">Подтверждение удаления</h2>
                    <p id="parent-modal-description">
                        Вы действительно хотите удалить <b>{props.data.title}</b>?
                    </p>
                    <div className="modal-footer">
                        <div className="modal-control">
                            <CustomButton onClick={props.handleClose} variant={"secondary"}>Нет</CustomButton>
                            <CustomButton onClick={handleDelete}>Да</CustomButton>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
