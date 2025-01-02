import { icons } from 'lucide-react';

export default function Icon(props){
    const iconName = props.name.slice(2, props.name.length);
    const LucideIcon = icons[iconName];
    const StandartIcon = icons["Album"];

    return (
        LucideIcon === undefined ?
            <StandartIcon color={props.color} size={props.size} />
            :
            <LucideIcon color={props.color} size={props.size}
        />
    );
}