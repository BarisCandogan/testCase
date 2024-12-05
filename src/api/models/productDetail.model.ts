export interface ProductDetail {
  details: string;
  extraDetails: string;
  id: number;
  product: {
    image: string;
    fullName: string;
    id: number;
    sku: string;
  };
  sku: string;
}
