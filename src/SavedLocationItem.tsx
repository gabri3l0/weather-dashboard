import {Button, CustomListItem, FlexBox, FlexBoxAlignItems, Text} from "@ui5/webcomponents-react";
import deleteIcon from '@ui5/webcomponents-icons/dist/delete.js';


type PropsType = {
    location: any,
    handleRemoveLocationClick: any,
    handleSelectLocationClick: any,
}
export function SavedLocationItem({location, handleRemoveLocationClick, handleSelectLocationClick}: PropsType) {
    return (
        <CustomListItem
            key={location.cityId}
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
