import {
    useRoutes,
    Navigate
} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Home from "../pages/Home";


export default function Router() {
    return (
        useRoutes([
            {
                path: '/',
                element:
                    <Dashboard />
                ,
                children: [
                    { path: 'home', element: <Home /> },

                ],
            },

        ])
    )
}


