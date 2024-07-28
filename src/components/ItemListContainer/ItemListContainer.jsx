import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";
import { db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)

    const getData = async () => {
      const coleccion = collection(db, 'products')
      const queryRef = !categoryId ?
        coleccion
        :
        query(coleccion, where('category', '==', categoryId))

      const response = await getDocs(queryRef)

      const products = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id
        }
        return newItem
      })

      setItems(products)
      setLoading(false)
    }

      getData()

    }, [categoryId]);


  return loading ? (
    <Loading />
  ) : (
    <ItemList itemList={items} />
  );
};

export default ItemListContainer;
