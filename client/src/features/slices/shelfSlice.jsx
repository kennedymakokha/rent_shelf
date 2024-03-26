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
        fetchshelves: builder.query({
            query: (e) => `${USER_URL}?featured=${e}`
        }),
        fetchshelvesByID: builder.query({
            query: (id) => `${USER_URL}/${id}`
        }),
        deleteshelve: builder.mutation({
            query: (id) => ({
                url: `${USER_URL}/${id}`,
                method: "DELETE",
            })
        })
    })
})

export const { useCreateshelveMutation, useDeleteshelveMutation, useFetchshelvesByIDQuery, useFetchshelvesQuery, useUpdateshelveMutation } = usersApiSlice