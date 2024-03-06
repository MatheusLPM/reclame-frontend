import React, { useRef, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { BodyHome, Helper } from "./style";
import HelperButton from "../../Components/HelperButton";
import MenuCategory from "../../Components/MenuCategory";
import Ranking from "../../Components/Ranking";

import { getCompany } from "../../Services/api";
import ReactLoading from 'react-loading';


export default function Home() {

    const [category, setCategory] = useState("Todos");
    const [company, setCompany] = useState([0]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCompany();
                setCompany(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };
        fetchData();
    }, []);

    const arrayMaior = company.filter((item) => (
        (item.media >= 6) && (category === "Todos" || item.nome_categoria === category)
    )).sort((a, b) => b.media - a.media);

    const arrayMenor = company.filter((item) => (
        (item.media < 6 || item.media == null) && (category === "Todos" || item.nome_categoria === category)
    )).sort((a, b) => a.media - b.media);

    const changeCategory = (category) => {

        const categoryName = (category === "Todos" ? category : category.categoria);
        setCategory(categoryName);
    }

    return (

        <BodyHome>
            {isLoading ? (
                <div className="loading">
                    <ReactLoading type="spinningBubbles" color="#E7E7E7" />
                </div>
            ) :
                <>
                    <Helper>
                        <div>
                            <h2>Como podemos te ajudar?</h2>
                            <p>Mais acessados</p>
                        </div>
                        <div>
                            <HelperButton
                                title='Pesquise sua empresa'
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                }
                            />
                            <HelperButton
                                title='Faça uma reclamação'
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                    </svg>
                                }
                            />
                            <Link to="/enter">
                                <HelperButton
                                    title='Crie uma conta'
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                        </svg>
                                    }
                                />
                            </Link>
                            <Link to="/register/empresarial">
                                <HelperButton
                                    title='Cadastre uma empresa'
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                                            <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                                        </svg>
                                    }
                                />
                            </Link>
                        </div>
                    </Helper>
                    <section className="ranking">
                        <MenuCategory changeCategory={changeCategory} />
                        <Ranking
                            title="Melhores empresas"
                            subtitle="- Que mais resolveram"
                            bodyInfoList={arrayMaior}
                            category={category}
                        />
                        <Ranking
                            title="Piores empresas"
                            subtitle="- Que menos resolveram"
                            bodyInfoList={arrayMenor}
                            category={category}
                        />
                    </section>
                </>
            }
        </BodyHome>
    );
}