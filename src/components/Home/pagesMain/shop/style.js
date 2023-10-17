import styled from "styled-components"

export const Container = styled.div`
    h2{
        text-align: center;
        font-size: 25px;
        font-weight: 900;
        text-transform: uppercase;
    }
    .cotainerItems{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 30px;
        max-height: 600px;
        overflow-y: scroll;
        padding: 10px;
        gap: 30px;
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
`