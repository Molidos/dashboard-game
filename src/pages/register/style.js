import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    .background{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            object-position: center;
            object-fit: cover;
        }
    }
    .form{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
        background-color: rgba(255, 255, 255, 0.7);
        padding: 30px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container-input{
        padding: 5px;

        input{
            padding: 5px;
            border-radius: 5px;
            border: 0;
            background-color: #eee;
        }
    }

    .container-button{
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        text-align: center;

        button{
            border-radius: 5px;
            border: 0;
            padding: 10px;
            background-color: #32a852;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            transition: ease-in-out .2s;
            display: inline-block;
        }
        button:hover{
            background-color: #11c26a;
        }
        
    }
`;