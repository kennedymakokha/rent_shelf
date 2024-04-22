import { apiSlice } from "./apiSlice";
const USER_URL = "/api/shelves";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createshelve: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}`,
                method: "POST",
                body: data
            })
        }),
        updateshelve: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/${data._id}`,
                method: "PUT",
                body: data
            })
        }),
        publishshelve: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/publish/${data}`,
                method: "PUT",
                // body: data
            })
        }),
        fetchshelves: builder.query({
            query: (data) => `${USER_URL}?town=${data.town}&category=${data.category}&featured=${data.featured}&limit=${data.limit}&skip=${data.skip}`
        }),
        fetchshelvesByID: builder.query({
            query: (id) => `${USER_URL}/${id}`
        }),
        fetchUsershelves: builder.query({
            query: (id) => `${USER_URL}/user/${id}`
        }),
        deleteshelve: builder.mutation({
            query: (id) => ({
                url: `${USER_URL}/${id}`,
                method: "DELETE",
            })
        })
    })
})

export const { useCreateshelveMutation, usePublishshelveMutation, useFetchUsershelvesQuery, useDeleteshelveMutation, useFetchshelvesByIDQuery, useFetchshelvesQuery, useUpdateshelveMutation } = usersApiSlice