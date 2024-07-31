import {SearchLocation} from "./SearchLocation.tsx";
import {CurrentWeather} from "./CurrentWeather.tsx";
import {ForecastedWeather} from "./ForecastedWeather.tsx";
import {SavedLocationList} from "./SavedLocationList.tsx";
import {Grid} from "@ui5/webcomponents-react";
import {useEffect, useState} from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";


export function WeatherDashboard() {
    const [savedLocations, setSavedLocations] = useState<Array<any>>([])
    const [isLocationSaved, setIsLocationSaved] = useState(false)
    const [locationSelected, setLocationSelected] = useState({})

    const getWeather = async (location: any) => {
        console.log(`location`, location)
        const response = await axios.get(
            "https://openweathermap.org/data/2.5/onecall",
            {
                params: {
                    lat: location.lat,
                    lon: location.lon,
                    units: 'metric',
                    appid: '439d4b804bc8187953eb36d2a8c26a02',
                }
            }
        );
        return response.data;
    };

    const { isPending, isError, data, error, refetch } = useQuery({
        queryKey: ['weather', locationSelected],
        queryFn: ()=>getWeather(locationSelected),
        staleTime: 0,
        retry: false,
        gcTime: 0,
        enabled: false
    })

    const weather = {
        ...locationSelected,
        ...data
    }

    const handleSuggestionItemClick = async (location: any) => {
        console.log(`location.detail.item.dataset`, location.detail.item.dataset)
        setLocationSelected(location.detail.item.dataset)
    }

    useEffect(()=>{
        if (locationSelected?.cityName) refetch()
    }, [locationSelected])


    const handleSelectLocationClick = (location: any) => {
        setLocationSelected(location)
    }

    const handleRemoveLocationClick = (cityId: string) => {
        setSavedLocations(savedLocations.filter((location: any) => location.cityId !== cityId))
    }

    const handleSaveLocationClick = (location: any) => {
        if (!isLocationSaved) setSavedLocations([location, ...savedLocations])
        else handleRemoveLocationClick(location.cityId)
    }

    useEffect(()=> {
        setIsLocationSaved(!!savedLocations.find((savedLocation: any) => savedLocation.cityId === weather.cityId))
    }, [savedLocations, weather])

    // console.log(`isPending`, isPending)
    // console.log(`isError`, isError)
    console.log(`data`, weather)
    // console.log(`error`, error?.message)

    return(
        <>
            <SearchLocation
                handleSuggestionItemClick={handleSuggestionItemClick}
            />
            <Grid>
                <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL8 L8 M12 S12'>
                    <Grid>
                        <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL12 L12 M12 S12'>
                            <CurrentWeather
                                weather={weather}
                                handleSaveLocationClick={handleSaveLocationClick}
                                isLocationSaved={isLocationSaved}
                            />
                        </div>
                        <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL12 L12 M12 S12'>
                            <ForecastedWeather
                                forecastedWeather={weather?.daily}
                            />
                        </div>
                    </Grid>
                </div>
                <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL4 L4 M12 S12'>
                    <SavedLocationList
                        locations={savedLocations}
                        handleSelectLocationClick={handleSelectLocationClick}
                        handleRemoveLocationClick={handleRemoveLocationClick}
                    />
                </div>
            </Grid>


        </>
    )
}
