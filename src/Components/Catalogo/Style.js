import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1%;
    margin-top: 1%;
    margin-left: 1%;
    width: 100%;
    height: auto;
    box-shadow: 2px 2px 5px 2px Lightgray;
    text-align: center;
    align-items: center;
    background-color: white;
    border-radius:10px;
`

export const Imagem = styled.div`
    object-fit: contain;
    img{
        width: 40%;
    }
`
