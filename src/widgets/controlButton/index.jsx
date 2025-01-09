import React from 'react'
import {Button} from "@mui/material";
import Icon from "../../shared/ui/icon";

const style = {
    padding: 0,
    color: "#ffa726",
}

export default function ControlButton(props) {

    return (
        <Button onClick={props.onClick} sx={style}>
            <Icon name={props.name}/>
        </Button>
    )
}
