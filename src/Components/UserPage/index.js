import React, { useEffect } from "react";

import { StyledHomeUser } from "./style";


export default function HomeUser(props) {


    const userType = {
        ['empresa']: 'Empresa',
        ['consumidor']: 'Consumidor'
    }

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

    console.log(props.cpf)

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
                            <img alt="logo" src={props.cn.length <= 11 ? "/assets/person-fill.svg" : "/assets/briefcase-fill.svg"} />
                            <div className="info">
                                <h2>{props.nome}</h2>
                                <div>
                                    {props.cn.length <= 11 ? <p>Cpf: {maskCPF(props.cn)}</p> : <p>CNPJ: {mascaraCNPJ(props.cn)}</p>}
                                    <p>Cidade: {props.cidade}</p>
                                    <p>Email: {props.email}</p>
                                    {props.cn.length <= 11 ? <p>Dada de nascimento: {normalizeData(props.data)}</p> : <p>Site: {props.site}</p>}
                                    <p>Estado: {props.estado}</p>
                                    <p>CEP: {maskCep(props.cep)}</p>
                                </div>
                            </div>
                        </div>
                        {props.userType == "Consumidor" ? "":<div className="desc">
                            <p>Descrição</p>
                            <p>{props.desc ? props.desc : "Sem descrição"}</p>
                        </div>}
                    </article>
                    {/* <article>
                        <h3>Descrição</h3>
                        <p>{props.desc ? props.desc : "Sem descrição"}</p>
                    </article> */}
                </section>
            </div>

        </StyledHomeUser>
    );
}


