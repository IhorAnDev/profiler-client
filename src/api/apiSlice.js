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
        }),
        getPortfolioImages: builder.query({
            query: (portfolioId) => `image/${portfolioId}/image`,
        }),
        getPortfolioComments: builder.query({
            query: (portfolioId) => `comment/${portfolioId}/comments`,
        }),
        likePortfolio: builder.mutation({
            query: (portfolioId) => ({
                url: `portfolio/${portfolioId}/like`,
                method: 'POST',
            }),
        }),

        getLikeCount: builder.query({
            query: (portfolioId) => `portfolio/${portfolioId}/like-count`,
        }),
    })
});

export const {
    useGetPortfoliosQuery,
    useGetPortfolioImagesQuery,
    useGetPortfolioCommentsQuery,
    useLikePortfolioMutation,
    useGetLikeCountQuery
} = apiSlice;
