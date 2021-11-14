import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const getDictionary = createApi({
  reducerPath: 'getDictionary',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.dictionaryapi.dev/api/v2/entries/en/' }),
  endpoints: (builder) => ({
    getDefinitionByWord: builder.query({
      query: (word:string) => word,
    }),
  }),
})

export const { useGetDefinitionByWordQuery } = getDictionary;



