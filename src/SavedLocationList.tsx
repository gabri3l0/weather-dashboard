import {Button, CustomListItem, FlexBox, FlexBoxAlignItems, List, Text} from "@ui5/webcomponents-react";
import deleteIcon from '@ui5/webcomponents-icons/dist/delete.js';
import {useState} from "react";

type LocationType = {
    id: string,
    city: string,
    country: string,
    temp: string,
    low: string,
    high: string,
}
export function SavedSavedLocationList() {
    const [locationList, setLocationList] = useState<Array<LocationType>>([
        {
            id: "1",
            city: "Monterrey",
            country: 'MX',
            temp: '23C',
            low: '24C',
            high: '25C',
        },
        {
            id: "2",
            city: "Monterrey",
            country: 'MX',
            temp: '23C',
            low: '24C',
            high: '25C',
        },
        {
            id: "3",
            city: "Monterrey",
            country: 'MX',
            temp: '23C',
            low: '24C',
            high: '25C',
        }
        ,        {
            id: "4",
            city: "Monterrey",
            country: 'MX',
            temp: '23C',
            low: '24C',
            high: '25C',
        }
    ])

    // TODO review typo
    const handleClick = (e: any) => {
        setLocationList(locationList.filter((location)=> location.id !== e.target.id))
    }

    return (
        <>
            <List
                headerText="Saved Location List"
            >
                {locationList.map((location)=> {
                    return (
                        <CustomListItem key={location.id}>
                            <FlexBox
                                justifyContent="SpaceAround"
                                alignItems={FlexBoxAlignItems.Center}
                                style={{
                                    width: '100%'
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {location.city}, {location.country}
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {location.id}
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: 'bold'
                                    }}
                                >
                                    ICON
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: 'bold'
                                    }}
                                >
                                    L:{location.low}, H: {location.high}
                                </Text>
                                <Button
                                    id={location.id}
                                    design="Negative"
                                    icon={deleteIcon}
                                    onClick={handleClick}
                                />
                            </FlexBox>
                        </CustomListItem>
                    )
                })}
            </List>
        </>
    )
}
