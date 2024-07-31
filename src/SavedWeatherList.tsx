import {Card, FlexBox, FlexBoxJustifyContent, FlexBoxWrap, List} from "@ui5/webcomponents-react";
import {useState} from "react";
import {SavedWeatherItem} from "./SavedWeatherItem.tsx";
import {spacing} from "@ui5/webcomponents-react-base";

export type LocationType = {
    id: string,
    city: string,
    country: string,
    temp: string,
    low: string,
    high: string,
}
export function SavedWeatherList() {
    const [locationList, setLocationList] = useState<Array<LocationType>>([
        {
            id: "12",
            city: "Monterrey",
            country: 'MX',
            temp: '23C',
            low: '24C',
            high: '25C',
        },
        {
            id: "22",
            city: "Monterrey",
            country: 'MX',
            temp: '23C',
            low: '24C',
            high: '25C',
        },
        {
            id: "33",
            city: "Monterrey",
            country: 'MX',
            temp: '23C',
            low: '24C',
            high: '25C',
        }
        ,        {
            id: "45",
            city: "Monterrey",
            country: 'MX',
            temp: '23C',
            low: '24C',
            high: '25C',
        }
    ])

    const handleItemClick = (location: LocationType) => {
        console.log(`search location`, location)
    }

    // TODO review typo
    const handleDelete = (e: any) => {
        setLocationList(locationList.filter((location)=> location.id !== e.target.id))
    }

    return (
        <FlexBox
            justifyContent={FlexBoxJustifyContent.Center}
            wrap={FlexBoxWrap.Wrap}
            style={spacing.sapUiContentPadding}
        >
            <Card>
                <List
                    headerText="Saved Location List"
                >
                    {locationList.map((location)=> {
                        return (
                           <>
                               <SavedWeatherItem
                                   location={location}
                                   handleDelete={handleDelete}
                                   handleItemClick={handleItemClick}/>
                           </>
                        )
                    })}
                </List>
            </Card>
        </FlexBox>
    )
}
