import React from "react";
import {Inputs} from "./style"

function Filtros(props){
   const {
    valorMaximo, setValorMaximo, valorMinimo, setValorMinimo, busca, setBusca
   } = props

    function valorMax (event) {
        setValorMaximo(event.target.value);
    }
    function valorMin (event) {
        setValorMinimo(event.target.value);
    }
    function filtroBusca (event) {
        setBusca(event.target.value);
    }
    return(
        <div>
            <Inputs>
                <label for="valor máximo"> Valor máximo: </label>
                <input name="valor máximo" value={valorMaximo} type="number" onChange={valorMax}/>

                <label for="valor mínimo"> Valor mínimo: </label>
                <input name="valor mínimo" value={valorMinimo} type="number" onChange={valorMin}/>

                <label for="busca"> Busca: </label>
                <input name="busca" value={busca} onChange={filtroBusca}/>
            </Inputs>
        </div>
    )
}
export default Filtros;