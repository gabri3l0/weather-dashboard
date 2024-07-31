import {FlexBox, FlexBoxJustifyContent, FlexBoxWrap, Icon, Input, SuggestionItem} from "@ui5/webcomponents-react";
import '@ui5/webcomponents/dist/features/InputSuggestions.js';
import {spacing} from "@ui5/webcomponents-react-base";
import {useState} from "react";


export function SearchLocation() {
    const [locations, setLocations] = useState([
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
    ])
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
            >
                
                {/*TODO typo*/}
                {locations.map((location: any) => {
                    return(
                        <SuggestionItem
                            key={location.id}
                            additionalText={`${location.main.temp} °C`}
                            description={`${location.coord.lat}, ${location.coord.lon}`}
                            image={`https://openweathermap.org/images/flags/${location.sys.country.toLowerCase()}.png`}
                            text={`${location.name}, ${location.sys.country}`}
                            type="Active"
                        />
                    )
                })}
            </Input>
        </FlexBox>
    )

}
