import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';


import { CartContext } from '../../CartContext/CartContex';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/data';




const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {
        return (
            <div className="m-10 p-5 text-center">
                <h1 className="p-5 italic font-semibold text-2xl">Muchas gracias por tu compra</h1>
                <p className='italic m-2 font-medium'>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    // Verifica si el carrito está vacío
    if (carrito.length === 0) {
        return (
            <div className="m-10 p-5 text-center">
                <h1 className="p-5 italic text-2xl font-semibold">¡El carrito está vacío!</h1>
                <p className='italic m-2'>Agrega productos al carrito antes de finalizar tu compra.</p>
            </div>
        )
    }

    //Formulario para finalizar compra
    return (
        <div className="m-10 p-5 text-center">
            <h1 className="p-5 italic text-2xl font-semibold">Finalizá tu compra</h1>
            <p className='italic m-2'>LLena los datos del siguiente formulario para finalizar tu compra.</p>
            

            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <input className='italic p-2 m-5 rounded-lg border-solid border-2 border-rose-500' type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input className='italic p-2 m-5 rounded-lg border-2 border-rose-500' type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input className='italic p-2 m-5 rounded-lg border-2 border-rose-500' type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

                <button className=" bg-red-500 p-2 rounded-full hover:bg-red-600" type="submit">Comprar</button>

            </form>
        </div>
    )
}

export default Checkout