import {EndpointBuilder} from '@reduxjs/toolkit/query';
import {apiService} from '../request';

export const categoryEndpoints = (builder: EndpointBuilder<any, any, any>) => ({
  searchCategories: builder.query<CategorySearch[], string>({
    query: query => `/categories/search_tree?s=${query}&limit=10`,
  }),
});

const extendedApi = apiService.injectEndpoints({
  endpoints: categoryEndpoints,
});

export const {useSearchCategoriesQuery} = extendedApi;
