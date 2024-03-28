import { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import { Loader } from '../loader/Loader';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase.js';

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({})
    const {itemId} = useParams ()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

        const referenciaDoc=doc(db,"productos",itemId)
        
        getDoc(referenciaDoc)
        .then((res)=> setProducto({id:res.id, ...res.data()}))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
        },[itemId])

    if(loading){
        return (<Loader/>)
    }

    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer