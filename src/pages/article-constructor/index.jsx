import {Puck, usePuck} from "@measured/puck"
import "@measured/puck/puck.css";
import "./styles.css"

// Create Puck component config
const config = {
    components: {
        HeadingBlock: {
            fields: {
                children: {
                    type: "text",
                },
            },
            render: ({ children }) => {
                return <h1>{children}</h1>;
            },
        },
    },
};

// Describe the initial data
const initialData = {};

// Save the data to your database
const save = (data) => {};

// Render Puck editor
function Editor() {
    return <Puck config={config} data={initialData} onPublish={save}
                 overrides={{
                     headerActions: ({ children }) => {

                         // eslint-disable-next-line react-hooks/rules-of-hooks
                         const {appState} = usePuck();

                         return (
                             <>
                                 <button
                                     onClick={() => {
                                         save(appState.data);
                                     }}
                                 >
                                     Save
                                 </button>

                                 {/* Render default header actions, such as the default Button */}
                                 {/*{children}*/}
                             </>
                         );
                     },
                 }}
    />;
}

export default function ArticleConstructor(props) {
    return (
        <div className="article-container">
            <div className="instrument-bar">

            </div>
            <div className="article">
                <Editor />
            </div>
        </div>
    )
}