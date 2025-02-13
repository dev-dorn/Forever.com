import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate =useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; // increment quantity if size exists
      } else {
        cartData[itemId][size] = 1; // set quantity to 1 if size does not exist
      }
    } else {
      cartData[itemId] = {}; // initializes item if it does not exist
      cartData[itemId][size] = 1; // set quantity to 1 for the selected size
    }
    setCartItems(cartData); // update the cart items state
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      // Iterate through cart items
      for (const size in cartItems[item]) {
        // Iterate through sizes
        try {
          if (cartItems[item][size] > 0) {
            // Check if quantity is greater than 0
            totalCount += cartItems[item][size]; // Add quantity to total count
          }
        } catch (error) {
          console.error(error); // Log any errors
        }
      }
    }
    return totalCount; // Return total item count
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };
  const getCartAmount =() =>{
    let totalAmount =0;
    for(const items in cartItems){
        let itemInfo = products.find((product)=> product._id === items );
        for(const item in cartItems[items]){
            try{
                if(cartItems[items][item] > 0) {
                    totalAmount += itemInfo.price * cartItems[items][item];

                }
            }catch (error) {

            }
        }
    }
    return totalAmount;
  }




  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
