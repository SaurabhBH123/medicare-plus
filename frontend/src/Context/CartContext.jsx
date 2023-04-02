import { useDisclosure } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {

  const [cartCount, setCartCount] = useState(false);
  const [token, setToken] = useState("");
//   useEffect(()=>{

//   },[])

  return (
    <CartContext.Provider
      value={{
  
        cartCount,
        setCartCount,
        token,
        setToken,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
