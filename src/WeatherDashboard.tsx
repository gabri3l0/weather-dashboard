import {SearchLocation} from "./components/SearchLocation/SearchLocation.tsx";
import {Weather, LocationWithWeatherType} from "./components/Weather/Weather.tsx";
import {ForecastedWeather} from "./components/ForecastedWeather/ForecastedWeather.tsx";
import {SavedLocationList} from "./components/SavedLocation/SavedLocationList.tsx";
import {BusyIndicator, FlexBox, FlexBoxJustifyContent, FlexBoxWrap, Grid} from "@ui5/webcomponents-react";
import {useEffect, useMemo, useState} from "react";
import {LocationType} from "./components/SavedLocation/SavedLocationItem.tsx";
import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js"
import "@ui5/webcomponents-fiori/dist/illustrations/NoSavedItems_v1.js"
import '@ui5/webcomponents/dist/features/InputSuggestions.js';
import {spacing} from "@ui5/webcomponents-react-base";
import {useGetWeather} from "./services/useGetWeather.tsx";
import {useShowToast} from "./components/utils/useShowToast.tsx";

export function WeatherDashboard() {
    const [savedLocations, setSavedLocations] = useState<Array<LocationType>>([])
    const [isLocationSaved, setIsLocationSaved] = useState(false)
    const [locationSelected, setLocationSelected] = useState<LocationType>()
    const [isLoading, setIsLoading] = useState(false)
    const { isPending, error, data, refetch } = useGetWeather(locationSelected)
    const {displayErrorToast} = useShowToast()


    const weather = useMemo(
        () => ({
            ...locationSelected,
            ...data
        }),
        [locationSelected, data]
    );


    const handleSuggestionItemClick = async (location: LocationType) => {
        setLocationSelected(location)
    }

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

    useEffect(()=>{
        if (locationSelected?.lat) {
            setIsLoading(true)
            refetch()
        }
    }, [locationSelected])

    const isDataFetched = (!isPending && !!data)

    useEffect(()=> {
        if (error)
            setIsLoading(false)

        if(isDataFetched) {
            setIsLoading(false)
        }
    }, [isPending, data, error, isLoading])

    if (error) displayErrorToast(error?.message)

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
