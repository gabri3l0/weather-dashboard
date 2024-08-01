import axios from "axios";
import {useQuery} from "@tanstack/react-query";

export function useFindCities(cityName: string) {
    return useQuery({
        queryKey: ['weather', cityName],
        queryFn: async ()=>{
            if (cityName === '') return []
            const response = await axios.get(
                "https://openweathermap.org/data/2.5/finds", {
                    params: {
                        q: cityName,
                        appid: process.env.OPEN_WEATHER_MAP_QUERY_API_KEY,
                        units: "metric"
                    },
                    timeout: 6000
                }
            );
            return response.data?.list;
        },
        staleTime: 0,
        retry: false,
        enabled: false
    })

}
