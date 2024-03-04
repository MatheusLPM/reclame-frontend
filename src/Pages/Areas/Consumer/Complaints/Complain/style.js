import styled from "styled-components";




export const StyledComplainForm = styled.form`
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60dvw;
    row-gap: 1dvh;
    color: #212121;
    background-color: #FAFAFA;
    padding: 4dvh;
    margin-top: 2dvh;
    border-radius: 1.3dvh;
    flex: 1;
    margin-bottom: 4dvh;

    .loading{

        width: 100dvh;
        min-height: 90dvh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        //background-color: #212121;
        opacity: 0.5;

    }

    div{
        
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 0.5rem;
    }

    div:nth-child(1){
        

        h1{
            font-size: 3.5dvh;
        }

        p{
            font-size: 1.5dvh;
            color: #989898;
            font-weight: 500;
        }
    }

    div:nth-child(2){
        gap: 2dvh;
    }


    label{
        padding: 0.5rem;
        display: block;
        width: 100%;
        font-size: 1.5dvh;
        font-weight: 500;
    }
    input{

        width: 100%;
        min-height: 3.5dvh;
        border-radius: 0.8dvh;
        border: 0.3dvh solid #E0E0E0;
        background-color: transparent;
        padding: 1dvh;
        vertical-align: top;
        font-size: 1.5dvh;
    }

    .desc{

        width: 100%;
        height: 30dvh;
        resize: none;
        min-height: 3.5dvh;
        border-radius: 0.8dvh;
        border: 0.3dvh solid #E0E0E0;
        background-color: transparent;
        padding: 0.5rem;
        font-size: 1rem;
        vertical-align: top;
        font-size: 1.5dvh;
    }

    .desc:focus{
        outline: none;
        border: 0.3dvh solid #000;
    }

    .desc::placeholder{
        color: #9E9E9E ;
    }

    label{
        display: block;
        width: 100%;
        padding: 0;
    }


    input:focus{
        outline: none;
        border: 0.3dvh solid #000;
    }

    input::placeholder{
        color: #9E9E9E ;
    }

    select{
        border: 0.3dvh solid #E0E0E0;
        width: 100%;
        min-height: 3.5dvh;
        font-size: 1.5dvh;
        border-radius: 0.8dvh;
        background-color: transparent;
        color: #9E9E9E;
        padding: 1dvh;
    }

    select:focus{
        border: 0.3dvh solid #000;
    }

    select:after {
        border: 1px solid red;
        color: #000;
    }

    .select-options{
        color: #000;
    }


    button{
        width: 18dvh;
        height: 4dvh;
        font-size: 1.5dvh;
        cursor: pointer;
        align-self: flex-end;
        color: #fff;
        background-color: #000;
        border: none;
        border-radius: 1dvh;
        margin-top: 3dvh;
    }

    button:hover{
        opacity: 0.9;
    }



`;

