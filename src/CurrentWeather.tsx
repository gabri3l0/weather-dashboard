import {
    Button,
    Card,
    FlexBox,
    FlexBoxAlignItems,
    FlexBoxJustifyContent,
    FlexBoxWrap,
    Text
} from "@ui5/webcomponents-react";
import {spacing} from "@ui5/webcomponents-react-base";
import heart2Icon from '@ui5/webcomponents-icons/dist/heart-2.js';
import heartIcon from '@ui5/webcomponents-icons/dist/heart.js';


type CurrentWeatherProps =
    {
        weather: LocationWithWeatherType,
        handleSaveLocationClick: (weather: LocationWithWeatherType)=> void,
        isLocationSaved: boolean
    }

export type LocationWithWeatherType ={
    cityName: string,
    countryCode: string,
    current: {
        temp: number
        weather: [{
            icon: string
        }]
    },
    timezone?: string,
    cityId?: string,
    lat?: string,
    lon?: string,
}

// WEATHER
// CHARTS

export function CurrentWeather({weather, handleSaveLocationClick, isLocationSaved}: CurrentWeatherProps) {
    const date = new Date().toLocaleString('en-US', { timeZone: weather?.timezone })
    return (
        <FlexBox
            justifyContent={FlexBoxJustifyContent.Center}
            wrap={FlexBoxWrap.Wrap}
        >
            <Card
                style={spacing.sapUiContentPadding }
            >
                <FlexBox
                    justifyContent="SpaceAround"
                    alignItems={FlexBoxAlignItems.Center}
                    style={{
                        width: '100%',
                        height: '13rem'
                    }}
                >
                    {weather?.current && (
                        <>
                            <div>
                                <Text
                                    style={{
                                        display: "block",
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {weather.cityName}, {weather.countryCode}
                                </Text>
                                <Text>{date}</Text>
                            </div>
                            <Text>
                                <img
                                    alt='weather'
                                    src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
                                    style={{width: "70%"}}
                                />
                            </Text>
                            <Text>{(weather.current.temp).toFixed(0)} °C</Text>
                            <Button
                                design={isLocationSaved ? "Negative" : "Transparent"}
                                icon={isLocationSaved ? heartIcon : heart2Icon}
                                onClick={()=>handleSaveLocationClick(weather)}
                            />
                        </>
                    )}
                </FlexBox>
            </Card>
        </FlexBox>
    )
}
