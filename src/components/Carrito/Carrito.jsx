import React, { useContext } from 'react'

import { CartContext } from '../../CartContext/CartContex'

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleVaciar = () =>{
        vaciarCarrito()
    }

    const handleEliminarProducto = (id) => {
        handleEliminarProducto(id);
    };

    const handleReducirCantidad = (id) => {
        handleReducirCantidad(id)
    };


    return (
        <div className='container'>
            <h1 className="titiulo-carrito">Carrito</h1>

            <div className='productos-en-carrito'>
                {
                    carrito.map((licor) => (
                        <div className='contenedor-descripcion' key={licor.id}>
                            <div>
                            <img className='imagen-licor-carrito' src={`/img/${licor.imagen}`} alt={licor.nombre}/>
                            <h3 className='nombre-licor'>{licor.nombre}</h3>
                            </div>
                            
                            <p className='espacio-descripcion'>Precio Unitario: ${licor.precio}</p>
                            <p className='espacio-descripcion'>Precio Total: ${licor.precio * licor.cantidad}</p>
                            <p className='espacio-descripcion'>Cantidad: {licor.cantidad}</p>
                        
                        </div>
                    

                    ))

                }
            </div>

            {  carrito.length > 0 ? 
                <div className='botones-carrito'> 
                    <button onClick={handleVaciar}>Vaciar</button>
                    
                </div> : 
                <h2 className='titiulo-carrito'>El carrito está vacio</h2>
            }    

        </div>
    )
}

export default Carrito