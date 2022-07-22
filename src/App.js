
import React, {useState} from "react";
import Filtros from "./Components/Filtros";
import styled from "styled-components";
import { productList } from "./productList";


const Card = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {

  const [valorMaximo, setValorMaximo] = useState("")
  const [valorMinimo, setValorMinimo] = useState("")
  const [busca, setBusca] = useState("")

  return (
    <Card>   
      <Filtros 
        valorMaximo={valorMaximo}
        valorMinimo={valorMinimo}
        busca={busca}
        setValorMaximo={setValorMaximo}
        setValorMinimo={setValorMinimo}
        setBusca={setBusca}
      />
      { productList.map((product) => (
        <section key={product.id}> 
          <p>{product.nome}</p>
          <p>{product.img}</p>
          <p>{product.preco} </p>
        </section>
      ))}      
    </Card>
  );
}

export default App;
