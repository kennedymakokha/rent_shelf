import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const bURl = "https://rent-space.onrender.com/"
// const baseQuery = fetchBaseQuery({ baseUrl: "" })
const baseQuery = fetchBaseQuery({
    baseUrl: bURl,
    // prepareHeaders: async (headers) => {
    //     let token = await getAuth()
    //     headers.set('Authorization', `Bearer ${token}`)
    //     return headers;
    // },
})
export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({})
})