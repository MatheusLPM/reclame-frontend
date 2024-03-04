import React, { useState, useEffect } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";
import { BodyPerfil, StyledPerfilInfo } from "./style";

import Complaint from "../../Components/Complaint";
import DropDown from "../../Components/Dropdown";
import ComplaintBody from "../../Components/Complaint/ComplaintBody";
import EmptyComplaint from "../../Components/EmptyComplaint";
import { getPerfilComplaints, showCompany } from "../../Services/api";
import { newData } from "../../Services/functionValidations";

import ReactLoading from 'react-loading';

export default function Perfil() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [changeComplaint, setChangeComplaint] = useState("");
    const [autoCompleteResults, setAutoCompleteResults] = useState({});
    const [selectFilter, setSelectFilter] = useState("Todos");
    const [company, setCompany] = useState([]);
    const [companyComplaints, setCompanyComplaints] = useState([]);
    const [newNameBusinnes, setNewNameBusinnes] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const normalizeString = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\sÀ-ú]/gi, "").toLowerCase();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [data, complaints] = await Promise.all([
                    showCompany(id),
                    getPerfilComplaints(id)
                ]);

                setNewNameBusinnes(normalizeString(data.nome).replace(' ', '-'));
                setCompanyComplaints(complaints);
                setCompany(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Erro', error);
                return navigate('/');
            }
        };
        fetchData();
    }, [id]);

    const ruim = 4;
    const regular = 7;
    const bom = 8.5;

    const selectColor = (nota) => {

        if (nota <= ruim) {

            return "#CE0000";

        } else if (nota <= regular) {
            return "#FFA500"

        } else if (nota <= bom) {

            return "#00A11A"
        } else {

            return "#0000FF"
        }

    };
    const showStatus = (nota) => {

        if (nota <= ruim) {

            return "Ruim";

        } else if (nota <= regular) {
            return "Regular"

        } else if (nota <= bom) {

            return "Bom"
        } else if (nota > bom) {

            return "Excelente"
        } else {

            return ""
        }

    };
    const showSmile = (nota) => {
        if (nota <= ruim) {

            return (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.053 4.276a.5.5 0 0 1 .67-.223l2 1a.5.5 0 0 1 .166.76c.071.206.111.44.111.687C7 7.328 6.552 8 6 8s-1-.672-1-1.5c0-.408.109-.778.285-1.049l-1.009-.504a.5.5 0 0 1-.223-.67zm.232 8.157a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 1 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5 0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5" />
            </svg>);

        } else if (nota <= regular) {
            return (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
            </svg>);

        } else if (nota <= bom) {

            return (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
            </svg>);
        } else if (nota > bom) {
            return (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M6.488 7c-.23-.598-.661-1-1.155-1-.493 0-.924.402-1.155 1A2.8 2.8 0 0 1 4 6c0-1.105.597-2 1.333-2 .737 0 1.334.895 1.334 2 0 .364-.065.706-.179 1m5.334 0c-.23-.598-.662-1-1.155-1-.494 0-.925.402-1.155 1a2.8 2.8 0 0 1-.179-1c0-1.105.597-2 1.334-2C11.403 4 12 4.895 12 6c0 .364-.065.706-.178 1M2.696 8.756a.48.48 0 0 1 .382-.118C4.348 8.786 6.448 9 8 9c1.553 0 3.653-.214 4.922-.362a.48.48 0 0 1 .383.118.3.3 0 0 1 .096.29c-.09.47-.242.921-.445 1.342-.263.035-.576.075-.929.115A37 37 0 0 1 8 10.75c-1.475 0-2.934-.123-4.027-.247-.353-.04-.666-.08-.93-.115A5.5 5.5 0 0 1 2.6 9.045a.3.3 0 0 1 .097-.29ZM8 13.5a5.49 5.49 0 0 1-4.256-2.017l.116.014c1.115.126 2.615.253 4.14.253s3.025-.127 4.14-.253l.117-.014A5.49 5.49 0 0 1 8 13.5" />
            </svg>);
        } else {
            return "";
        }
    };
    const selectBackground = (nota) => {

        if (nota <= ruim) {

            return "#F1DDDD";

        } else if (nota <= regular) {

            return "#F7F79E"

        } else if (nota <= bom) {

            return "#D8E8D8"
        } else if (nota > bom) {
            return "#9CE4FF"
        } else {
            return "transparent"
        }
    };
    const searchNormalize = (searchValue) => {
        return companyComplaints.filter((valor) => {
            const lowerCaseSearch = normalizeString(searchValue).toLowerCase();
            const normalizedTitle = normalizeString(valor.titulo).toLowerCase();
            const normalizedDescription = normalizeString(valor.descricao).toLowerCase();

            return normalizedTitle.includes(lowerCaseSearch) || normalizedDescription.includes(lowerCaseSearch);
        });
    };
    const handleInputChange = (e) => {

        const searchString = e.target.value;
        setChangeComplaint(searchString);

        console.log(searchString)
        console.log(autoCompleteResults)

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
    const convertComplaints = (companyComplaints) => {

        let array = []

        if ((selectFilter === "Todos" || !selectFilter)) {
            return companyComplaints.filter((info) => info.id_pai == null);
        } else if (selectFilter) {

            array = companyComplaints.filter((info) => (info.status === selectFilter) && (info.id_pai == null))
            //console.log(array)
            return array;

        } else {

            return console.log("vazio");
        }
    };
    const arrayFilter = (companyComplaints) => {

        const auxArray = convertComplaints(companyComplaints)
        const newArray = auxArray.filter((info) => (
            !changeComplaint ||
            normalizeString(info.titulo).toLowerCase().includes(changeComplaint) ||
            normalizeString(info.descricao).toLowerCase().includes(changeComplaint)
        )).sort((a, b) => a.status.localeCompare(b.status));

        if (newArray.length > 0) {
            return (

                newArray.map((info, index) => (

                    <Link key={index} to={`/reclamacao/${newNameBusinnes}/${info.id}`}>
                        <ComplaintBody
                            key={index}
                            title={info.titulo}
                            descricao={info.descricao}
                            status={info.status}
                            data={newData(info.created_at)}
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
        <BodyPerfil>
            {isLoading ? (
                <div className="loading">
                    <ReactLoading type="spinningBubbles" color="#E7E7E7" />
                </div>
            ) :
                <section>

                    <header>
                        <article>
                            <StyledPerfilInfo>
                                <img alt="logo" src="/assets/briefcase-fill-black.svg" ></img>
                                <div>
                                    <h2>{company.nome}</h2>
                                    <p>{company.nome_categoria}</p>
                                    {company.site ? <a href={company.site} target="_blank">{company.site}</a> : <p>Sem site</p>}
                                </div>
                            </StyledPerfilInfo>

                            <Complaint
                                media={company.media ? company.media : 0}
                                color={selectColor(company.media)}
                                background={selectBackground(company.media)}
                                status={showStatus(company.media)}
                                emoji={showSmile(company.media)}
                            />

                        </article>
                        <article>
                            <p>Descrição</p>
                            <p>{company.descricao ? company.descricao : "Sem descrição"}</p>
                        </article>

                    </header>

                    <section>
                        <h2>Reclamações</h2>
                        <div>
                            <DropDown
                                value1="Todos"
                                value2="Aguardando"
                                value3="Respondida"
                                value4="Não Respondida"
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
                            {arrayFilter(companyComplaints, newNameBusinnes)}
                        </article>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                            </svg> Ver Todas
                        </button>
                    </section>
                </section>}
        </BodyPerfil>
    );
};
