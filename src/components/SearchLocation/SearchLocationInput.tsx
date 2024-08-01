import {
    Icon,
    Input,
    Modals,
    SuggestionItem
} from "@ui5/webcomponents-react";
import {useEffect, useState} from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {LocationType} from "../SavedLocation/SavedLocationItem.tsx";
import {customErrorMessage} from "../../utils/customErrorMessage.tsx";

type Props = {
    isGetLocationLoading: boolean,
    setIsSearchInputLoading: any,
    handleSuggestionItemClick: (location: LocationType)=>void
}

export function SearchLocationInput({isGetLocationLoading, setIsSearchInputLoading, handleSuggestionItemClick}: Props) {
    const showToast = Modals.useShowToast();
    const [cityToSearch, setCityToSearch] = useState('')


    const findCities = async (cityToSearch: string) => {
        if (cityToSearch === '') return []
        const response = await axios.get(
            "https://openweathermap.org/data/2.5/finds", {
                params: {
                    q: cityToSearch,
                    appid: process.env.OPEN_WEATHER_MAP_QUERY_API_KEY,
                    units: "metric"
                },
                timeout: 6000
            }
        );
        return response.data;
    };

    const responseFindCities = useQuery({
        queryKey: ['cities', cityToSearch],
        queryFn: ()=>findCities(cityToSearch),
        staleTime: 0,
        retry: false,
        enabled: false
    })

    const cities = responseFindCities?.data?.list ?? responseFindCities?.data


    const isDataFetched = (!responseFindCities.isPending && !!responseFindCities.data)

    useEffect(()=> {
        if (responseFindCities.error)
            setIsSearchInputLoading(false)

        if(isDataFetched) {
            setIsSearchInputLoading(false)
        }
    }, [responseFindCities.isPending, responseFindCities.data, responseFindCities.error])

    const onSubmit = async () => {
        if (!isDataFetched)
            setIsSearchInputLoading(true)
        await responseFindCities.refetch()
    }

    const handleSelectItem = (event: any) =>{
        setCityToSearch('');
        handleSuggestionItemClick(event.detail.item.dataset as LocationType)
    }


    if (responseFindCities.error) showToast({
        children: customErrorMessage(responseFindCities.error?.message)
    });

    return (
        <Input
            type="Text"
            icon={<Icon name="search" />}
            placeholder="Type a city name"
            showSuggestions
            noTypeahead={true}
            value={cityToSearch}
            onInput={(event)=>setCityToSearch(event.target.value)}
            onChange={onSubmit}
            onSuggestionItemSelect={handleSelectItem}
            valueState={(cities?.length == 0 && !responseFindCities.isPending) ? 'Error': 'None'}
            disabled={isGetLocationLoading}
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
    )

}
