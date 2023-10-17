import styled from "styled-components"

export const Container = styled.div`
    text-align: center;
    
        
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-transform: uppercase;
    form{
        
        display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: center;
        align-items: center;
        
        textarea{
            width: 150%;
            border-radius: 5px;
            padding: 15px;
            font-size: 18px;
            border: 0;
            resize: vertical;
        }
        button{
            max-width: 200px;
            padding: 10px 15px;
            border: 0;
            background-color: rgba(230, 45, 70, 1);
            border-radius: 5px;
            display: inline-block;
            cursor: pointer;
        }
    }
`