import styled from "styled-components"

export const Container = styled.div`
.containerInformation{
    
    .containerNewInfo{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        background-color: #444;
        padding: 15px;
        gap: 10px;
        border-radius: 5px;
        margin-bottom: 30px;

        h3{
            font-weight: 900;
            text-transform: uppercase;
        }
        form{
            display: flex;
            flex-direction: column;
            gap: 10px;
            input, textarea{
                border-radius: 5px;
                padding: 5px;
                font-size: 18px;
                border: 0;
                background-color: #555;
            }

            textarea{
                width: 100%;
                resize: vertical;
                max-height: 150px;
                min-height: 50px;
            }
            button{
                padding: 10px 15px;
                border-radius: 5px;
                background-color: rgb(226, 157, 8);
                border: 0;
                text-transform: uppercase;
                font-weight: 900;
                cursor: pointer;
                transition: ease-in-out .2s;
            }
            button:hover{
    background-color: rgb(236, 179, 56);
            }
        }
    }
    .containerAllInfo{
        border-top: #ccc solid 1px;
        padding-top: 20px;
        .containerInfo{
            box-shadow: 0 0 10px black;
            padding: 15px;
            margin-top: 15px;
            border-radius: 15px;
            background-color: #333;
            display: flex;
            flex-direction: column;
            gap: 10px;
            h2{
                text-align: center;
                font-size: 25px;
            }

            
        }
    }
    

    
}

`