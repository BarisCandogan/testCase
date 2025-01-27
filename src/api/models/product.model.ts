export interface ProductModel {
  barcode: string | null;
  brand: string | null;
  brandSortOrder: number | null;
  buyingPrice: number;
  campaignedSortOrder: number | null;
  canonicalUrl: string | null;
  categories: any[];
  categoryShowcaseStatus: number;
  createdAt: string;
  currency: {
    id: number;
    label: string;
    abbr: string;
  };
  customShippingCost: number;
  customShippingDisabled: number;
  detail: {
    id: number;
    details: string;
    extraDetails: string;
  };
  discount: number;
  discountType: number;
  discountedSortOrder: number | null;
  distributor: string | null;
  featuredSortOrder: number | null;
  fullName: string;
  gift: string | null;
  hasGift: number;
  hasOption: number;
  homeSortOrder: number | null;
  id: number;
  images: {
    id: number;
    filename: string;
    extension: string;
    originalUrl: string;
    thumbUrl: string;
  }[];
  installmentThreshold: string;
  marketPriceDetail: string | null;
  metaDescription: string;
  metaKeywords: string;
  midblockSortOrder: number | null;
  moneyOrderDiscount: number;
  name: string;
  newSortOrder: number | null;
  optionGroups: any[];
  pageTitle: string;
  parent: null | number;
  popularSortOrder: number | null;
  price1: number;
  prices: any[];
  sku: string;
  slug: string;
  status: number;
  stockAmount: number;
  stockTypeLabel: string;
  tax: number;
  taxIncluded: number;
  updatedAt: string;
  volumetricWeight: number;
  warranty: number;
}
