import React from 'react'
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


    const handleClick = () => {
        //Validaciones
        if (tamanioPizza === 'Personal') {
            setPrecio(7)
            if (ingredienteAdd == 1) {
                setCostoIngreAdd(1)
            }else if (ingredienteAdd == 2){
                setCostoIngreAdd(0.75)
            }else if (ingredienteAdd == 3){
                setCostoIngreAdd(0.50)
            }else if (ingredienteAdd > 3) {
                setCostoIngreAdd(0.25)
            }
        }else if (tamanioPizza === 'Mediana') {
            setPrecio(10)
            if (ingredienteAdd == 1) {
                setCostoIngreAdd(2)
            }else if (ingredienteAdd == 2){
                setCostoIngreAdd(1)
            }else if (ingredienteAdd == 3){
                setCostoIngreAdd(0.75)
            }else if (ingredienteAdd > 3) {
                setCostoIngreAdd(0.50)
            }
        }else if (tamanioPizza === 'Grande') {
            setPrecio(12)
            if (ingredienteAdd == 1) {
                setCostoIngreAdd(2.50)
            }else if (ingredienteAdd == 2){
                setCostoIngreAdd(2)
            }else if (ingredienteAdd == 3){
                setCostoIngreAdd(1)
            }else if (ingredienteAdd > 3) {
                setCostoIngreAdd(0.75)
            }
        }

        //Calculando costo adicional
        setCostoAdicional(ingredienteAdd * costoIngreAdd)
        //Calculando total a pagar
        setTotal(precio + costoAdicional)

        console.log(nombreCliente);
        console.log(ingredienteAdd);
        console.log(tamanioPizza);

    }


    return (
        <>
            <div className='container'>
                <h1>Ordene su Pizza</h1>
                <div className="row justify-content-center">
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="mb-3">
                            <label htmlFor="nombreCliente" className="form-label">Nombre del Cliente:</label>
                            <input type="text" className="form-control" name='nombreCliente'  onChange={handleChangeNombreCliente} />
                        </div>
                        <div className="mb-3">
                            <select className="form-select" name='tamanioPizza'  onChange={handleChangeTamanioPizza}>
                                <option >Seleccione el tamaño</option>
                                <option value="Personal">Personal</option>
                                <option value="Mediana">Mediana</option>
                                <option value="Grande">Grande</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ingredienteAdd" className="form-label">Ingredientes adicionales</label>
                            <input type="text" className="form-control" name='ingredienteAdd' onChange={handleChangeIngredienteAdd}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleClick} >Enviar</button>
                    </form>

                </div>
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
        </>
    )
}

export default FormPizza