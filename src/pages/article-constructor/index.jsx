import "@measured/puck/puck.css";
import "./styles.css"
import PuckEditor from "../../widgets/puckEditor";


export default function ArticleConstructor(props) {
    return (
        <div className="article-container">
            <PuckEditor />
        </div>
    )
}