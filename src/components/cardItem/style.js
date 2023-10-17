import styled from "styled-components"

export const Container = styled.div`
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
`