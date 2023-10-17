import styled from "styled-components"

export const Container = styled.div`
    h2{
        text-align:center;
        font-size: 30px;
    }
    h3{
        font-size: 25px;
        margin-top: 20px;
    }
    .containerAllItems{
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-height: 170px;
        overflow-y: scroll;
        padding: 15px;
        margin: 10px 0;
        .containerItem{
            background-color: #222;
            width: 100%;
            border-radius: 5px;
            padding: 5px;
            display: flex;
            gap: 10px;
            flex-direction: column;
            p{
                font-size: 12px;
            }
            button{
                border: 0;
                background-color: rgba(230, 45, 70, 1);
                padding: 5px;
                font-size: 15px;
                font-weight: 900;
                border-radius: 5px;
                cursor: pointer;
            }
        }
    }
    .containerAllMsgs{
        max-height: 200px;
        overflow-y: scroll;
        padding-right: 30px;
        overflow-x: hidden;
        .containerMsgSupport{
            width: 100%;
            padding: 20px;
            background-color: #333;
            border-radius: 5px;
            margin: 15px 5px;
            h3{
                font-size: 20px;
                font-weight: bold;
            }
            p{
                margin-top: 15px;
                color: white;
                font-size: 15px;
                font-weight: 100;
            }
            p.date{
                margin-top: 15px;
                font-size: 10px;
                text-align: right;
            }
        }
    }
    
`