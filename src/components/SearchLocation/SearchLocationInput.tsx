import {
    Icon,
    Input,
    Modals,
    SuggestionItem
} from "@ui5/webcomponents-react";
import {useEffect, useState} from "react";
import {LocationType} from "../SavedLocation/SavedLocationItem.tsx";
import {customErrorMessage} from "../../utils/customErrorMessage.tsx";
import {useFindCities} from "../../services/useFindCities.tsx";

type Props = {
    isGetLocationLoading: boolean,
    setIsSearchInputLoading: any,
    handleSuggestionItemClick: (location: LocationType)=>void
}

export function SearchLocationInput({isGetLocationLoading, setIsSearchInputLoading, handleSuggestionItemClick}: Props) {
    const showToast = Modals.useShowToast();
    const [cityName, setCityName] = useState('')
    const {isPending, data, error, refetch} = useFindCities(cityName)

    const handleSelectItem = (event: any) =>{
        setCityName('');
        handleSuggestionItemClick(event.detail.item.dataset as LocationType)
    }

    const isDataFetched = (!isPending && !!data)

    useEffect(()=> {
        if (error)
            setIsSearchInputLoading(false)

        if(isDataFetched) {
            setIsSearchInputLoading(false)
        }
    }, [isPending, data, error])

    const onSubmit = () => {
        if (!isDataFetched)
            setIsSearchInputLoading(true)
        refetch()
    }

    if (error) showToast({
        children: customErrorMessage(error?.message)
    });

    return (
        <Input
            type="Text"
            icon={<Icon name="search" />}
            placeholder="Type a city name"
            showSuggestions
            noTypeahead={true}
            value={cityName}
            onInput={(event)=>setCityName(event.target.value)}
            onChange={onSubmit}
            onSuggestionItemSelect={handleSelectItem}
            valueState={(data?.length == 0 && !isPending) ? 'Error': 'None'}
            disabled={isGetLocationLoading}
        >
            {data?.map((location: any) => {
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
