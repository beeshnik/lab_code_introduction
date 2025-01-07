import {createBrowserRouter} from "react-router";
import HomePage from "../pages/home";
import AddChapterPage from "../pages/add-chapter";
import AddArticlePage from "../pages/add-article";
import AddSectionPage from "../pages/add-section";
import ArticlesPage from "../pages/articles";
import {Link} from "react-router-dom";
import ArticleValue from "../widgets/articleValue";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/add-chapter",
        element: <AddChapterPage/>,
    },
    {
        path: "/add-section",
        element: <AddSectionPage/>,
    },
    {
        path: "/:chapterId/articles",
        element: <ArticlesPage/>
    },
    {
        path: "/:chapterId/add-article",
        element: <AddArticlePage/>,
    },
    {},
    {
        path: '*',
        element: <div>
            <h1>
                404 Страница не найдена
            </h1>
            <br/>
            <Link to={"/"}>
                Хочу домой
            </Link>
        </div>
    }
])