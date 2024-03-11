import styled from "styled-components";


export const StyledHomeUser = styled.div`


    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 1;
 
    p{
        word-break: break-all;
        hyphens: auto;
        overflow-wrap: break-word;
    }
    
    div{
        
        
        section{
            width: 60dvw;
            gap: 1dvh;
               
        }
        section:nth-child(1){
            
            min-height: 10dvh;
            gap: 1dvh;
            display: flex;
            flex-direction: column;

           
            
            article:nth-child(1){
                padding: 0.5dvh;
                display: flex;
                flex-direction: column;
                gap: 1dvh;

                
                h2{
                    font-size: 3dvh;

                }

                p{
                    color: #989898;
                    font-weight: 500;
                    font-size: 1.5dvh;
                  
                }
            }

            article:nth-child(2){
                display: flex;
                flex-direction: column;
                background-color: #FAFAFA;
                padding: 2dvh;
                border-radius: 1dvh;
                gap: 1dvh;

                .container{
                    display: flex;
                    flex-direction: row;
                    gap: 1dvh;


                    img{
                        object-fit: contain;
                        background-color: rgb(237, 237, 237);
                    }
 
                }
                .info{
                    display: flex;
                    flex-direction: column;

                    h2{
                        color: #212121;
                    }
                }

                .desc{
        
                    display: flex;
                    flex-direction: column;
                    gap: 1dvh;

                    p:nth-child(1){
                        color: #212121;
                        font-weight: 500;
                        font-size: 2dvh;
                    }
                    p:nth-child(2){
                        color: #484848;
                        font-weight: 500;
                        font-size: 1.6dvh;
                    }
                }


                img{

                    width: 10dvh;
                    height: 10dvh;
                    padding: 1dvh;
                    border-radius: 0.8dvh;
                    background-color: #212121;
                    aspect-ratio: 1/1;
                    //object-fit: cover;
                }

                div{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                   

                    h2{
                        padding: 0.3dvh;
                        font-size: 2.5dvh;
                    }
                    div{
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(30dvh, 1fr));
                        width: 100%;
                        justify-content: space-between;
                        padding: 0.2dvh;
                        color: #9E9E9E;
                        gap: 1dvh;

                        p{
                            font-weight: 500;
                            font-size: 1.5dvh;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 785px) {
        .container{
            flex-direction: column;
            img{
                display: none;
            }
        }
    }
`;