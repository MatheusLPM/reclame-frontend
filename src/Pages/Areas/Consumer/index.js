import React, { useState, useEffect } from "react";
import { getConsumer, getConsumerComplaints, getUserAuth } from "../../../Services/api";
import { StyledButton, StyledConsumerArea } from "./style";
import ConsumerComplaints from "./Complaints";
import ComplaintArea from "../../../Components/ComplantArea";
import ReactLoading from "react-loading";
import HomeUser from "../../../Components/UserPage";

export default function ConsumerArea() {
    const [user, setUser] = useState({});
    const [address, setAddress] = useState({});
    const [userComplaints, setUserComplaints] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [menu, setMenu] = useState(() => {
        return localStorage.getItem("menu") || "Inicio";
    });
    const [type, setType] = useState();
    const options = ["Inicio", "Reclamações", "Configurações", "Fazer reclamação"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [data, dataComplaints, type] = await Promise.all([
                    getConsumer(),
                    getConsumerComplaints(),
                    getUserAuth(),
                ]);

                setUser(data.user);
                setType(type.userType);
                setAddress(data.address);
                setUserComplaints(dataComplaints);
                setIsLoading(false);

            } catch (error) {
                console.error('Erro', error)
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        localStorage.setItem("menu", menu);
    }, [menu]);

    const componentRender = (menu) => {
        switch (menu) {
            case "Inicio":
                return (
                    <HomeUser
                        nome={user.nome}
                        cn={user.cpf}
                        cidade={address.cidade}
                        email={user.email}
                        data={user.data_nascimento}
                        estado={address.uf}
                        cep={address.cep}
                        userType={type}
                    />
                );

            case "Reclamações":
                return (
                    userComplaints.length > 0 ? (
                        <ConsumerComplaints
                            consumerComplaints={userComplaints}
                        />
                    ) : (
                        <h2 className="empty">Sem Reclamações</h2>
                    )
                );

            case "Fazer reclamação":
                return <ComplaintArea />;

            case "Configurações":
                return "";

            default:
                return null;
        }
    };

    const handleSelectedLink = (item) => {
        setMenu(item);
    };

    return (
        <StyledConsumerArea>
            {isLoading ? (
                <div className="loading">
                    <ReactLoading type="spinningBubbles" color="#E7E7E7" />
                </div>
            ) : (
                <>
                    <div>
                        <nav>
                            {options.map((item, index) => (
                                <StyledButton
                                    key={index}
                                    onClick={() => handleSelectedLink(item)}
                                    $menu={menu === item}
                                >
                                    {item}
                                </StyledButton>
                            ))}
                        </nav>
                    </div>
                    <div>
                        {componentRender(menu)}
                    </div>
                </>
            )}
        </StyledConsumerArea>
    );
}
