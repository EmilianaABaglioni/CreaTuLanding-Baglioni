import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../utils/data";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts().then((products) => {
      if (categoryId) {
        const filteredProducts = products.filter(
          (product) => product.category === categoryId
        );
        setItems(filteredProducts);
        setLoading(false);
      } else {
        setItems(products);
        setLoading(false);
      }
    });
  }, [categoryId]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <ItemList itemList={items} />
    </>
  );
};

export default ItemListContainer;
