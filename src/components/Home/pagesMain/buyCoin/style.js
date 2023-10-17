import styled from "styled-components"

export const Container = styled.div`
    .containerAllPackages{
        display: flex;
        gap: 20px;
        .containerPackage{
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 33%;
            gap: 10px;
            img{
                width: 70%;
                border-radius: 10px;
            }
            p{
                font-size: 15px;
                font-weight: 900;
                text-align: center;
            }
            button{
                border: 0;
                padding: 5px 10px;
                border-radius: 5px;
                background-color: rgb(49, 194, 114);
                font-weight: 900;
                text-transform: uppercase;
                cursor: pointer;
            }
        }
    }
    
`