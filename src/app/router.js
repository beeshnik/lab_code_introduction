import {createBrowserRouter} from "react-router";
import HomePage from "../pages/home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: '*',
        element: <div>
            <h1>
                404 Страница не найдена
            </h1>
        </div>
    }
])