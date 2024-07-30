import {List} from "@ui5/webcomponents-react";
import {useState} from "react";
import {SavedLocationItem} from "./SavedLocationItem.tsx";

export type LocationType = {
    id: string,
    city: string,
    country: string,
    temp: string,
    low: string,
    high: string,
}
export function SavedLocationList() {
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
        <>
            <List
                headerText="Saved Location List"
            >
                {locationList.map((location)=> {
                    return (
                       <>
                           <SavedLocationItem
                               location={location}
                               handleDelete={handleDelete}
                               handleItemClick={handleItemClick}/>
                       </>
                    )
                })}
            </List>
        </>
    )
}
