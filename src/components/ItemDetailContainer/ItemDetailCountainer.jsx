import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


import ItemDetail from "../ItemDetail/ItemDetail"
import { db } from "../../firebase/data"
import { doc, getDoc } from "firebase/firestore"



const ItemDetailContainer = () => {
    
    const [item, setItem] = useState(null)
    const id = useParams().id


    //Obtenemos los datos de firebase
    useEffect(() => {

        const docRef = doc(db, "licores", id)
        getDoc(docRef)
            .then((resp) => {
                setItem(
                {...resp.data(), id: resp.id})
            })

    }, [id] ) 



    return (
        <div>
            { item && <ItemDetail item={item} />}
        </div>
    )

}


export default ItemDetailContainer
