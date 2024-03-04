import React from "react";


import { StyledComplaint } from "./style";


export default function Complaint(props) {

    return (
        <StyledComplaint>
            <section>
                <div>
                    <p>Nao Respondidas</p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-label="Não Respondidas">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                        </svg>
                        <span>1000</span>
                    </p>
                </div>
                <div>
                    <p>Avaliadas</p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <span>1000</span>
                    </p>
                </div>
                <div>
                    <p>Classificação</p>
                    <p>
                        <span>
                            {props.media}/10
                        </span>
                        <span style={{
                            color: props.color,
                            background: props.background
                        }}>
                            {props.emoji}
                            {props.status}
                        </span>
                    </p>
                </div>
            </section>
        </StyledComplaint>
    );
}