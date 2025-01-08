import {Button} from "@mui/material";

const styles = {
    primary: {
        backgroundColor: "#ffa726",
        color: "white",
        borderColor: "#ffa726"
    },
    secondary: {
        borderColor: "#ffa726",
        color: "#ffa726",
    }
}

const variant = {
    primary: "contained",
    secondary: "outlined",
}

export default function CustomButton(props) {

    return <Button
        onClick={props.onClick}
        variant={props.variant ? variant[props.variant] : "contained"}
        sx={props.variant ? styles[props.variant] : styles["primary"]}
        type={props.type}
    >{props.children}
    </Button>
}
