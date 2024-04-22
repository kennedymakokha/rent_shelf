import { apiSlice } from "./apiSlice";
const USER_URL = "/api/sub-categories";

export const subcategoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createsubCategory: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}`,
                method: "POST",
                body: data
            })
        }),
        updatesubCategory: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/${data._id}`,
                method: "PUT",
                body: data
            })
        }),
        fetchsubCategory: builder.query({
            query: () => `${USER_URL}`
        }),
        fetchCategorySubs: builder.query({
            query: (id) => `${USER_URL}/${id}`
        }),
        fetchsingleSub: builder.query({
            query: (id) => `${USER_URL}/category/${id}`
        }),

        deletesubCategory: builder.mutation({
            query: (id) => ({
                url: `${USER_URL}/${id}`,
                method: "DELETE",
            })
        })
    })
})

export const { useCreatesubCategoryMutation,useFetchsingleSubQuery, useFetchCategorySubsQuery, useFetchsubCategoryQuery, useDeletesubCategoryMutation, useUpdatesubCategoryMutation } = subcategoryApiSlice