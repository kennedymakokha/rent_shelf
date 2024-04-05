import { apiSlice } from "./apiSlice";
const USER_URL = "/api/features";

export const FeatureApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createFeature: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}`,
                method: "POST",
                body: data
            })
        }),
        updateFeature: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/${data._id}`,
                method: "PUT",
                body: data
            })
        }),
        fetchFeature: builder.query({
            query: () => `${USER_URL}`
        }),
        getFeatureById: builder.query({
            query: (id) => ({
                url: `${USER_URL}/${id}`,
            })
        }),
       
        deleteFeature: builder.mutation({
            query: (id) => ({
                url: `${USER_URL}/${id}`,
                method: "DELETE",
            })
        })
    })
})

export const { useCreateFeatureMutation, useDeleteFeatureMutation, useFetchFeatureQuery, useUpdateFeatureMutation } = FeatureApiSlice