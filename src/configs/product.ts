export interface GetAllProductOption {
  name?: string;
  page: number;
  limit: number;
}

export enum ProductStatus {
  SELLOUT = 'SELLOUT',
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export enum ProductLabel {
  BESTSELLER = 'BESTSELLER',
  POPULAR = 'POPULAR',
  NEW = 'NEW',
}

export interface Options {
  valueId: number;
  optionId: number;
  price: number;
}

export interface OptionsUpdate {
  productOtionId: number;
  valueId: number;
  optionId: number;
  price: number;
}