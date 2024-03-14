import React from "react";


import { useEffect, useState } from "react";
import { getShowCompany } from "../../../Services/api";
import { StyledButton, StyledConsumerArea } from "../Consumer/style";

import ReactLoading from "react-loading"
import HomeUser from "../../../Components/UserPage";
import ConfigCompany from "./ConfigPage";
import UserComplaints from "./Complaints";

export default function CompanyArea() {

    const [user, setUser] = useState({});
    const [address, setAdress] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [menu, setMenu] = useState(() => {
        return localStorage.getItem("menu") || "Inicio";
    });

    const [perfil, setPerfil] = useState(['']);
    const options = ["Inicio", "Reclamações", "Configurações"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [data] = await Promise.all([
                    getShowCompany(),
                ]);

                setUser(data.user);
                setAdress(data.address);
                setPerfil(data.perfil);
                setIsLoading(false);
            } catch (error) {
                console.error('Erro', error);
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
                        cn={user.cnpj}
                        cidade={address.cidade}
                        email={user.email}
                        data={user.data_nascimento}
                        estado={address.uf}
                        cep={address.cep}
                        site={user.site}
                        desc={perfil ? perfil.descricao : false}
                        logo={perfil ? perfil.foto_perfil : false}
                        userType={user.tipo}
                    />);

            case "Reclamações":
                return (
                    <UserComplaints
                        id={user.id}
                        tipo={user.tipo}
                    />);

            case "Configurações":
                return <ConfigCompany user={user.id} />;

            default:
                return "";
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
            ) :
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
            }

        </StyledConsumerArea>
    );
}