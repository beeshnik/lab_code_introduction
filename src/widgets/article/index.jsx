import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from "react";
import {Grid} from "@mui/material";
import "./styles.css"

export default function Article(props) {

    const [expanded, setExpanded] = React.useState(props.isExpanded);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(90deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    return (
        <div className={"article"}>
            <Grid container
                  direction="row"
                  justifyContent="left"
                  alignItems="center"
                  onClick={handleExpandClick}
                  aria-expanded={expanded}

            >
                <Grid item>
                    <Typography variant={"h8"} color={"textSecondary"}>
                        {props.title}
                    </Typography>
                </Grid>
                <Grid item>
                    <ExpandMore
                        expand={expanded}
                        aria-label="show more"
                    >
                        <KeyboardArrowRightIcon />
                    </ExpandMore>
                </Grid>
            </Grid>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                {props.children}
            </Collapse>
        </div>
    )
}