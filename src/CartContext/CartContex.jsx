import { createContext, useEffect, useState } from "react";



export const CartContext = createContext()

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []


export const CartProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState(carritoInicial);

    

    const agregarAlCarrito = (item, cantidad) => {

        const itemAgregado = {...item, cantidad}
    
        const nuevoCarrito = [...carrito]
        const estaEnCarrito = nuevoCarrito.find((licor) => licor.id === itemAgregado.id)


        estaEnCarrito ? estaEnCarrito.cantidad += cantidad : nuevoCarrito.push(itemAgregado)
        
        setCarrito(nuevoCarrito)
        
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, licor) => acc + licor.cantidad, 0)
    }

    const precioTotal = () =>{
        return carrito.reduce(( acc, licor) => acc + licor.precio * licor.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    useEffect (() => {

        localStorage.setItem("carrito", JSON.stringify(carrito))
        
    }, [carrito])

    return (
    
        <CartContext.Provider value = { { carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito } }>
            {children}
        </CartContext.Provider>
    
    )

}