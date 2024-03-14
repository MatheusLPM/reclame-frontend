import React, { useState, useEffect } from "react";
import { getConsumer } from "../../../Services/api";
import { StyledButton, StyledConsumerArea } from "./style";
import ComplaintArea from "../../../Components/ComplantArea";
import ReactLoading from "react-loading";
import HomeUser from "../../../Components/UserPage";
import ConfigConsumer from "./ConfigPage";
import UserComplaints from "../Company/Complaints";

export default function ConsumerArea() {
    const [user, setUser] = useState({});
    const [address, setAddress] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [menu, setMenu] = useState(() => {
        return localStorage.getItem("menu") || "Inicio";
    });
    const options = ["Inicio", "Reclamações", "Configurações", "Fazer reclamação"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [data] = await Promise.all([
                    getConsumer(),
                ]);

                setUser(data.user);
                setAddress(data.address);
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
                        userType={user.tipo}
                        foto={user.foto}
                    />
                );

            case "Reclamações":
                return (
                    <UserComplaints
                        id={user.id}
                        tipo={user.tipo}
                    />);

            case "Fazer reclamação":
                return <ComplaintArea />;

            case "Configurações":
                return <ConfigConsumer user={user.id} />;

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