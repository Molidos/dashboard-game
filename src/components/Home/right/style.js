import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 100%;
    box-shadow: 0 0 10px #000;
    background-color: rgba(0, 0, 0, 0.9);
    padding:50px;
    display: flex;
    align-items: left;
    flex-direction: column;
    gap: 10px;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    
    .playerLevel{
        h2{
            
            font-family: 'Bebas Neue', sans-serif;
        }
    }

    .containerShop{
        margin-top: 10px;
        button{
            margin-top: 20px;
            border: 0;
            color: #fff;
            background-color: rgb(49, 194, 114);
            font-weight: bold;
            padding: 5px 10px;
            border-radius: 5px;
            text-transform: uppercase;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            cursor: pointer;

            img{
                width: 50px;
            }
        }
    }

    .containerAdmin{
        border-top: solid #ccc 1px;
        padding-top: 30px;
        button{
            margin-top: 30px;
            border: 0;
            padding: 10px 15px;
            font-size: 20px;
            font-weight: 900;
            border-radius: 5px;
            background-color: rgba(230, 45, 70, 1);
            color: #fff;
            cursor: pointer;
        }
        button:hover{
            background-color: rgba(238, 91, 110);
        }


        .createItems{
            margin-top: 30px;

            input{
                border-radius: 5px;
                padding: 5px;
                border: 0;
                margin-top: 15px;
            }

            .btnCreateItem{
                width: 100%;
                display: flex;
                justify-content: center;
            }

            button{
                border: 0;
                margin: 15px 0;
                padding: 10px 15px;
                border-radius: 5px;
                cursor: pointer;
                text-transform: uppercase;
                font-size: 18px;
                background-color: rgb(226, 157, 8);
                color: #fff;
                font-weight: 900;
            }
        }
    }

    
`