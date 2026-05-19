export interface ProductData {
  title: string;
  price: number;
  oldPrice?: number;
  discount?: number;

  rating?: number;
  reviews?: number;

  image?: string;

  url: string;
  store: string;
}