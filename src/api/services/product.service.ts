import {apiService} from '../request';
import {ProductModel} from '../models/product.model';
import {ProductDetail} from '../models/productDetail.model';
import {EndpointBuilder} from '@reduxjs/toolkit/query';

export const productEndpoints = (builder: EndpointBuilder<any, any, any>) => ({
  getProducts: builder.query<ProductModel[], void>({
    query: () => '/products',
  }),
  getProductDetail: builder.query<ProductDetail, number>({
    query: id => `/product_details/${id}`,
  }),
});

const extendedApi = apiService.injectEndpoints({
  endpoints: productEndpoints,
});

export const {useGetProductsQuery, useGetProductDetailQuery} = extendedApi;
