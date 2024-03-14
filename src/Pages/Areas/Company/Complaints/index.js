import React, { useEffect, useState } from "react";

import ComplaintBody from "../../../../Components/Complaint/ComplaintBody";
import DropDown from "../../../../Components/Dropdown";
import { Link } from "react-router-dom";
import { newData } from "../../../../Services/functionValidations";
import EmptyComplaint from "../../../../Components/EmptyComplaint";
import { StyledDiv } from "./style";
import { getUserComplaints } from "../../../../Services/api";
import ReactLoading from 'react-loading';
import { debounce } from "lodash";

import Pagination from '@mui/material/Pagination';
import { Stack } from "@mui/material";


export default function UserComplaints(props) {

    const [changeComplaint, setChangeComplaint] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [userComplaints, setUserComplaints] = useState(['']);
    const [isLoading, setIsLoading] = useState(true);
    const [isArticleLoading, setIsArticleLoading] = useState(true);
    const [selectFilter, setSelectFilter] = useState("Todos");
    const [totalPages, setTotalPages] = useState(0);
    const [to, setTo] = useState(0);

    const fetchData = async () => {
        setIsArticleLoading(true);

        try {
            const [data] = await Promise.all([
                getUserComplaints(currentPage, selectFilter, changeComplaint),
            ]);

            setUserComplaints(data);
            setTotalPages(data.last_page);
            setTo(data.to);
            setIsLoading(false);
        } catch (error) {
            console.error('Erro', error);
        } finally {
            setIsArticleLoading(false);
        }
    };

    console.log(to)

    useEffect(() => {

        const delay = debounce(fetchData, 300);

        delay();

        return delay.cancel;

    }, [currentPage, selectFilter, changeComplaint]);

    const handleInputChange = (e) => {
        setCurrentPage(1);
        setChangeComplaint(e.target.value);
    };

    const handleSelectChange = (value) => {
        setSelectFilter(value);
    };

    return (
        <StyledDiv isFive={totalPages}>
            {isLoading && (
                <div className="loading">
                    <ReactLoading type="spinningBubbles" color="#E7E7E7" />
                </div>)
            }
            <section>
                <h2>Minhas Reclamações</h2>
                <div>
                    <DropDown
                        value1="Todos"
                        value2="Aguardando"
                        value3="Respondida"
                        value4="Não Respondida"
                        value5="Resolvido"
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
                    {isArticleLoading ? (
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            scale: "0.6"
                        }}>
                            <ReactLoading type="balls" color="#E7E7E7" />
                        </div>) : (
                        userComplaints.data.length > 0 ? (
                            userComplaints.data.map((info, index) => (
                                <Link key={index} to={`/reclamacao/${info.id}`}>
                                    <ComplaintBody
                                        key={index}
                                        title={info.titulo}
                                        descricao={info.descricao}
                                        status={info.status}
                                        data={newData(info.created_at)}
                                        nome_empresa={info.nome_empresa}
                                        tipo={props.tipo}
                                    />
                                </Link>
                            ))
                        ) : (<EmptyComplaint status={selectFilter} />)
                    )
                    }
                </article>
                <div className="pagination">
                    <Stack spacing={2}>
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            shape="rounded"
                            onChange={(event, page) => setCurrentPage(page)}
                        />
                    </Stack>
                </div>
            </section>


        </StyledDiv>
    )
}