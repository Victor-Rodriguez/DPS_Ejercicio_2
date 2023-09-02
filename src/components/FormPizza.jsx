import React, { useState } from 'react'
import Results from './Results';

const FormPizza = (props) => {
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

    //Eventos de capturas de datos de los inputs
    const handleChangeNombreCliente = e => {
        e.preventDefault();

        setNombreCliente(e.target.value)
    }

    const handleChangeTamanioPizza = e => {
        e.preventDefault();

        setTamanioPizza(e.target.value)
    }

    const handleChangeIngredienteAdd = e => {
        e.preventDefault();

        setIngredienteAdd(e.target.value)
    }

    const calcular = () => {
        let costoIngrediente = 0
        let precioPizza = 0
        if (tamanioPizza === 'Personal') {
            precioPizza = 7
            if (ingredienteAdd == 1) {
                costoIngrediente = 1
            } else if (ingredienteAdd == 2) {
                costoIngrediente = 0.75
            } else if (ingredienteAdd == 3) {
                costoIngrediente = 0.50
            } else if (ingredienteAdd > 3) {
                costoIngrediente = 0.25
            }
        } else if (tamanioPizza === 'Mediana') {
            precioPizza = 10
            if (ingredienteAdd == 1) {
                costoIngrediente = 2
            } else if (ingredienteAdd == 2) {
                costoIngrediente = 1
            } else if (ingredienteAdd == 3) {
                costoIngrediente = 0.75
            } else if (ingredienteAdd > 3) {
                costoIngrediente = 0.50
            }
        } else if (tamanioPizza === 'Grande') {
            precioPizza = 12
            if (ingredienteAdd == 1) {
                costoIngrediente = 2.50
            } else if (ingredienteAdd == 2) {
                costoIngrediente = 2
            } else if (ingredienteAdd == 3) {
                costoIngrediente = 1
            } else if (ingredienteAdd > 3) {
                costoIngrediente = 0.75
            }
        }

        //Calculando costo adicional
        const costoExtra = ingredienteAdd * costoIngrediente
        setCostoAdicional(costoExtra)
        //
        setCostoIngreAdd(costoIngrediente)

        //Calculando total a pagar
        setPrecio(precioPizza)
        setTotal(precioPizza + costoExtra)

    }


    const handleClick = () => {
        return calcular()
    }


    return (
        <>
            <div className='container'>
                <div className="row g-0 py-5">
                    <div className="col-sm-8 col-md-6 mx-5">
                        <h1>Ordene su Pizza</h1>
                        <div className="row justify-content-center">
                            <form onSubmit={e => e.preventDefault()}>
                                <div className="mb-3">
                                    <label htmlFor="nombreCliente" className="form-label">Nombre del Cliente:</label>
                                    <input type="text" className="form-control" name='nombreCliente' onChange={handleChangeNombreCliente} required />
                                </div>
                                <div className="mb-3">
                                    <select className="form-select" name='tamanioPizza' onChange={handleChangeTamanioPizza}>
                                        <option >Seleccione el tamaño</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Mediana">Mediana</option>
                                        <option value="Grande">Grande</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ingredienteAdd" className="form-label">Ingredientes adicionales</label>
                                    <input type="number" min={0} className="form-control" name='ingredienteAdd' onChange={handleChangeIngredienteAdd} />
                                </div>
                                <div className='d-grid gap-2 col-6 mx-auto'>
                                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Ordenar</button>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="col-6 col-md-4 pt-5">
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
                            costoIngreAdd={costoIngreAdd}
                            setCostoIngreAdd={setCostoIngreAdd}
                        />
                    </div>
                </div>


            </div>
        </>
    )
}

export default FormPizza