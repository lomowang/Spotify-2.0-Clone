import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



  
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    export const shazamCoreApi = createApi ({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key' ,'dd6d5793b9mshc0804579a6e48a6p1e2744jsn9b03794c0ec2')

                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world'}),
        }),
    });


    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi