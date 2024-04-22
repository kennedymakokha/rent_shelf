import { apiSlice } from "./apiSlice";
const USER_URL = "/api/logs";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createsms: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}`,
                method: "POST",
                body: data
            })
        }),

        fetchusersmslogs: builder.query({
            query: (id) => `${USER_URL}/smslogs/${id}?today=true`
        }),
        fetchsmslogs: builder.query({
            query: (data) => `${USER_URL}/smslogs?page=${data.page}&limit=${data.limit}&user=${data.user}&word=${data.word}`
        }),
        fetchlogs: builder.query({
            query: (data) => `${USER_URL}/login-logs?page=${data.page}&limit=${data.limit}&user=${data.user}&word=${data.word}`
        }),

    })
})

export const { useCreatesmsMutation,useFetchlogsQuery, useFetchsmslogsQuery, useFetchusersmslogsQuery } = usersApiSlice