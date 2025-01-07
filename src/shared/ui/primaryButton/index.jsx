import {Button} from "@mui/material";

const styles = {
    color: "#a5d6a7",
}

export default function PrimaryButton(props) {
    return <Button
        onClick={props.onClick}
        variant={"contained"}
        sx={styles}
    >{props.children}
    </Button>
}
