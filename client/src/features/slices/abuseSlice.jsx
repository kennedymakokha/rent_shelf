import { apiSlice } from "./apiSlice";
const USER_URL = "/api/abuses";

export const AbusesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createAbuse: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}`,
                method: "POST",
                body: data
            })
        }),

        fetchAbuses: builder.query({
            query: () => `${USER_URL}`
        }),
        fetchLordAbuses: builder.query({
            query: (id) => `${USER_URL}/${id}`
        }),


    })
})

export const { useFetchLordAbusesQuery, useFetchAbusesQuery, useCreateAbuseMutation } = AbusesApiSlice