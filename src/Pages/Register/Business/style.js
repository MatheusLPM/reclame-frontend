import styled from "styled-components";



export const StyledSelect = styled.div`
   
    display: flex;
    justify-content: center;
    align-items: center;


    select{

        border: 2px solid #E0E0E0;
        width: 98%;
        height: 3rem;
        font-size: 1rem;
        border-radius: 0.5rem;
        background-color: transparent;
        color: #9E9E9E;
        padding: 0.5rem;
        
    }

    #opcoes option.placeholder {
      display: none;
    }

`; 