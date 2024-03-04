import React, { useState, useEffect } from "react";

import { Link, Route, Routes, useNavigate, useLocation } from "react-router-dom";

import { BodyCreateAcc, SectionButton, StyledButton, SectionForm } from "./style";

import Empresarial from "./Business";
import Person from "./Person";

export default function Register(props) {

    const [person, setPerson] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setPerson(location.pathname === "/register");
    }, [location.pathname]);

    function handleSelectButton(isPerson) {
        setPerson(isPerson);
    }

    return (
        <BodyCreateAcc>
            <section>
                <div className="header-form">
                    <h3>Escolha o seu tipo de conta</h3>
                    <SectionButton>
                        <Link to='/register'>
                            <StyledButton
                                onClick={() => handleSelectButton(true)}
                                selected={person}
                            >
                                Pessoal
                            </StyledButton>
                        </Link>
                        <Link to='/register/empresarial'>
                            <StyledButton
                                onClick={() => handleSelectButton(false)}
                                selected={!person}
                            >
                                Empresarial
                            </StyledButton>
                        </Link>
                    </SectionButton>
                </div>

                <SectionForm>
                    <Routes>
                        <Route path="/" element={<Person />} />
                        <Route path="/empresarial" element={<Empresarial />} />
                    </Routes>
                </SectionForm>
            </section>
        </BodyCreateAcc>
    );
}
