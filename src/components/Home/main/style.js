import styled from "styled-components"

export const Container = styled.div`
    width: 40%;
    height: 100%;
    box-shadow: 0 0 10px #000;
    background-color: rgba(0, 0, 0, 0.9);
    padding:50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    border-radius: 5px;
    color: #fff;

    ::-webkit-scrollbar {
        width: 10px;
        border-radius: 15px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: rgba(241, 241, 241);
;
        border-radius: 15px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background-color: rgba(136, 136, 136);
        border-radius: 15px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(85, 85, 85);
    }
`