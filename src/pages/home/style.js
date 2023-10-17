import styled from "styled-components";
import defaultBanner from "../../imgs/defaultBanner.png"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    main{
        display: flex;
        width: 100%;
        gap: 30px;
        justify-content: center;
        padding: 30px;
        
    }
    

    .containerBanner{
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

    

`