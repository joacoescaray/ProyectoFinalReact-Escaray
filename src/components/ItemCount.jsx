import { useState, useContext } from "react";
import { Button, Box, Spacer, Flex } from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemCount = ({ producto }) => {
  
  const [count, setCount] = useState(0);
  const { agregarProducto } = useContext(CartContext);

  
  const notify = () =>
    toast(`Agregaste ${count} unidades de ${producto.nombre} a tu carrito`, {
      autoClose: 2000,
      closeOnClick: true,
      theme: "success",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    });

    
  return (
    <Flex>
      <Box>
        <Button
          variant="outline"
          colorScheme="teal"
          
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
          m={1}
        >
          -
        </Button>
        <Button m={1}>{count}</Button>
        <Button
          variant="outline"
          colorScheme="teal"
          onClick={() => setCount(count + 1)}
          m={1}
        >
          +
        </Button>
      </Box>
      <Spacer />
      <Box m={1}>
        <Button
          onClick={() => {
            agregarProducto(producto, count);
            notify();
          }}
        >
          Agregar Al Carrito
        </Button>
        <ToastContainer />
      </Box>
    </Flex>
  );
};

export default ItemCount;
