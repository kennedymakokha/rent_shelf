import { apiSlice } from "./apiSlice";
const USER_URL = "/api/fcm";

export const FCMApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        subcribe: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/subscribe`,
                method: "POST",
                body: data
            })
        }),
      
    })
})

export const {useSubcribeMutation} = FCMApiSlice