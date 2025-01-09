import React, {useEffect} from 'react';
import Icon from "../../shared/ui/icon";
import "./styles.css"
import PublicStatus from "../../shared/ui/publicStatus";
import DateLabel from "../../shared/ui/dateLabel";
import ControlButton from "../controlButton";
import {useNavigate} from "react-router-dom";
import DeleteWindow from "../deleteWindow";

export default function Section(props) {

    const [visible, setVisible] = React.useState(false);
    const [deleteButton, setDeleteButton] = React.useState(<div></div>);
    const [changeButton, setChangeButton] = React.useState(<div></div>);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate();

    const deleteClicked = (e) => {
        e.preventDefault()
        handleOpen()
    }

    const changeClicked = (e) => {
        e.preventDefault()
        navigate(`/${props.sectionId}/change-section?title=${props.title}&isEnabled=${props.isEnabled}&icon=${props.icon}`)
    }

    useEffect(() => {
        visible ? setDeleteButton(<ControlButton onClick={deleteClicked} name={"Trash"}/>) : setDeleteButton(<></>);
        visible ? setChangeButton(<ControlButton onClick={changeClicked} name={"Pencil"}/>) : setChangeButton(<></>);
    }, [visible]);

    const deleteData = {
        entity: "section",
        title: props.title,
        id: props.sectionId
    }

    return (
        <div className="section">
            <div className="section-container"
                 onMouseEnter={()=>{setVisible(true)}}
                 onMouseLeave={()=>{setVisible(false)}}
            >
                <div className="note-name">
                    <div className="icon">
                        <Icon name={props.icon} mode={"get"}/>
                    </div>
                    <div className="title">
                        {props.viewTitle}
                    </div>
                    <div className="section-status">
                        <PublicStatus isEnabled={props.isEnabled}/>
                    </div>
                    <div className="control">
                        {deleteButton}
                        {changeButton}
                    </div>
                </div>
                <div className="section-history">
                    <DateLabel updateDate={props.updateDate} colorType={"weak"}/>
                </div>
            </div>
            <div className="chapters">
                {props.children}
            </div>
            <DeleteWindow open={open} handleOpen={handleOpen} handleClose={handleClose} data={deleteData}/>
        </div>
    )
}