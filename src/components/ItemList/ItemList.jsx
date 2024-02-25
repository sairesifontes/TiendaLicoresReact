import Item from "../Item/Item"

const ItemList = ( { licores, titulo } ) => {

    return (
        <>
            <hr/>
            <h2 className="m-14 text-3xl italic text-center ">{titulo}</h2>


            <div className="flex flex-wrap m-8">
                { licores.map((lic) => <Item licor={lic} key={lic.id} />) }
            </div>
            
        </>
    )
}

export default ItemList