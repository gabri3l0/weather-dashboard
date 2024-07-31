import {Button, CustomListItem, FlexBox, FlexBoxAlignItems, Text} from "@ui5/webcomponents-react";
import deleteIcon from '@ui5/webcomponents-icons/dist/delete.js';


type PropsType = {
    location: any,
    handleDelete: any,
    handleItemClick: any,
}
export function SavedWeatherItem({location, handleDelete, handleItemClick}: PropsType) {
    return (
        <CustomListItem
            key={location.id}
            onClick={()=>handleItemClick(location)}
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
                    id={location.id}
                    design="Negative"
                    icon={deleteIcon}
                    onClick={handleDelete}
                />
            </FlexBox>
        </CustomListItem>
    )
}
