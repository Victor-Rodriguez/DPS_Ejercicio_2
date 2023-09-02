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
        setTotal,
        costoIngreAdd,
        setCostoIngreAdd
    } = props;

    return (
        <>
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th scope="col">Concepto</th>
                        <th scope="col">Contenido</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Nombre del cliente</th>
                        <td>{nombreCliente}</td>
                    </tr>
                    <tr>
                        <th scope="row">Valor de pizza {props.tamanioPizza}</th>
                        <td>${precio}</td>
                    </tr>

                    <tr>
                        <th scope="row">Cant. ingredientes</th>
                        <td>{ingredienteAdd} ingredientes adicionales</td>
                    </tr>

                    <tr>
                        <th scope="row">Costo extra por cada ingrediente adicional</th>
                        <td>${costoIngreAdd}</td>
                    </tr>

                    <tr>
                        <th scope="row">Costo extra adicional </th>
                        <td>${costoAdicional}</td>
                    </tr>

                    <tr>
                        <th scope="row">Precio total</th>
                        <td>${total}</td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}
/*
          <tr>
            <th scope="row">Costo extra por cada ingrediente adicional</th>
            <td>${props.costoIngreAdd}</td>
          </tr>
*/
export default Results