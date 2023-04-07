export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface Bascket {
  id: string,
  products: Product[],
  status: string,
  timeDeliveredKitchen: Date | undefined,
}

export interface sliceType {
  productsList: Product[],
  currentBascket: Bascket | undefined
}