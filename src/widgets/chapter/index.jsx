import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./styles.css"
import Icon from "../../shared/ui/icon";
import PublicStatus from "../../shared/ui/publicStatus";
import DateLabel from "../../shared/ui/dateLabel";
import ControlButton from "../controlButton";
import DeleteWindow from "../deleteWindow";

export default function Chapter(props) {

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
        navigate(
            `/${props.chapterId}/change-chapter?
            title=${props.title}
            &isEnabled=${props.isEnabled}
            &icon=${props.icon}
            &sectionId=${props.sectionId}`
        )
    }

    useEffect(() => {
        visible ?
            setDeleteButton(<ControlButton onClick={deleteClicked} name={"Trash"}/>)
            :
            setDeleteButton(<></>);
        visible ?
            setChangeButton(<ControlButton onClick={changeClicked} name={"Pencil"}/>)
            :
            setChangeButton(<></>);
    }, [visible]);

    const deleteData = {
        entity: "chapter",
        title: props.title,
        id: props.chapterId
    }

    return (
        <div>
            <Link to={`/${props.chapterId}/articles`} style={{textDecoration: 'none', color: 'inherit'}}>
                <div className="chapter hoverable"
                     onMouseEnter={()=>{setVisible(true)}}
                     onMouseLeave={()=>{setVisible(false)}}
                >
                    <div className="note-name chapter-note">
                        <div className="icon">
                            <Icon name={props.icon} mode={"get"}/>
                        </div>
                        <div className="title">
                            {props.viewTitle}
                        </div>
                        <div className="chapter-status">
                            <PublicStatus isEnabled={props.isEnabled}/>
                        </div>
                        <div className="control">
                            {deleteButton}
                            {changeButton}
                        </div>
                    </div>
                    <div className="chapter-history">
                        <DateLabel updateDate={props.updateDate} colorType={"weak"}/>
                    </div>
                </div>
            </Link>
            <DeleteWindow open={open} handleOpen={handleOpen} handleClose={handleClose} data={deleteData}/>
        </div>
    )
}
