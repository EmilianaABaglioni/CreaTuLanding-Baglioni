import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../utils/data";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)

    const productsByCategory = categoryId ? getProductsByCategory(categoryId) : getProducts()
    
    productsByCategory
    .then((info) => setItems(info))
    .catch((e) => console.log(e))
    .finally(() => setLoading(false))

  }, [categoryId]);


  return loading ? (
    <Loading />
  ) : (
      <ItemList itemList={items} />
  );
};

export default ItemListContainer;
