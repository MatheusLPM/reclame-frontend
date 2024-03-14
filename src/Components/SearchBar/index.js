import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { api } from "../../Services/server";
import { debounce } from "lodash";
import { StyledSearchBar } from "./style";


export default function SearchBar(props) {

    const [findGetCompany, setFindGetCompany] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleLinkClick = () => {
        setFindGetCompany([]);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {

        const delay = debounce(searchCompany, 300);

        delay();

        return delay.cancel;

    }, [inputValue]);

    const searchCompany = async () => {
        try {
            if (inputValue === "") {

                setFindGetCompany([]);
                return 0;
            }
            const data = await api.get(`findCompany/${inputValue}`);

            setFindGetCompany(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <StyledSearchBar>
            <input ref={props.searchBarRef}
                type="text"
                placeholder="Pesquise por nome da empresa"
                value={inputValue}
                onChange={handleInputChange}
            />
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </span>

            <div className="perfil-link" style={{ display: (findGetCompany.length == 0 || findGetCompany == "") ? "none" : "block" }}>
                {findGetCompany && findGetCompany.length > 0 && findGetCompany.map((value, index) => (
                    <Link to={`${props.prefix}/${value.id}`} key={index} onClick={handleLinkClick}>
                        <p>{value.nome}</p>
                    </Link>
                ))}
            </div>
        </StyledSearchBar>
    );
}