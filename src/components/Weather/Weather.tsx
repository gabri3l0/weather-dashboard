import {
    Card,
    FlexBox,
    FlexBoxAlignItems,
    FlexBoxJustifyContent,
    FlexBoxWrap, IllustratedMessage,
} from "@ui5/webcomponents-react";
import {spacing} from "@ui5/webcomponents-react-base";
import {WeatherCard} from "./WeatherCard.tsx";

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
    timezone?: string,
    cityId?: string,
    lat?: string,
    lon?: string,
}

export function Weather({weather, handleSaveLocationClick, isLocationSaved}: CurrentWeatherProps) {

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
                    {weather?.current ?
                        <WeatherCard
                            weather={weather}
                            handleSaveLocationClick={handleSaveLocationClick}
                            isLocationSaved={isLocationSaved}
                        />
                        :
                        <IllustratedMessage name="NoData" size="Dot"/>
                    }
                </FlexBox>
            </Card>
        </FlexBox>
    )
}