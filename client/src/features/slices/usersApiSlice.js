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
            query: (data) => {

                return {
                    url: `${USER_URL}`,
                    method: "POST",
                    body: data
                }
            }
        }),
        recoverPass: builder.mutation({
            query: (data) => {

                return {
                    url: `${USER_URL}/recover-password`,
                    method: "POST",
                    body: data
                }
            }
        }),
        resetPass: builder.mutation({
            query: (data) => {

                return {
                    url: `${USER_URL}/reset-password`,
                    method: "POST",
                    body: data
                }
            }
        }),


        editUserDetails: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/${data._id}`,
                method: "PUT",
                body: data
            })
        }),
        fetchaffiliates: builder.query({
            query: () => ({
                url: `${USER_URL}/affiliates`
            })
        }),
        fetchuser: builder.query({
            query: (id) => ({
                url: `${USER_URL}/${id}`
            })
        }),
        getuser: builder.query({
            query: () => `${USER_URL}/user/profile`
        }),

        activate: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/activate/${data.id}`,
                method: "PUT",
                body: data
            })
        }),
        Resendactivate: builder.mutation({
            query: (data) => {
                return (
                    {
                        url: `${USER_URL}/sms/resend-activation-key/${data.id}`,
                        method: "POST",

                    }
                )
            }
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

export const { useLoginMutation, useResetPassMutation, useRecoverPassMutation, useResendactivateMutation, useActivateMutation, useFetchaffiliatesQuery, useGetusersQuery, useEditUserDetailsMutation, useLogoutMutation, useRegisterMutation, useGetuserQuery, useFetchuserQuery } = usersApiSlice