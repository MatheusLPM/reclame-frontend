import React, { useState } from "react";
import { StyledButtonRank, StyledRank } from "./style";






export default function Rank(props) {

    const [selectRank, setSelectRank] = useState("0");

    const handleSelectRank = (item) => {
        setSelectRank(item);
    }


    const handleSendRank = (item, props) => {
        console.log("nota:", item)
        console.log("pai:", props.reclamacao)


    }

    console.log(selectRank)

    return (
        <StyledRank className="rank">
            <h2>Avalie a resposta da empresa</h2>
            <div className="rank-container">
                <div className="rank-numbers">
                    {props.rank.map((item) => (
                        <StyledButtonRank rank={selectRank == item}
                            key={item}
                            onClick={() => handleSelectRank(item)}
                        >
                            {item}
                        </StyledButtonRank>
                    ))}
                </div>
                <div className="rate">
                    <p>muito baixo</p>
                    <p>muito alto</p>
                </div>
            </div>
            <div className="response-button">
                <button className="send-button" onClick={(e) => handleSendRank(selectRank)}>Enviar Avaliação</button>
            </div>
        </StyledRank>
    )
}