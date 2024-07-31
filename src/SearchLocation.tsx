import {
    FlexBox,
    FlexBoxJustifyContent,
    FlexBoxWrap,
    Icon,
    Input,
    Modals,
    SuggestionItem
} from "@ui5/webcomponents-react";
import '@ui5/webcomponents/dist/features/InputSuggestions.js';
import {spacing} from "@ui5/webcomponents-react-base";
import {useState} from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

export function SearchLocation({handleSuggestionItemClick}: {handleSuggestionItemClick: any}) {
    // TODO view error
    // const showToast = Modals.useShowToast();
    const [city, setCity] = useState('')

    const findCities = async (city: string) => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts", {
                params: {
                    userId: parseInt(city)
                }
            }
        );
        return response.data;
    };

    const { isPending, isError, data, error, refetch } = useQuery({
        queryKey: ['cities', city],
        queryFn: ()=>findCities(city),
        staleTime: 0,
        retry: false,
        gcTime: 0,
        enabled: false
    })

    // console.log(`isPending`, isPending)
    // console.log(`isError`, isError)
    // console.log(`data`, data)
    // console.log(`error`, error?.message)


    // TODO view error
    // if (error) showToast({
    //     children: error?.message
    // });

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
                onInput={(event)=>setCity(event.target.value)}
                onChange={()=> refetch()}
                onSuggestionItemSelect={handleSuggestionItemClick}
                valueState={data?.length == 0 ? 'Error': 'None'}
            >

                {data?.map((location: any) => {
                    return(
                        <SuggestionItem
                            key={location.id}
                            text={`${location.title}`}
                            type="Active"
                        />
                        // <SuggestionItem
                        //     key={location.id}
                        //     additionalText={`${location.main.temp} °C`}
                        //     description={`${location.coord.lat}, ${location.coord.lon}`}
                        //     image={`https://openweathermap.org/images/flags/${location.sys.country.toLowerCase()}.png`}
                        //     text={`${location.name}, ${location.sys.country}`}
                        //     data-lat={location.coord.lat}
                        //     data-lon={location.coord.lon}
                        //     data-country-code={location.sys.country}
                        //     data-city-name={location.name}
                        //     data-city-id={location.id}
                        //     type="Active"
                        // />
                    )
                })}
            </Input>
        </FlexBox>
    )

}
