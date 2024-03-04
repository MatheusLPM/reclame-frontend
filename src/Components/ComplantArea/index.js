import React from "react";
import { StyledComplaintArea } from "./style";
import SearchBar from "../SearchBar";



export default function ComplaintArea(props) {
    return (
        <StyledComplaintArea>

            <h1>Pesquise uma empresa para reclamar</h1>
            <p>Qual o nome da empresa?</p>
            <SearchBar prefix="/complain" />

        </StyledComplaintArea>
    );
}