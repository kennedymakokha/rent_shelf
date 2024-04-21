import { apiSlice } from "./apiSlice";
const USER_URL = "/api/propeties";

export const ProperyApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createPropery: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}`,
                method: "POST",
                body: data
            })
        }),
        updatePropery: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/${data._id}`,
                method: "PUT",
                body: data
            })
        }),
        fetchPropery: builder.query({
            query: () => `${USER_URL}`
        }),
        fetchCategorySubs: builder.query({
            query: (id) => `${USER_URL}/${id}`
        }),
        fetchsingleProperty: builder.query({
            query: (id) => `${USER_URL}/category/${id}`
        }),

        deletePropery: builder.mutation({
            query: (id) => ({
                url: `${USER_URL}/${id}`,
                method: "DELETE",
            })
        })
    })
})

export const { useCreateProperyMutation,useFetchsinglePropertyQuery, useFetchCategorySubsQuery, useFetchProperyQuery, useDeleteProperyMutation, useUpdateProperyMutation } = ProperyApiSlice