import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Components/Header";
import Home from "./Home/index.js";
import Perfil from "./Perfil/index.js";
import ComplaintPage from "./ComplaintPage/index.js";
import NotFound from "./NotFound/index.js";
import PrivateRoute from "../Components/PrivateRoute/index.js";
import ConsumerArea from "./Areas/Consumer/index.js";
import CompanyArea from "./Areas/Company/index.js";
import { Content } from "./style.js";
import Complain from "./Areas/Consumer/Complaints/Complain/index.js";
import { useState } from "react";
import { useEffect } from "react";
import { getUserAuth } from "../Services/api.js";
import { useRef } from "react";

export default function Principal() {
    const [user, setUser] = useState([""]);
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [data] = await Promise.all([
                    getUserAuth(),
                ]);
                if (data) {
                    setUser(data);
                    setUserName(data.user.nome);
                }


            } catch (error) {
                console.error('Erro', error)
            }
        };
        fetchData();
    }, []);

    const searchBarRef = useRef();

    return (

        <Content>
            <Header nome={userName} tipo={user.userType} searchBarRef={searchBarRef} />
            <Routes>
                <Route path="/" element={<Home tipo={user.userType} searchBarRef={searchBarRef} />} />
                <Route path="/perfil/empresa/:id" element={<Perfil />} />
                <Route path="/reclamacao/:id" element={<ComplaintPage />} />
                <Route
                    path="/consumer"
                    element={<PrivateRoute allowedType="consumidor"><ConsumerArea /></PrivateRoute>}
                />
                <Route
                    path="/company"
                    element={<PrivateRoute allowedType="empresa"><CompanyArea /></PrivateRoute>}
                />
                <Route path="/complain/:id" element={<PrivateRoute allowedType="consumidor"><Complain /></PrivateRoute>} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </Content>

    );
}
