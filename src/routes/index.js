import {
    useRoutes,
    Navigate
} from "react-router-dom";
import MinimalLayout from "../@basic/components/layout/MinimalLayout";
import Password from "../pages/authentication/Password";
import SignIn from "../pages/authentication/SignIn";
import SignUp from "../pages/authentication/SignUp";
import Terms from "../pages/authentication/Terms";
import Wrapper from "../pages/authentication/Wrapper";
import LandingPage from "../pages/landing/LandingPage";



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
                element: <MinimalLayout ></MinimalLayout>,
                children: [
                    { path: '/', element: <LandingPage /> },
                    {
                        path: 'auth', element: <Wrapper></Wrapper>, children: [
                            { path: 'signin', element: <SignIn></SignIn> },
                            { path: 'signup', element: <SignUp></SignUp> },
                            { path: 'terms', element: <Terms></Terms> },
                            { path: 'password', element: <Password></Password> }
                        ]
                    }
                    ,
                    // { path: 'password', element: <Password></Password> },
                    // { path: '404', element: <NotFound /> },
                    // { path: '*', element: <Navigate to="/404" /> },
                ],
            },
        ])
    )
}


