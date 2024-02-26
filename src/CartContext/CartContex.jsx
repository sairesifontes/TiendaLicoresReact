import { createContext, useEffect, useState } from "react";



export const CartContext = createContext()
const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []


export const CartProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState(carritoInicial);

    
    //Agrega prpducto al carrito
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



    //Calcula precio todal del carrito
    const precioTotal = () =>{
        return carrito.reduce(( acc, licor) => acc + licor.precio * licor.cantidad, 0)
    }



    //Vacia el carrito
    const vaciarCarrito = () => {
        setCarrito([])
    }



    //Elimina producto del carrito por su id
    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
        setCarrito(nuevoCarrito);
    };



    // Reduce la cantidad del producto en el carrito
    const reducirCantidad = (id) => {
    const nuevoCarrito = carrito.map((producto) => {
        if (producto.id === id) {
            const nuevaCantidad = producto.cantidad - 1;
            return {
                ...producto,
                cantidad: nuevaCantidad >= 0 ? nuevaCantidad : 0 // Asegurarse de que la cantidad no sea negativa
            };
        }
        return producto;
    });
    setCarrito(nuevoCarrito);
};


     // Aumentar la cantidad de un producto en el carrito por su identificador
    const aumentarCantidad = (id) => {
        const producto = carrito.find((producto) => producto.id === id);
        if (producto && producto.cantidad < producto.stock) {
            const nuevoCarrito = carrito.map((p) =>
                p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
            );
            setCarrito(nuevoCarrito);
        }
    };



    useEffect (() => {

        localStorage.setItem("carrito", JSON.stringify(carrito))
        
    }, [carrito])

    return (
    
        <CartContext.Provider value = { { carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito, eliminarDelCarrito, reducirCantidad, aumentarCantidad } }>
            {children}
        </CartContext.Provider>
    
    )

}