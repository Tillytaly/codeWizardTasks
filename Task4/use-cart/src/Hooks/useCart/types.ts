export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Cart<T> {
  id: string;
  products: T[];
  totalPrice: number;
}

export interface ChangeQuantity {
  productId: string;
  quantity: number;
}
interface ChangeQuantityPayload {
  productIndex: number;
  quantity: number;
}

type Action =
  | { type: "ADD_PRODUCT"; product: Product }
  | { type: "INCREASE_BY_ONE"; productIndex: number }
  | { type: "REMOVE_PRODUCT"; productIndex: number }
  | { type: "DECREASE_BY_ONE"; productIndex: number }
  | { type: "CHANGE_QUANTITY"; payload: ChangeQuantityPayload };

export type Reducer = (state: Cart<Product>, action: Action) => Cart<Product>;
