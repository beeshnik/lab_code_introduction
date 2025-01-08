import {formatDistanceToNow} from "date-fns";
import {ru} from "date-fns/locale";

const colorType = {
    common: {
        color: "black"
    },
    weak: {
        color: "#bdbdbd"
    }
}

export default function DateLabel(props) {
    const lastDate = new Date(props.updateDate)
    const date = formatDistanceToNow(lastDate, {locale: ru}) + " назад"

    const style = props.colorType !== undefined ? colorType[props.colorType] : colorType["common"]

    return (
        <div style={style}>
            {date}
        </div>
    )
}
