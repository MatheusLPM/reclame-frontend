import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { api } from "../../Services/server";
import { StyledAuthBody } from "./style";
import { getUserAuth } from "../../Services/api";

export default function AuthHeader() {

    const [user, setUser] = useState([""]);
    const [userName, setUserName] = useState(null);
    const navigate = useNavigate();

    const handleLogOut = async (event) => {
        //event.preventDefault();

        try {
            const { data } = await api.post("auth/logout");

            localStorage.removeItem('token');
            localStorage.removeItem('tipo');
            localStorage.removeItem('nome');

            await navigate('/');

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [data] = await Promise.all([
                    getUserAuth(),
                ]);

                setUser(data);
                setUserName(data.user.nome)
            } catch (error) {
                console.error('Erro', error)
            }
        };
        fetchData();
    }, []);

    console.log(userName)

    return (

        <StyledAuthBody>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
            </div>
            <div>
                <p>{user.userType ? user.userType : ""}</p>
                <Link to={(user.userType == "consumidor") ? "/consumer" : "/company"}>{userName}</Link>
            </div>
            <button id="button-logout" onClick={handleLogOut}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                </svg>
            </button>
        </StyledAuthBody>

    );
}