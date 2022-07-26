import React from "react";
import {Card, Imagem} from "./Style";


export function CardProd ({ nome, preco, img }){
    
    return(
            <Card>
                <p>{nome}</p>
                <Imagem>
                    <p>{img}</p>
                </Imagem>
                <p>R$ {preco}</p>
            </Card>
    );
}