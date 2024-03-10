import { useEffect, useState } from "react";
import { getProducts } from "../../mock/fakeApi.js";
import ItemDetail from "../itemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({})
    const {itemId} = useParams ()

    useEffect(()=>{
        getProducts()
        .then((res)=> setProducto(res.find((item)=> item.id === itemId)))
        .catch((error)=> console.log(error))
    },[])

    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer