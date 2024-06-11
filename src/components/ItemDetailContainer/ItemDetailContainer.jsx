import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { getProducts } from "../../utils/data";
import React from "react";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState();
  const { productId } = useParams();

  useEffect(() => {
  }, [productId]);

  return loading ? <Loading /> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;
