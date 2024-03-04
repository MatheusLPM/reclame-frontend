import React from "react";
import { useRoutes } from "react-router-dom";

import Pessoal from "./Person";
import Empresarial from "./Business";

export default function RegisterRoute() {

    const registerRoute = useRoutes([
        { path: '/register/pessoal', element: <Pessoal /> },
        { path: '/register/empresarial', element: <Empresarial /> },
    ])

    return registerRoute;
}