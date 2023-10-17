import styled from "styled-components"

export const Container = styled.div`
    
    h1{
        text-align: center;
    }
    
    .userContent{
        gap: 50px;
        .myItems{
            h3{
                font-size: 20px;
                color: rgb(49, 194, 114);
                text-transform: uppercase;
                font-weight: 900;
                margin-top: 15px;
            }
            .containerAllItems{
                display: flex;
                max-height: 600px;
                gap: 30px;
                margin-top: 15px;
                flex-wrap: wrap;
                overflow-y: scroll;
                padding: 10px;

                .containerItem{
                    display: flex;
                    flex-direction: column;
                    width: calc(30% - 20px);
                    gap: 20px;
                    justify-content: space-between;
                    img{
                        height: 180px;
                        object-fit: cover;
                        border-radius: 5px;
                    }
                    p{
                        font-weight: 900;
                        text-align: center;
                        text-transform: uppercase;
                    }
                    button{
                        border: 0;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-weight: 900;
                        font-size: 20px;
                        background-color: rgba(230, 45, 70, 1);
                        cursor: pointer;
                    }
                    button:hover{
                        
                        background-color: rgba(238, 91, 110);
                    }
                }
            }
            
        }
        .containerWallet{
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 30px;
            font-size: 20px;
            img{
                width: 50px;
                border-radius: 50px;
            }
        }
    }
`