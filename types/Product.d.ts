import { Product } from "use-shopping-cart";

export type ProductType = Product & {
  quantity: number;
  id?: string | number;
  category?: string;
  element?: string;
}