import { apiSlice } from "./apiSlice";
const USER_URL = "/api/categories";

export const categoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCategory: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}`,
                method: "POST",
                body: data
            })
        }),
        updateCategory: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/${data._id}`,
                method: "PUT",
                body: data
            })
        }),
        fetchCategory: builder.query({
            query: () => `${USER_URL}`
        }),

        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `${USER_URL}/${id}`,
                method: "DELETE",
            })
        })
    })
})

export const { useCreateCategoryMutation, useFetchCategoryQuery, useDeleteCategoryMutation, useUpdateCategoryMutation } = categoryApiSlice