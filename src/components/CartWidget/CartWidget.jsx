import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';


import cart from './assets/icons8-carrito-de-compras-96.png'
import { CartContext } from '../../CartContext/CartContex';



const CartWidget = () => {

    
    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div className="flex items-center p-8 gap-4 ">
            <Link className="flex gap-2.5" to="/carrito">
                <img className='w-7' src={cart} alt="carrito de compras"/>
                <span className='text-slate-50'>{cantidadEnCarrito()}</span>
            </Link>
            
        </div>
    )
}

export default CartWidget