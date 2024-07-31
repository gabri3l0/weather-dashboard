import {Button, CustomListItem, FlexBox, FlexBoxAlignItems, Text} from "@ui5/webcomponents-react";
import deleteIcon from '@ui5/webcomponents-icons/dist/delete.js';
import {LocationType} from "./SavedWeatherList.tsx";


type PropsType = {
    location: LocationType,
    handleDelete: any,
    handleItemClick: any,
}
export function SavedWeatherItem({location, handleDelete, handleItemClick}: PropsType) {
    return (
        <CustomListItem
            onClick={() => handleItemClick(location)}
        >
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
                    onClick={handleDelete}
                />
            </FlexBox>
        </CustomListItem>
    )
}
