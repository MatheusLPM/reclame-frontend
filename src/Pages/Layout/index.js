import React from "react";

import { BrowserRouter } from "react-router-dom";
import RoutePage from "../../routes.js";



export default function Layout() {


    return (
        <BrowserRouter>
            <RoutePage />
        </BrowserRouter>
    );
}