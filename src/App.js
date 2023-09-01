import { useState } from "react";
import FormPizza from './components/FormPizza';
import Results from "./components/Results";

function App() {
  const [nombreCliente, setNombreCliente] = useState('')
  const [tamanioPizza, setTamanioPizza] = useState('')
  const [precio, setPrecio] = useState(0)
  const [ingredienteAdd, setIngredienteAdd] = useState(0)
  const [costoAdicional, setCostoAdicional] = useState(0)
  const [total, setTotal] = useState(0)

  return (
    <div className="container">
      <FormPizza
        nombreCliente={nombreCliente}
        setNombreCliente={setNombreCliente}
        tamanioPizza={tamanioPizza}
        setTamanioPizza={setTamanioPizza}
        precio={precio}
        setPrecio={setPrecio}
        ingredienteAdd={ingredienteAdd}
        setIngredienteAdd={setIngredienteAdd}
        costoAdicional={costoAdicional}
        setCostoAdicional={setCostoAdicional}
        total={total}
        setTotal={setTotal}
      />

      <Results
        nombreCliente={nombreCliente}
        setNombreCliente={setNombreCliente}
        tamanioPizza={tamanioPizza}
        setTamanioPizza={setTamanioPizza}
        precio={precio}
        setPrecio={setPrecio}
        ingredienteAdd={ingredienteAdd}
        setIngredienteAdd={setIngredienteAdd}
        costoAdicional={costoAdicional}
        setCostoAdicional={setCostoAdicional}
        total={total}
        setTotal={setTotal}
      />
    </div>
  );
}

export default App;
