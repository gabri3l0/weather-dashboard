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

type SavedWeatherListProps = {
    locations: any,
    handleItemClick: any,
    handleDelete: any
}
export function SavedWeatherList({locations, handleItemClick, handleDelete}: SavedWeatherListProps) {

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
                    {locations.map((location)=> {
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
