import React, { useEffect, useState } from "react";
import ComplaintBody from "../../../../Components/Complaint/ComplaintBody";
import DropDown from "../../../../Components/Dropdown";
import { Link } from "react-router-dom";
import { newData } from "../../../../Services/functionValidations";
import EmptyComplaint from "../../../../Components/EmptyComplaint";
import { StyledDiv } from "./style";
import ComplaintUserBody from "../../../../Components/ComplantArea/Body";

export default function ConsumerComplaints(props) {

    const [changeComplaint, setChangeComplaint] = useState("");
    const [autoCompleteResults, setAutoCompleteResults] = useState({});
    const [selectFilter, setSelectFilter] = useState("Todos");

    const normalizeString = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\sÀ-ú]/gi, "").toLowerCase();
    };
    const searchNormalize = (searchValue) => {
        return props.consumerComplaints.filter((valor) => {
            const lowerCaseValue = normalizeString(valor.titulo).toLowerCase();
            const lowerCaseEmpresa = normalizeString(valor.nome_empresa).toLowerCase();
            const lowerCaseSearch = normalizeString(searchValue).toLowerCase();

            return lowerCaseValue.includes(lowerCaseSearch) || lowerCaseEmpresa.includes(lowerCaseSearch);
        });
    };
    const handleInputChange = (e) => {

        const searchString = e.target.value;
        setChangeComplaint(searchString);

        if (searchString.length) {

            const autoCompleteValores = searchNormalize(searchString);

            setAutoCompleteResults(autoCompleteValores);

        } else {
            setAutoCompleteResults([]);
        }
    };
    const handleSelectChange = (e) => {
        setSelectFilter(e)
    }
    const convertComplaints = (consumerComplaints) => {

        let array = []

        if ((selectFilter === "Todos" || !selectFilter)) {
            return consumerComplaints.filter((info) => info.id_pai == null);
        } else if (selectFilter) {

            array = consumerComplaints.filter((info) => (info.status === selectFilter) && (info.id_pai == null))
            return array;

        } else {

            return console.log("vazio");
        }
    };
    const arrayFilter = (consumerComplaints) => {

        const auxArray = convertComplaints(consumerComplaints);
        const newArray = auxArray.filter((info) => (
            !changeComplaint ||
            normalizeString(info.titulo).toLowerCase().includes(changeComplaint.toLowerCase()) ||
            normalizeString(info.nome_empresa).toLowerCase().includes(changeComplaint.toLowerCase())
        )).sort((a, b) => a.status.localeCompare(b.status));

        if (newArray.length > 0) {
            return (
                newArray.map((info, index) => (
                    <Link key={index} to={`/reclamacao/${normalizeString(info.nome_empresa).replace(' ', '-')}/${info.id}`}>
                        <ComplaintUserBody
                            key={index}
                            title={info.titulo}
                            descricao={info.descricao}
                            status={info.status}
                            data={newData(info.created_at)}
                            nome_empresa={info.nome_empresa}
                        />
                    </Link>
                ))
            );
        } else {
            if (selectFilter === "Todos" || selectFilter === "Aguardando") {
                return (
                    <EmptyComplaint
                        status=""
                    />
                );
            } else {
                return (
                    <EmptyComplaint
                        status={selectFilter}
                    />
                );
            }
        }
    };

    return (
        <StyledDiv>
            <section>
                <h2>Minhas Reclamações</h2>
                <div>
                    <DropDown
                        value1="Todos"
                        value2="Aguardando"
                        value3="Respondida"
                        value4="Resolvido"
                        value5="Não Respondida"
                        value6="Não Resolvido"
                        onSelectChange={handleSelectChange}
                    />

                    <input placeholder="Pesquisar reclamação"
                        value={changeComplaint}
                        onChange={handleInputChange}
                    />
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </span>
                </div>
            </section>
            <section>
                <article>
                    {arrayFilter(props.consumerComplaints)}
                </article>
            </section>

        </StyledDiv>
    )
}