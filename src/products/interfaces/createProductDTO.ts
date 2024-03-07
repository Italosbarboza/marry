export interface ProductDTO {
  id: number;
  name: string;
  description: string;
  images: string[];
  price: number;
  isProrate: boolean;
  isAvailable: boolean;
  categoryId: number;
  userId: number;
}
