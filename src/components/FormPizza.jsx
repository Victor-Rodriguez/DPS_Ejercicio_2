import React from 'react'

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
        setTotal
    } = props;

    const handleChange = e => {
        e.preventDefault();

        setNombreCliente({[e.target.name]: e.target.value})
        /* setIngredienteAdd({[e.target.name]: e.target.value})
        setTamanioPizza({[e.target.name]: e.target.value}) */

        console.log(nombreCliente);
        /* console.log(tamanioPizza);
        console.log(ingredienteAdd); */
    }


    return (
        <>
            <div class='container'>
                <h1>Ordene su Pizza</h1>
                <div class="row justify-content-center">
                    <form onSubmit={e => e.preventDefault()}>
                        <div class="mb-3">
                            <label for="nombreCliente" class="form-label">Nombre del Cliente:</label>
                            <input type="text" class="form-control" name='nombreCliente'  onChange={handleChange} />
                        </div>
                        <div class="mb-3">
                            <select class="form-select" name='tamanioPizza'  >
                                <option selected>Seleccione el tamaño</option>
                                <option value="Personal">Personal</option>
                                <option value="Mediana">Mediana</option>
                                <option value="Grande">Grande</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="ingredienteAdd" class="form-label">Ingredientes adicionales</label>
                            <input type="text" class="form-control" name='ingredienteAdd'  />
                        </div>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default FormPizza