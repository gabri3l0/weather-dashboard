import {
    Card,
    FlexBox,
    FlexBoxAlignItems,
    FlexBoxJustifyContent,
    FlexBoxWrap, IllustratedMessage,
} from "@ui5/webcomponents-react";
import {spacing} from "@ui5/webcomponents-react-base";
import {WeatherCard} from "./WeatherCard.tsx";
import {WeatherLineChart} from "./WeatherChartLine.tsx";

export type CurrentWeatherProps =
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
    hourly: Array<any>,
    timezone?: string,
    cityId?: string,
    lat?: string,
    lon?: string,
}

export function Weather({weather, handleSaveLocationClick, isLocationSaved}: CurrentWeatherProps) {
    return (
        <FlexBox justifyContent={FlexBoxJustifyContent.Center} wrap={FlexBoxWrap.Wrap}>
            <Card style={spacing.sapUiContentPadding }>
                <FlexBox
                    justifyContent={FlexBoxJustifyContent.SpaceAround}
                    alignItems={FlexBoxAlignItems.Center}
                    style={{width: '100%', height: '5rem'}}
                >
                    {weather?.current ?
                        (
                            <WeatherCard
                                weather={weather}
                                handleSaveLocationClick={handleSaveLocationClick}
                                isLocationSaved={isLocationSaved}
                            />
                        )
                        :
                        <IllustratedMessage name="NoData" size="Dot"/>
                    }
                </FlexBox>
                <FlexBox
                    justifyContent={FlexBoxJustifyContent.SpaceAround}
                    alignItems={FlexBoxAlignItems.Center}
                    style={{width: '100%',}}
                >
                    <WeatherLineChart weather={weather.hourly}/>
                </FlexBox>
            </Card>
        </FlexBox>
    )
}
