import React, { useEffect, useState } from "react";
import { Navigate, Route } from "react-router-dom";
import { getUserAuth } from "../../Services/api";

const PrivateRoute = ({ children, allowedType }) => {

    const [user, setUser] = useState([""]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [data] = await Promise.all([
                    getUserAuth(),
                ]);

                setUser(data);
            } catch (error) {
                console.error('Erro', error)
            }
        };
        fetchData();
    }, []);

    const isAuthenticated = localStorage.getItem("token");

    if (isAuthenticated) {
        return children;
    } else {
        return <Navigate to="/" />;
    }
};

export default PrivateRoute;
