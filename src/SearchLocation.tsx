import {
    Button,
    FlexBox,
    FlexBoxJustifyContent,
    FlexBoxWrap, Grid,
    Icon,
    Input,
    Modals,
    SuggestionItem
} from "@ui5/webcomponents-react";
import '@ui5/webcomponents/dist/features/InputSuggestions.js';
import {spacing} from "@ui5/webcomponents-react-base";
import {useEffect, useState} from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import locateMeIcon from '@ui5/webcomponents-icons/dist/locate-me.js';
import {LocationType} from "./SavedLocationItem.tsx";

type devicePositionType = {
    lat?: string,
    lon?: string
}

export function SearchLocation({handleSuggestionItemClick}: {handleSuggestionItemClick: (location: LocationType)=>void,}) {
    const showToast = Modals.useShowToast();
    const [city, setCity] = useState('')
    const [devicePosition, setDevicePosition] = useState<devicePositionType>()

    const getLocationByLatAndLon = async () => {
        if (!devicePosition?.lon) return []
        const response = await axios.get(
            "http://api.openweathermap.org/geo/1.0/reverse", {
                params: {
                    lat: devicePosition?.lat,
                    lon: devicePosition?.lon,
                    limit: 5,
                    appid: "625a5ca7ad433926a04e1614e116217e",
                }
            }
        );
        return response.data;
    };

    const responseReverseLocation = useQuery({
        queryKey: ['location'],
        queryFn: ()=>getLocationByLatAndLon(),
        staleTime: 0,
        retry: false,
        // gcTime: 0,
        enabled: false
    })

    const currentLocation = responseReverseLocation.data

    useEffect(()=> {
        if (currentLocation && currentLocation[0] && currentLocation[0].lat)
            handleSuggestionItemClick({
                lat: currentLocation[0].lat,
                lon: currentLocation[0].lon,
                countryCode: currentLocation[0].country,
                cityName: currentLocation[0].name,
                cityId: currentLocation[0].lat.toString()+currentLocation[0].lon.toString(),
            })
    }, [currentLocation?.length>0])

    useEffect(()=> {
        responseReverseLocation.refetch()
    }, [devicePosition])

    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setDevicePosition({
                        lat: position.coords.latitude.toString(),
                        lon: position.coords.longitude.toString()
                    })
                },
                (error) => {
                    showToast({
                        children: error.message
                    })
                }
            );
        } else {
            showToast({
                children: 'Geolocation is not supported by this browser.'
            })
        }
    };

    const findCities = async (city: string) => {
        if (city === '') return []
        const response = await axios.get(
            "https://openweathermap.org/data/2.5/finds", {
                params: {
                    q: city,
                    appid: "439d4b804bc8187953eb36d2a8c26a02",
                    units: "metric"
                }
            }

            // "http://api.openweathermap.org/geo/1.0/direct", {
            //     params: {
            //         q: city,
            //         appid: "625a5ca7ad433926a04e1614e116217e",
            //         limit: 5,
            //         units:"metric"
            //     }
            // }
        );
        return response.data;
    };

    const { isPending, isError, data, error, refetch } = useQuery({
        queryKey: ['cities', city],
        queryFn: ()=>findCities(city),
        staleTime: 0,
        retry: false,
        // gcTime: 0,
        enabled: false
    })

    // console.log(`isPending`, isPending)
    // console.log(`isError`, isError)
    // console.log(`data`, data)
    // console.log(`error`, error?.message)


    if (error) showToast({
        children: error?.message
    });

    return (
        <FlexBox
            justifyContent={FlexBoxJustifyContent.Center}
            wrap={FlexBoxWrap.Wrap}
            style={spacing.sapUiContentPadding}
        >
            <Grid>
                <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL12 L12 M12 S12'>
                    <Button
                        icon={locateMeIcon}
                        onClick={handleGetLocation}
                    />
                    <Input
                        type="Text"
                        icon={<Icon name="search" />}
                        placeholder="Type a city name"
                        showSuggestions
                        noTypeahead={true}
                        onInput={(event)=>setCity(event.target.value)}
                        onChange={()=> refetch()}
                        onSuggestionItemSelect={(event)=>handleSuggestionItemClick(event.detail.item.dataset as LocationType)}
                        valueState={data?.length == 0 ? 'Error': 'None'}
                    >
                        {data?.list?.map((location: any) => {
                            return(
                                <SuggestionItem
                                    key={location.id}
                                    // additionalText={`${(location.main.temp-273.15).toFixed(0)} °C`}
                                    description={`${location.coord.lat}, ${location.coord.lon}`}
                                    image={`https://openweathermap.org/images/flags/${location.sys.country.toLowerCase()}.png`}
                                    text={`${location.name}, ${location.sys.country}`}
                                    data-lat={location.coord.lat}
                                    data-lon={location.coord.lon}
                                    data-country-code={location.sys.country}
                                    data-city-name={location.name}
                                    data-city-id={location.id}
                                    type="Active"
                                />
                            )
                        })}

                        {/*{data?.map((location: any) => {*/}
                        {/*    return(*/}
                        {/*        <SuggestionItem*/}
                        {/*            key={location.id}*/}
                        {/*            // additionalText={`${(location.main.temp-273.15).toFixed(0)} °C`}*/}
                        {/*            description={`${location.lat}, ${location.lon}`}*/}
                        {/*            image={`https://openweathermap.org/images/flags/${location.country.toLowerCase()}.png`}*/}
                        {/*            text={`${location.name}, ${location.country}`}*/}
                        {/*            data-lat={location.lat}*/}
                        {/*            data-lon={location.lon}*/}
                        {/*            data-country-code={location.country}*/}
                        {/*            data-city-name={location.name}*/}
                        {/*            data-state-name={location.state}*/}
                        {/*            data-city-id={location.id}*/}
                        {/*            type="Active"*/}
                        {/*        />*/}
                        {/*    )*/}
                        {/*})}*/}
                    </Input>
                </div>
            </Grid>

        </FlexBox>
    )

}
