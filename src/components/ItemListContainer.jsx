import React from "react";
import ItemList from "./ItemList";
import { Center,CircularProgress } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [loader, setLoader] = useState(true);

  
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "productos");

    setLoader(true)

    getDocs(itemsCollection)
      .then((snapshot) => {
        setProductos(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .finally(() => {
      
        setLoader(false);
      });
  }, []);
  
  const filteredProduct = productos.filter(
    (producto) => producto.categoria == categoria
  );
  

  return (
    <>
      {loader ? (
        <Center>
          <CircularProgress isIndeterminate color="green.300" />
        </Center>
      ) : (
        <Center className="itemListContainer" p="1rem">
          {categoria ? (
            <ItemList productos={filteredProduct} />
          ) : (
            <ItemList productos={productos} />
          )}
        </Center>
      )}
    </>
  );
};

export default ItemListContainer;
