import React from 'react';
import { Link } from 'react-router-dom';


//muestra los productos
const Item = ( {licor} ) => {

    return (
        <div className='flex w-52 m-5 flex-col items-center text-center pb-5 rounded-3xl container mx-auto'>
            <img className='w-40 h-44' src={`/img/${licor.imagen}`} alt={licor.nombre}/>

            <div className='m-5 p-2 items-center'>
                <h3 className='m-2 font-bold'>{licor.nombre}</h3>
                <p className='m-2'>Precio: ${licor.precio}</p>
                <button className='rounded-full bg-[#fecaca] w-24 hover:bg-rose-500'><Link className="ver-mas" to={`/item/${licor.id}`}>Ver más</Link></button>
            </div>
        </div>
    )
}

export default Item
