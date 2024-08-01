import axios from "axios";
import {useQuery} from "@tanstack/react-query";

export function useGetWeather(location: any) {
    return useQuery({
        queryKey: ['weather', location],
        queryFn: async ()=>{
           const response =  await axios.get(
                "https://openweathermap.org/data/2.5/onecall",
                {
                    params: {
                        lat: location.lat,
                        lon: location.lon,
                        units: 'metric',
                        appid: process.env.OPEN_WEATHER_MAP_QUERY_API_KEY,
                    },
                    timeout: 6000
                }
            );
           return response.data
        },
        staleTime: 0,
        retry: false,
        enabled: false
    })

}
