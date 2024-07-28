import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { productId } = useParams();


  useEffect(() => {
    setLoading(true)

    const getData = async () => {

      const queryRef = doc(db, 'products', productId)

      const response = await getDoc(queryRef)

      const newItem = {
        ...response.data(),
        id: response.id
      }

      setProduct(newItem)
      setLoading(false)
    }

    getData()

  }, [productId]);

  return (
    <>
      {
        loading ? <Loading /> : <ItemDetail {...product} />
      }
    </>
  )


};

export default ItemDetailContainer;
