import {SearchLocation} from "./components/SearchLocation/SearchLocation.tsx";
import {Weather, LocationWithWeatherType} from "./components/Weather/Weather.tsx";
import {ForecastedWeather} from "./components/ForecastedWeather/ForecastedWeather.tsx";
import {SavedLocationList} from "./components/SavedLocation/SavedLocationList.tsx";
import {BusyIndicator, FlexBox, FlexBoxJustifyContent, FlexBoxWrap, Grid, Modals} from "@ui5/webcomponents-react";
import {useEffect, useState} from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {LocationType} from "./components/SavedLocation/SavedLocationItem.tsx";
import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js"
import "@ui5/webcomponents-fiori/dist/illustrations/NoSavedItems_v1.js"
import '@ui5/webcomponents/dist/features/InputSuggestions.js';
import {spacing} from "@ui5/webcomponents-react-base";


export function WeatherDashboard() {
    const showToast = Modals.useShowToast();
    const [savedLocations, setSavedLocations] = useState<Array<LocationType>>([])
    const [isLocationSaved, setIsLocationSaved] = useState(false)
    const [locationSelected, setLocationSelected] = useState<LocationType>()
    const [isLoading, setIsLoading] = useState(false)

    const getWeather = async (location: any) => {
        const response = await axios.get(
            "https://openweathermap.org/data/2.5/onecall",
            {
                params: {
                    lat: location.lat,
                    lon: location.lon,
                    units: 'metric',
                    appid: '439d4b804bc8187953eb36d2a8c26a02',
                },
                timeout: 6000
            }
        );
        return response.data;
    };

    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['weather', locationSelected],
        queryFn: ()=>getWeather(locationSelected),
        staleTime: 0,
        retry: false,
        enabled: false
    })


    const weather = {
        ...locationSelected,
        ...data
    }


    const handleSuggestionItemClick = async (location: LocationType) => {
        setLocationSelected(location)
    }

    useEffect(()=>{
        if (locationSelected?.lat) {
            setIsLoading(true)
            refetch()
        }
    }, [locationSelected])


    const handleSelectLocationClick = (location: LocationType) => {
        setLocationSelected(location)
    }

    const handleRemoveLocationClick = (cityId: string) => {
        setSavedLocations(savedLocations.filter((location) => location.cityId !== cityId))
    }

    const handleSaveLocationClick = (location: LocationWithWeatherType) => {
        if (!isLocationSaved) setSavedLocations([location as LocationType, ...savedLocations])
        else handleRemoveLocationClick(location.cityId as string)
    }

    useEffect(()=> {
        setIsLocationSaved(!!savedLocations.find((savedLocation) => savedLocation.cityId === weather.cityId))
    }, [savedLocations, weather])

    if (error) showToast({
        children: error?.message
    });

    const isDataFetched = (!isPending && !!data)

    useEffect(()=> {
        if (error)
            setIsLoading(false)

        if(isDataFetched) {
            setIsLoading(false)
        }
    }, [isPending, data, error])

    return(
        <>
            <SearchLocation
                handleSuggestionItemClick={handleSuggestionItemClick}
            />
            {isLoading && (
                <FlexBox
                    justifyContent={FlexBoxJustifyContent.Center}
                    wrap={FlexBoxWrap.Wrap}
                    style={spacing.sapUiContentPadding}
                >
                    <BusyIndicator
                        active={isLoading}
                        delay={0}
                        size="Large"
                    />
                </FlexBox>
            )}
            <Grid>
                <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL8 L8 M12 S12'>
                    <Grid>
                        <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL12 L12 M12 S12'>
                            <Weather
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
