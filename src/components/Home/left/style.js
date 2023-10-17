import styled from "styled-components"

export const Container = styled.div`
    width: 300px;
    height: 100%;
    box-shadow: 0 0 10px #000;
    background-color: rgba(0, 0, 0, 0.9);
    padding:50px;
    padding-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    border-radius: 5px;
    color: #fff;

    .logo{
        width: 150px;
        height: 150px;
        object-fit: cover;
        display: flex;
        justify-content: center;
    }

    .btnPlay{
        text-align: center;

        button{
            background-color: rgb(226, 157, 8);
            border: 0;
            color: #fff;
            font-size: 18px;
            padding: 5px 15px;
            margin-top: 20px;
            border-radius: 2px;
            cursor: pointer;
            font-weight: 900;
        }
    }

    .InfoLeft{
        .containerItemMenu{
            margin-top: 30px;

            ul{
                margin-left: 10px;
            }
            li{
                margin-top: 5px;
            }
            li{
                color: #fff;
                text-decoration: none;
                cursor: pointer;
            }
            li:hover{
                text-decoration: underline;
            }
        }

        h3{
            color: #fff;
        }
    }

`