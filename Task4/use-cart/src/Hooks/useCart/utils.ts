import { Cart, Product, Reducer } from "./types";
import { v4 as uuid } from "uuid";
export const initialCartState = {
  id: uuid(),
  products: [],
  totalPrice: 0,
};

export const findIndexOfProductInCart = (
  productId: string,
  cart: Cart<Product>
) => cart.products.findIndex(({ id }) => id === productId);

const updateProductsQuantity = (
  product: Product,
  actionType: string,
  quantity?: number
) => {
  switch (actionType) {
    case "INCREASE_BY_ONE":
      return { ...product, quantity: product.quantity + 1 };
    case "DECREASE_BY_ONE":
      return { ...product, quantity: product.quantity - 1 };
    case "CHANGE_QUANTITY":
      if (!quantity) throw new Error("Quantity must be specified.");
      return { ...product, quantity };
    default:
      throw new Error("Uknown action type.");
  }
};

export const reducer: Reducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.product] };

    case "INCREASE_BY_ONE":
      const productToAdd = state.products[action.productIndex];
      const updatedProduct = updateProductsQuantity(productToAdd, type);
      const totalPrice = state.totalPrice + productToAdd.price;

      return {
        ...state,
        products: [...state.products, updatedProduct],
        totalPrice,
      };

    case "REMOVE_PRODUCT":
      const updatedTotalPrice =
        state.totalPrice - state.products[action.productIndex].price;
      const updatedProducts = state.products.splice(action.productIndex);

      return {
        ...state,
        products: updatedProducts,
        totalPrice: updatedTotalPrice,
      };

    case "DECREASE_BY_ONE":
      const productToDecrease = state.products[action.productIndex];
      const productWithDecreasedQuantity = updateProductsQuantity(
        productToDecrease,
        "DECREASE_BY_ONE",
        1
      );
      const newTotalPrice = state.totalPrice - productToDecrease.price;
      return {
        ...state,
        products: [...state.products, productWithDecreasedQuantity],
        totalPrice: newTotalPrice,
      };
    case "CHANGE_QUANTITY":
      const { productIndex, quantity } = action.payload;
      const productToUpdate = state.products[productIndex];
      const productWithChangedQuantity = updateProductsQuantity(
        productToUpdate,
        type,
        quantity
      );

      return {
        ...state,
        products: [...state.products, productWithChangedQuantity],
      };

    default:
      return initialCartState;
  }
};
