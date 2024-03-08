import React, { useEffect } from "react";

import { StyledHomeUser } from "./style";


export default function HomeUser(props) {
    const normalizeData = (data) => {

        if (!data) return "";
        const newData = data.split('-')

        return `${newData[2]}/${newData[1]}/${newData[0]}`
    }

    function maskCPF(cpf) {

        if (!cpf) return "";

        cpf = cpf.replace(/\D/g, '');
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

        return cpf;
    }

    function mascaraCNPJ(cnpj) {
        if (!cnpj) return "";

        cnpj = cnpj.replace(/\D/g, '');
        cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
        cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
        cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
        cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2');

        return cnpj;
    }

    function maskCep(cep) {

        if (!cep) return "";
        cep = cep.replace(/\D/g, '');

        if (cep.length > 8) {
            cep = cep.slice(0, 8);
        }

        cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');

        return cep;
    }

    return (
        <StyledHomeUser>
            <div>
                <section>
                    <article>
                        <h2>Olá!</h2>
                        <p>Veja alguns dados sobre você</p>
                    </article>

                    <article>
                        <div className="container">
                            <img
                                alt="logo"
                                src={
                                    props.userType === "consumidor"
                                        ? "/assets/person-fill.svg"
                                        : (props.logo ? `http://localhost:8000/storage/${props.logo}` : "/assets/briefcase-fill-black.svg")
                                }
                            />
                            <div className="info">
                                <h2>{props.nome}</h2>
                                <div>
                                    {props.userType <= "consumidor" ? <p>Cpf: {maskCPF(props.cn)}</p> : <p>CNPJ: {mascaraCNPJ(props.cn)}</p>}
                                    <p>Cidade: {props.cidade}</p>
                                    <p>Email: {props.email}</p>
                                    {props.userType == "consumidor" ? <p>Dada de nascimento: {normalizeData(props.data)}</p> : <p>Site: {props.site ? props.site : "Sem site"}</p>}
                                    <p>Estado: {props.estado}</p>
                                    <p>CEP: {maskCep(props.cep)}</p>

                                </div>
                            </div>
                        </div>
                        {props.userType == "consumidor" ? "" : <div className="desc">
                            <p>Descrição</p>
                            <p>{props.desc ? props.desc : "Sem descrição"}</p>
                        </div>}
                    </article>
                </section>
            </div>

        </StyledHomeUser>
    );
}


