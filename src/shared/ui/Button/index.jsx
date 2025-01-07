import {Button} from "@mui/material";

const styles = {
    primary: {
        backgroundColor: "#66bb6a",
        color: "white",
        borderColor: "#66bb6a"
    },
    secondary: {
        borderColor: "#66bb6a",
        color: "#66bb6a",
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
    >{props.children}
    </Button>
}
