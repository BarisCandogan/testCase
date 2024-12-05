import {EndpointBuilder} from '@reduxjs/toolkit/query';
import {SliderModel} from '../models/slider.model';
import {apiService} from '../request';

export const sliderEndpoints = (builder: EndpointBuilder<any, any, any>) => ({
  getSliders: builder.query<SliderModel[], void>({
    query: () => '/sliders',
  }),
});

const extendedApi = apiService.injectEndpoints({
  endpoints: sliderEndpoints,
});

export const {useGetSlidersQuery} = extendedApi;
