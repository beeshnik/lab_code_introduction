import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from "react";
import "./styles.css"
import PublicStatus from "../../shared/ui/publicStatus";

export default function Article(props) {

    const [expanded, setExpanded] = React.useState(false);

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
        <div className={"article"}
             onClick={handleExpandClick}
             aria-expanded={expanded}>
            <div className="article-header">
                <div className="article-header-title">
                    {props.title}
                    <PublicStatus isEnabled={props.isEnabled} />
                </div>
                <div className="article-header-icon">
                    <ExpandMore
                        expand={expanded}
                        aria-label="show more"
                    >
                        <KeyboardArrowRightIcon />
                    </ExpandMore>
                </div>
            </div>
            <div className="article-body">
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    {props.children}
                </Collapse>
            </div>
        </div>
    )
}