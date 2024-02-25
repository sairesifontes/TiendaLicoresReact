import React from "react"

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {
    
    
    return(

        <div className='flex flex-col'>
            <div className='flex justify-center gap-2'>
                <button className=' bg-[#fecaca] rounded-full w-10 m-2' onClick={ handleRestar } > - </button>
                <p className='m-3'>{cantidad}</p>
                <button className=' bg-[#fecaca] rounded-full w-10 m-2' onClick={ handleSumar } > + </button>
                <button className='bg-[#fecaca] w-44 rounded-full m-2' onClick={handleAgregar}>Agregar al Carrito</button>
            </div>
            
            
            
        </div>
    )

}


export default ItemCount