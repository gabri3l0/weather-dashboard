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
import {LocationType} from "../SavedLocation/SavedLocationItem.tsx";

type devicePositionType = {
    lat?: string,
    lon?: string
}

export function SearchLocation({handleSuggestionItemClick}: {handleSuggestionItemClick: (location: LocationType)=>void,}) {
    const showToast = Modals.useShowToast();
    const [cityToSearch, setCityToSearch] = useState('')
    const [devicePosition, setDevicePosition] = useState<devicePositionType>()

    const getCity = async () => {
        if (!devicePosition?.lon) return []
        const response = await axios.get(
            "http://api.openweathermap.org/geo/1.0/reverse", {
                params: {
                    lat: devicePosition?.lat,
                    lon: devicePosition?.lon,
                    limit: 1,
                    appid: "625a5ca7ad433926a04e1614e116217e",
                }
            }
        );
        return response.data;
    };

    const responseGetCity = useQuery({
        queryKey: ['location'],
        queryFn: ()=>getCity(),
        staleTime: 0,
        retry: false,
        // gcTime: 0,
        enabled: false
    });

    const city = responseGetCity?.data ?? []

    const findCities = async (cityToSearch: string) => {
        if (cityToSearch === '') return []
        const response = await axios.get(
            "https://openweathermap.org/data/2.5/finds", {
                params: {
                    q: cityToSearch,
                    appid: "439d4b804bc8187953eb36d2a8c26a02",
                    units: "metric"
                }
            }
        );
        return response.data;
    };

    const responseFindCities = useQuery({
        queryKey: ['cities', cityToSearch],
        queryFn: ()=>findCities(cityToSearch),
        staleTime: 0,
        retry: false,
        // gcTime: 0,
        enabled: false
    })

    const cities = responseFindCities?.data?.list ?? responseFindCities?.data


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

    useEffect(()=> {
        if (city && city.length > 0) {
            handleSuggestionItemClick({
                lat: city[0].lat,
                lon: city[0].lon,
                countryCode: city[0].country,
                cityName: city[0].name,
                cityId: city[0].lat.toString()+city[0].lon.toString(),
            })
        }
    }, [city])

    useEffect(()=> {
        responseGetCity.refetch()
    }, [devicePosition])


    if (responseFindCities.error) showToast({
        children: responseFindCities.error?.message
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
                        onInput={(event)=>setCityToSearch(event.target.value)}
                        onChange={()=> responseFindCities.refetch()}
                        onSuggestionItemSelect={(event)=>handleSuggestionItemClick(event.detail.item.dataset as LocationType)}
                        valueState={(cities?.length == 0 && !responseFindCities.isPending) ? 'Error': 'None'}
                    >
                        {cities?.map((location: any) => {
                            return(
                                <SuggestionItem
                                    key={location.id}
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
                    </Input>
                </div>
            </Grid>

        </FlexBox>
    )

}