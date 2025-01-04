import { icons } from 'lucide-react';

export const defaultIcon = "Album"

export default function Icon(props){
    // const iconName = props.mode === "get" ?
    //     props.name.slice(2, props.name.length) :
    //     props.name;
    const iconName = props.name;
    const LucideIcon = icons[iconName];
    const StandartIcon = icons[defaultIcon];

    return (
        LucideIcon === undefined ?
            <StandartIcon color={props.color} size={props.size} />
            :
            <LucideIcon color={props.color} size={props.size}
        />
    );
}