import React from "react"


//muestra el producto para aumentar o reducir la cantidad
const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {
        
    return(

        <div className='flex flex-col'>
            <div className='flex justify-center gap-2'>
                <button className=' bg-[#fecaca] rounded-full w-10 m-2 hover:bg-rose-500 font-semibold' onClick={ handleRestar } > - </button>
                <p className='m-4 font-semibold'>{cantidad}</p>
                <button className=' bg-[#fecaca] rounded-full w-10 m-2 hover:bg-rose-500 font-semibold' onClick={ handleSumar } > + </button>
                <button className='bg-[#fecaca] w-44 rounded-full m-2 hover:bg-rose-500' onClick={handleAgregar}>Agregar al Carrito</button>
            </div>
        </div>
    )

}


export default ItemCount