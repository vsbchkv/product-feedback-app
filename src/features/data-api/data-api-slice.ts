import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DATA_URL = "https://api.npoint.io/9ecd93b4e1fc9002609f";
const ENDPOINTS = {
  dataList: "productRequests",
  currentUser: "currentUser",
};

interface User {
  image: URL;
  name: string;
  username: string;
  role: boolean;
}

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: DATA_URL }),
  endpoints: (builder) => ({
    getDataList: builder.query<[], string>({
      query: () => ENDPOINTS.dataList,
    }),

    getCurrentUser: builder.query<User, string>({
      query: () => ENDPOINTS.currentUser,
    }),
  }),
});

export const { useGetDataListQuery, useGetCurrentUserQuery } = dataApi;
