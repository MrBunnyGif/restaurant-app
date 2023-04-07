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
  status: 'to-kitchen' | 'on-kitchen' | 'on-client',
  timeDeliveredKitchen?: Date,
}

export interface sliceType {
  productsList: Product[],
  currentBascket: Bascket | undefined
}

export interface ProductsToBeAdded {
  product: Product,
  quantity: number
}

export interface SectionInfo {
  name:string,
  peopleNumber:string,
  startTime: Date,
  tableNumber: number
}