import {
    useRoutes,
    Outlet
} from "react-router-dom";
import MinimalLayout from "../@basic/components/layout/MinimalLayout";
import SignIn from "../pages/authentication/SignIn";



export default function Router() {
    return (
        useRoutes([
            {
                // path: '/dashboard',
                // element: <Dashboard />,
                // children: [
                //     { path: 'home', element: <Home /> },
                //     { path: 'prospects/advisor', element: <UnderConstruction /> },
                //     { path: 'prospects/customer', element: <UnderConstruction /> },
                //     { path: 'user/account', element: <Account /> },
                //     { path: 'myobg/invoices', element: <Invoices /> },
                // ],
            },
            {
                path: '/',
                element: <MinimalLayout />,
                children: [
                    // { path: '/', element: <Navigate to="/dashboard/home" /> },
                    { path: 'signin', element: <SignIn></SignIn> },
                    // { path: 'signup', element: <SignUp></SignUp> },
                    // { path: 'password', element: <Password></Password> },

                    // { path: '404', element: <NotFound /> },
                    // { path: '*', element: <Navigate to="/404" /> },
                ],
            },
        ])
    )
}


