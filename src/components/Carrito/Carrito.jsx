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
        <div className='flex flex-col items-center gap-4'>
            <h1 className="text-3xl mt-5">Carrito</h1>

            <div className='flex flex-wrap justify-center'>
                {
                    carrito.map((licor) => (
                        <div className='flex items-center m-5 p-2.5 border-solid rounded-md bg-[#fecaca] gap-20 text-center' key={licor.id}>
                            <div>
                            <img className='italic w-28 h-auto ml-2.5' src={`/img/${licor.imagen}`} alt={licor.nombre}/>
                            <h3 className='italic font-semibold'>{licor.nombre}</h3>
                            </div>
                            
                            <p className='gap-16 italic'>Precio Unitario: ${licor.precio}</p>
                            <p className='gap-16 italic'>Precio Total: ${licor.precio * licor.cantidad}</p>
                            <p className='gap-16 italic'>Cantidad: {licor.cantidad}</p>
                        
                        </div>
                    

                    ))

                }
            </div>

            {  carrito.length > 0 ? 
                <div className='w-2/4 flex justify-around mb-8'> 
                    <h2 className='italic font-semibold' >Total a pagar: ${precioTotal()}</h2>
                    <button className='italic font-semibold' onClick={handleVaciar}>Vaciar</button>
                </div> : 
                <h2 className='mt-5'>El carrito está vacio</h2>
            }    

        </div>
    )
}

export default Carrito