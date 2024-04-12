import { apiSlice } from "./apiSlice";
const USER_URL = "/api/areas";

export const AreasApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createArea: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}`,
                method: "POST",
                body: data
            })
        }),
        updateArea: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/${data._id}`,
                method: "PUT",
                body: data
            })
        }),
        fetchAreas: builder.query({
            query: () => `${USER_URL}`
        }),
        fetchTownAreas: builder.query({
            query: (id) => `${USER_URL}/town/${id}`
        }),

        deleteArea: builder.mutation({
            query: (id) => ({
                url: `${USER_URL}/${id}`,
                method: "DELETE",
            })
        })
    })
})

export const { useDeleteAreaMutation,useFetchTownAreasQuery, useFetchAreasQuery, useUpdateAreaMutation, useCreateAreaMutation } = AreasApiSlice