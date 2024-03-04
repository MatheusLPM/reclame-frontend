import React from "react";
import { useRoutes } from "react-router-dom";

import Principal from "./Pages";
import Entrar from "./Pages/Enter";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import PrivateRoute from "./Components/PrivateRoute"; // Renomeado de PrivateRoutes para PrivateRoute
import ConsumerArea from "./Pages/Areas/Consumer";

export default function RoutePage() {

    const routes = useRoutes([
        { path: '/*', element: <Principal /> },
        { path: '/enter', element: <Entrar /> },
        { path: '/login', element: <Login /> },
        { path: '/register/*', element: <Register /> },
        { path: '*', element: <NotFound /> },
    ]);

    return routes;
}
