import React, { useContext } from 'react'

import { CartContext } from '../../CartContext/CartContex'
import { Link } from 'react-router-dom'



const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito, eliminarDelCarrito, reducirCantidad, aumentarCantidad } = useContext(CartContext)

    const handleVaciar = () =>{
        vaciarCarrito()
    }

    const handleEliminarProducto = (id) => {
        eliminarDelCarrito(id);
    };

    const handleReducirCantidad = (id) => {
        reducirCantidad(id)
    };

    const handleAumentarCantidad = (id) => {
        aumentarCantidad(id)
    }


    return (
        <div className='flex flex-col items-center gap-4'>
            <h1 className="text-3xl mt-5">Carrito</h1>

            {/* Productos en el carrito */}
            <div className='flex flex-wrap justify-center'>
                {
                    carrito.map((licor) => (
                        <div className='flex items-center m-5 p-2.5 border-solid rounded-md bg-[#fecaca] gap-20 text-center' key={licor.id}>
                            <div>
                                <img className='italic w-28 h-auto ml-7' src={`/img/${licor.imagen}`} alt={licor.nombre}/>
                                <h3 className='italic font-semibold'>{licor.nombre}</h3>
                            </div>
                            
                            <p className='gap-16 italic'><strong>Precio Unitario: </strong>${licor.precio}</p>
                            <p className='gap-16 italic'><strong>Precio Total: </strong>${licor.precio * licor.cantidad}</p>
                            <button className="italic font-semibold bg-red-500 p-2 rounded-full hover:bg-red-600" onClick={() => handleReducirCantidad(licor.id)}>-</button>
                            <p className='gap-12 italic'><strong>Cantidad: </strong>{licor.cantidad}</p>
                            <button className="italic font-semibold bg-red-500 p-2 rounded-full hover:bg-red-600" onClick={() => handleAumentarCantidad(licor.id)}>+</button>
                            <button className="italic font-semibold bg-red-500 rounded-md hover:bg-red-600 mr-5" onClick={() => handleEliminarProducto(licor.id)}>Eliminar del carrito</button>
                        
                        </div>
                    
                    ))

                }
            </div>

            
            {/*Si hay productos en el carrito  */}
            {  carrito.length > 0 ? 
                <div className='w-2/4 flex justify-around mb-8'> 
                    <button className='italic font-semibold bg-rose-300 border-double border-2 p-1 rounded-full hover:bg-rose-500' onClick={handleVaciar}>Vaciar</button>
                    <h2 className='italic font-semibold' >Total a pagar: ${precioTotal()}</h2>
                    <Link className='italic font-semibold bg-rose-300 border-double border-2 p-1 rounded-full hover:bg-rose-500' to="/checkout">Finalizar compra</Link>
                </div> : 
                <h2 className='m-5 p-5 italic font-semibold'>El carrito está vacio</h2>
            }    

        </div>
    )
}

export default Carrito