import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { getProductById } from "../../utils/data";


const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { productId } = useParams();


  useEffect(() => {  
    setLoading(true)

    getProductById(productId)
      .then((info) => setProduct(info))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false)) 

  }, [productId]);

  console.log(product)

  return (
    <>
      {
        loading ? <Loading /> : <ItemDetail {...product} /> 
      }
    </>
  )


};

export default ItemDetailContainer;
