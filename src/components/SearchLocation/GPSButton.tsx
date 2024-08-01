import {
    Button,
    Modals,
} from "@ui5/webcomponents-react";
import {useEffect, useState} from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import locateMeIcon from '@ui5/webcomponents-icons/dist/locate-me.js';
import {LocationType} from "../SavedLocation/SavedLocationItem.tsx";

type devicePositionType = {
    lat?: string,
    lon?: string
}

type Props = {
    isSearchInputLoading: boolean,
    setIsGetLocationLoading: any,
    handleSuggestionItemClick: (location: LocationType)=>void
}

export function GPSButton({isSearchInputLoading, setIsGetLocationLoading, handleSuggestionItemClick}: Props) {
    const showToast = Modals.useShowToast();
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
                },
                timeout: 6000
            }
        );
        return response.data;
    };

    const responseGetCity = useQuery({
        queryKey: ['location'],
        queryFn: ()=>getCity(),
        staleTime: 0,
        retry: false,
        enabled: false
    });

    const city = responseGetCity?.data ?? []


    const handleGetLocation = () => {
        setIsGetLocationLoading(true)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setDevicePosition({
                        lat: position.coords.latitude.toString(),
                        lon: position.coords.longitude.toString()
                    })
                },
                (error) => {
                    setIsGetLocationLoading(true)
                    showToast({
                        children: error.message
                    })
                }
            );
        } else {
            setIsGetLocationLoading(false)
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
            setIsGetLocationLoading(false)
            setDevicePosition(undefined)
        }
    }, [city])

    useEffect(()=> {
        responseGetCity.refetch()
    }, [devicePosition])


    return (
            <Button
                icon={locateMeIcon}
                onClick={handleGetLocation}
                disabled={isSearchInputLoading}
            />
    )

}
