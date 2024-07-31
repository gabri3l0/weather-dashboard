import {FlexBox, FlexBoxJustifyContent, FlexBoxWrap, Icon, Input, SuggestionItem} from "@ui5/webcomponents-react";
import '@ui5/webcomponents/dist/features/InputSuggestions.js';
import {spacing} from "@ui5/webcomponents-react-base";
import {useState} from "react";

type LocationType = {
    name: string,
    sys: {country: string},
    main: {temp: string},
    coord: {lat: string, lon: string},
    id: string
}

export function SearchLocation({onSuggestionItemSelect}: {onSuggestionItemSelect: any}) {
    const [locations, setLocations] = useState<Array<LocationType>>([])

    // TODO query cities
    const handleClick = () => {
        console.log(`QUERY SEARCH CITIES`)
        const tempData = [
            {
                name: 'London',
                sys: {country: 'GB'},
                main: {temp: '12'},
                coord: {lat: '111', lon: '222'},
                id: "13"
            },
            {
                name: 'London',
                sys: {country: 'MX'},
                main: {temp: '12'},
                coord: {lat: '111', lon: '222'},
                id: "233"
            },
            {
                name: 'London',
                sys: {country: 'US'},
                main: {temp: '12'},
                coord: {lat: '111', lon: '222'},
                id: "1323"
            }
        ]
        setLocations(tempData)

        // const { isPending, isError, data, error } = response
    }

    return (
        <FlexBox
            justifyContent={FlexBoxJustifyContent.Center}
            wrap={FlexBoxWrap.Wrap}
            style={spacing.sapUiContentPadding}
        >
            <Input
                type="Text"
                icon={<Icon name="search" />}
                placeholder="Type a city name"
                showSuggestions
                noTypeahead={true}
                onChange={handleClick}
                onSuggestionItemSelect={onSuggestionItemSelect}
            >

                {locations.map((location) => {
                    return(
                        <SuggestionItem
                            key={location.id}
                            additionalText={`${location.main.temp} °C`}
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
        </FlexBox>
    )

}
