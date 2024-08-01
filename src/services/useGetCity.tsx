import axios from "axios";
import {useQuery} from "@tanstack/react-query";

export function useGetCity(location: any) {
    return useQuery({
        queryKey: ['weather', location],
        queryFn: async ()=>{
            if (!location?.lon) return []
            const response = await axios.get(
                "http://api.openweathermap.org/geo/1.0/reverse", {
                    params: {
                        lat: location?.lat,
                        lon: location?.lon,
                        limit: 1,
                        appid: process.env.OPEN_WEATHER_MAP_REVERSE_API_KEY,
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
