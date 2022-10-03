import { useReducer, useCallback } from "react";
import { reducer, findIndexOfProductInCart, initialCartState } from "./utils";
import { Product, ChangeQuantity } from "./types";

function useCart() {
  const [cart, dispatch] = useReducer(reducer, initialCartState);

  const addToCart = useCallback((product: Product) => {
    dispatch({ type: "ADD_PRODUCT", product });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    const productIndex = findIndexOfProductInCart(productId, cart);
    dispatch({ type: "REMOVE_PRODUCT", productIndex });
  }, []);

  const changeQuantity = useCallback(
    ({ productId, quantity }: ChangeQuantity) => {
      if (quantity < 1) return;

      const productIndex = findIndexOfProductInCart(productId, cart);
      const payload = { productIndex, quantity };

      dispatch({ type: "CHANGE_QUANTITY", payload });
    },
    []
  );

  const increaseByOne = useCallback((productId: string) => {
    const productIndex = findIndexOfProductInCart(productId, cart);
    dispatch({ type: "INCREASE_BY_ONE", productIndex });
  }, []);

  const decreaseByOne = useCallback((productId: string) => {
    const productIndex = findIndexOfProductInCart(productId, cart);
    dispatch({ type: "DECREASE_BY_ONE", productIndex });
  }, []);

  return {
    addToCart,
    removeFromCart,
    changeQuantity,
    increaseByOne,
    decreaseByOne,
    cart,
  };
}

export { useCart };
