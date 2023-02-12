import { ProductType } from "types/Product";

const Actions = {
  GET_PRODUCTS,
  GET_PRODUCT,
  FILTER_PRODUCTS,
  FILTER_BY_ELEMENT,
} as const

type ActionTypes = typeof Actions;

interface GetProducts {
  type: ActionTypes['GET_PRODUCTS'],
  payload: ProductType[];
}

interface GetProduct {
  type: ActionTypes['FILTER_PRODUCT'],
  payload: ProductType;
}

interface FilterProducts {
  type: ActionTypes['FILTER_PRODUCTS'],
  payload: ProductType[];
}

interface FilterByElement {
  type: ActionTypes['FILTER_BY_ELEMENT'],
  payload: ProductType[];
}

export type DispatchProducts = StoreDispatch<GetProducts, ProductType[]>;
export type DispatchProduct = StoreDispatch<GetProduct, ProductType>;
export type DispatchFilter = StoreDispatch<FilterProducts, ProductType[]>;
export type DispatchFilterByElement = StoreDispatch<FilterByElement, ProductType[]>;