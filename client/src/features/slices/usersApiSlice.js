import { apiSlice } from "./apiSlice";
const USER_URL = "/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/login`,
                method: "POST",
                body: data
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}`,
                method: "POST",
                body: data
            })
        }),
        editUserDetails: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/${data.id}`,
                method: "PUT",
                body: data
            })
        }),
        fetchuser: builder.query({
            query: (id) => ({
                url: `${USER_URL}/${id}`
            })
        }),
        getuser: builder.query({
            query: () => `${USER_URL}/profile`
        }),

        activate: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/activate/${data.id}`,
                method: "PUT",
                body: data
            })
        }),
        getusers: builder.query({
            query: (data) => `${USER_URL}/role-users/${data}`
        }),
        logout: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/logout`,
                method: "POST",
                body: data
            })
        })
    })
})

export const { useLoginMutation, useActivateMutation, useGetusersQuery, useEditUserDetailsMutation, useLogoutMutation, useRegisterMutation, useGetuserQuery, useFetchuserQuery } = usersApiSlice