import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL} from "../consts";

const prepareHeaders = (headers, {getState}) => {
    const token = getState().login.token;
    if (token) {
        headers.set('Authorization', `${token}`);
    }
    return headers;
};
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders,
    }),
    tagTypes: ['Portfolios'],
    endpoints: (builder) => ({
        getPortfolios: builder.query({
            query: () => '/portfolio/all',
            providesTags: ['Portfolios']
        })
    })
});

export const {useGetPortfoliosQuery} = apiSlice;
