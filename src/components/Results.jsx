import React from 'react'

const Results = (props) => {
    //Haciendo destructuring para obtener lo que viene por props
    const {
        nombreCliente,
        setNombreCliente,
        tamanioPizza,
        setTamanioPizza,
        precio,
        setPrecio,
        ingredienteAdd,
        setIngredienteAdd,
        costoAdicional,
        setCostoAdicional,
        total,
        setTotal
    } = props;

  return (
    <div>Aquí se mostrarán los datos</div>
  )
}

export default Results