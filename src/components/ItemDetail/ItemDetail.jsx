import { useContext, useState } from "react"


import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../CartContext/CartContex"


const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext)
    console.log(carrito)
    

    const [cantidad, setCantidad] = useState(1)

    const handleRestar = () => {
        cantidad > 1 && setCantidad (cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad (cantidad + 1)
    }


    return (

        <div className="flex justify-center container mt-5">
            <div className="rounded-3xl w-2/3 m-5">
                <div className="flex-row flex text-center w-96 mt-16 p-5">
                    <img className='w-96 h-96' src={`/img/${item.imagen}`} alt={item.nombre}/>
                    <div>
                        <h3 className="text-2xl font-medium bg-[#66101F] text-slate-50">{item.nombre}</h3>
                        <p className="w-96 mt-3.5"><i><u>Descripción:</u>  </i>{item.descripcion}</p>
                        <p className="mt-3.5"><i><u>Categoria:</u>  </i>{item.categoria}</p>
                        <p className="mt-2.5 text-lg font-medium">$ {item.precio}</p>
                        <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={() => {agregarAlCarrito(item, cantidad)} }/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail