import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import ShowGrid from "../components/ShowGrid";
import Main from "../layout/Main/Main";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/showGrid',
                element:<ShowGrid></ShowGrid>
            }
        ]
    }
])