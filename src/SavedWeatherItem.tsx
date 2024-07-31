import {Button, CustomListItem, FlexBox, FlexBoxAlignItems, Text} from "@ui5/webcomponents-react";
import deleteIcon from '@ui5/webcomponents-icons/dist/delete.js';
import {LocationType} from "./SavedWeatherList.tsx";


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
                    Monterey, MX
                    {/*{location.city}, {location.country}*/}
                </Text>
                <Text>
                    <img
                        alt='weather'
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                        style={{width: "70%"}}
                    />
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                    {`${location.temp.min}°C / ${location.temp.max}°C`}
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
