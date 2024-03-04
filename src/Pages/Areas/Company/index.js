import React from "react";


import { useEffect, useState } from "react";
import { getShowCompany, getCompanyComplaints } from "../../../Services/api";
import { StyledButton, StyledConsumerArea } from "../Consumer/style";

import ReactLoading from "react-loading"
import HomeUser from "../../../Components/UserPage";
import CompanyComplaints from "./Complaints";

export default function CompanyArea() {

    const [user, setUser] = useState({});
    const [address, setAdress] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [menu, setMenu] = useState("Inicio");
    const [userComplaints, setUserComplaints] = useState({});

    const options = ["Inicio", "Reclamações", "Configurações"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [data, dataComplaints] = await Promise.all([
                    getShowCompany(),
                    getCompanyComplaints()

                ]);
                setUser(data.user);
                setAdress(data.address);
                setUserComplaints(dataComplaints);
                setIsLoading(false);
            } catch (error) {
                console.error('Erro', error);
            }
        };
        fetchData();
    }, []);

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
                        des={user.desc}
                        userType={localStorage.getItem('tipo')}
                    />);

            case "Reclamações":
                return (userComplaints.length > 0 ?
                    <CompanyComplaints
                        consumerComplaints={userComplaints}
                    /> : <h2 className="empty">Sem Reclamações</h2>);

            case "Configurações":
                return "Configurações";

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