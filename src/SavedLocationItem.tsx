import {Button, CustomListItem, FlexBox, FlexBoxAlignItems, Text} from "@ui5/webcomponents-react";
import deleteIcon from '@ui5/webcomponents-icons/dist/delete.js';


type SavedLocationItemProps = {
    location: LocationType,
    handleRemoveLocationClick: (cityId: string)=> void,
    handleSelectLocationClick: (location: LocationType)=> void,
}

export type LocationType = {
    cityId: string,
    lat: string,
    lon: string,
    cityName: string,
    countryCode: string,
}

export function SavedLocationItem({location, handleRemoveLocationClick, handleSelectLocationClick}: SavedLocationItemProps) {
    return (
        <CustomListItem
            onClick={()=>handleSelectLocationClick(location)}
            data-lat={location.lat}
            data-lon={location.lon}
        >
            <FlexBox
                justifyContent="SpaceAround"
                alignItems={FlexBoxAlignItems.Center}
                style={{
                    width: '100%'
                }}
            >
                <Text>
                    <img
                        alt='weather'
                        src={`https://openweathermap.org/images/flags/${location.countryCode?.toLowerCase()}.png`}
                        style={{width: "70%"}}
                    />
                </Text>
                <Text
                    style={{
                        fontWeight: 'bold'
                    }}
                >
                    {location.cityName}, {location.countryCode}
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                    {`${location.lat}, ${location.lon}`}
                </Text>
                <Button
                    design="Negative"
                    icon={deleteIcon}
                    onClick={()=>handleRemoveLocationClick(location.cityId)}
                />
            </FlexBox>
        </CustomListItem>
    )
}
