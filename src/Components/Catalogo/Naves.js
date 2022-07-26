import React, {useState} from "react";
import { productList } from "../../productList";
import { CardProd } from "./Card"
import Filtros from "../Filtros/Filtro"
import { Catalogo, Pagina } from "./StyledCatalogo"

export function Naves() {

  const [valorMaximo, setValorMaximo] = useState(1000000)
  const [valorMinimo, setValorMinimo] = useState(0)
  const [busca, setBusca] = useState("")

  const listaNaves = productList
  .filter((product) => {
    return product.nome.toLowerCase().includes(busca)
  })
  .filter((product) => {
    return product.preco >= valorMinimo || valorMinimo === ""
  })
  .filter((product) => {
    return product.preco <= valorMaximo || valorMaximo === ""
  })
  
  .map((product) => {
    
    return <CardProd key={product.id}
     nome={product.nome}
     img={product.img}
     preco={product.preco}
   />
   })

    return (
      <Pagina>
        <Filtros
          valorMaximo={valorMaximo}
          valorMinimo={valorMinimo}
          busca={busca}
          setValorMaximo={setValorMaximo}
          setValorMinimo={setValorMinimo}
          setBusca={setBusca}
        />
        <Catalogo>
          {listaNaves}      
        </Catalogo>
      </Pagina>
  );
}       