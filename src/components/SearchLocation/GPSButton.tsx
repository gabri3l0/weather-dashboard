import {
    Button,
    Modals,
} from "@ui5/webcomponents-react";
import {useEffect, useState} from "react";
import locateMeIcon from '@ui5/webcomponents-icons/dist/locate-me.js';
import {LocationType} from "../SavedLocation/SavedLocationItem.tsx";
import {customErrorMessage} from "../../utils/customErrorMessage.tsx";
import {useGetCity} from "../../services/useGetCity.tsx";

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
    const {data, refetch} = useGetCity(devicePosition)

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
                    setIsGetLocationLoading(false)
                    showToast({
                        children: customErrorMessage(error.message)
                    })
                }
            );
        } else {
            setIsGetLocationLoading(false)
            showToast({
                children: customErrorMessage('Geolocation is not supported by this browser.')
            })
        }
    };

    useEffect(()=> {
        handleGetLocation()
    }, [])

    useEffect(()=> {
        if (data && data.length > 0) {
            handleSuggestionItemClick({
                lat: data[0].lat,
                lon: data[0].lon,
                countryCode: data[0].country,
                cityName: data[0].name,
                cityId: data[0].lat.toString() + data[0].lon.toString(),
            })
            setIsGetLocationLoading(false)
            setDevicePosition(undefined)
        }
    }, [data])

    useEffect(()=> {
        refetch()
    }, [devicePosition])


    return (
            <Button
                icon={locateMeIcon}
                onClick={handleGetLocation}
                disabled={isSearchInputLoading}
            />
    )

}
