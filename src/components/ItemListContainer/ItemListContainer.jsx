import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"

import { db } from "../../firebase/data"
import ItemList from "../ItemList/ItemList";



const ItemListContainer = () => {
    
    const [licores, setLicores] = useState ([]);
    const categoria = useParams().categoria
    const [titulo, setTitulo] = useState("Licores")


    useEffect (() => {

        const licoresRef = collection(db, "licores")

        const q = categoria ? query(licoresRef, where("categoria", "==", categoria)) : licoresRef

        const nuevoTitulo = categoria ? categoria : "Licores";
            
        if (nuevoTitulo !== titulo) {
                setTitulo(nuevoTitulo);
            }
        

        getDocs(q)
            .then((resp) => {
                
                setLicores(

                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )

            })

    }, [categoria, titulo])

    return (
        <div>
            <ItemList licores={licores} titulo={titulo}/>
        </div>
    )
}

export default ItemListContainer;
