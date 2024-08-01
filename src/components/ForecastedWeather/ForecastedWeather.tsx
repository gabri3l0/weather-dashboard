import {
    Card,
    FlexBox, FlexBoxJustifyContent, IllustratedMessage,
} from "@ui5/webcomponents-react";
import {spacing} from "@ui5/webcomponents-react-base";
import {ForecastedWeatherCard} from "./ForecastedWeatherCard.tsx";

type ForecastedWeatherProps = {
    forecastedWeather: Array<ForecastedWeatherType>,
}

export type ForecastedWeatherType = {
    dt: number,
    temp: {
      max: number,
      min: number
    },
    weather: [
        {
            icon: string
        }
    ]
}

export function ForecastedWeather({forecastedWeather}: ForecastedWeatherProps) {
    return (
        <FlexBox>
            <Card style={{height: "11.5rem", ...spacing.sapUiContentPadding, overflowX: 'auto'}}>
                <FlexBox justifyContent={FlexBoxJustifyContent.SpaceAround}>
                    {forecastedWeather ? (
                        <FlexBox style={{overflowX: 'auto'}}>
                            {forecastedWeather?.slice(1,6).map((weather) => {
                                return (
                                    <div key={weather.dt}>
                                        <ForecastedWeatherCard weather={weather}/>
                                    </div>
                                )
                            })}
                        </FlexBox>
                    ): <IllustratedMessage name="NoData" size="Base"/>}
                </FlexBox>
            </Card>
        </FlexBox>
    )
}
