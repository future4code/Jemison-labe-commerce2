import React from "react";
import devastador from "./Img/devastador.png";
import estrela from "./Img/estrela.png";
import executor from "./Img/executor.png";
import millenium from "./Img/millenium.png"
import onibus from "./Img/onibus.png"
import xwing from "./Img/x-wing.png"

export const productList = [
    {
        id:1,
        nome:"Estrela da Morte",
        img: <img src={estrela} alt="Nave - Estrela da morte"/>,
        preco: 20000
    },

    {
        id:2,
        nome:"Executor",
        img: <img src={executor} alt="Nave - Executor"/>,
        preco: 30000.00
    },
    
    {
        id:3,
        nome: "Millennium Falcon",
        img: <img src={millenium} alt="Nave - Millenium Falcon"/>,
        preco: 40000.00
    },
     
    {
        id:4,
        nome: "Devastador",
        img: <img src={devastador} alt="Nave - Devastador"/>,
        preco: 22000.00
    },
     
    {
        id:5,
        nome: "Ônibus Imperial",
        img: <img src={onibus} alt="Nave - Ônibus Imperial"/>,
        preco: 20500.00
    },
       
    {
        id:6,
        nome: "X-Wing",
        img: <img src={xwing} alt="Nave - X-Wing"/>,
        preco: 50000.00
    }

]