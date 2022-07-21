
import React, {useState} from "react";
import Filtros from "./Components/Filtros";
import { productList } from "./productList";



function App() {

  const [valorMaximo, setValorMaximo] = useState("")
  const [valorMinimo, setValorMinimo] = useState("")
  const [busca, setBusca] = useState("")

  return (
    <div>   
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
    </div>
  );
}

export default App;
