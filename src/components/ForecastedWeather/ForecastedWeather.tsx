import {
    Card,
    FlexBox, IllustratedMessage,
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
        <FlexBox
            // justifyContent="SpaceAround"
            // style={{ height: 'fit-content'}}
        >
            <Card style={{height: "10rem", ...spacing.sapUiContentPadding }}>
                <FlexBox justifyContent="SpaceAround">
                    {forecastedWeather ? (
                        <>
                            {forecastedWeather?.slice(1,6).map((weather) => {
                                return (
                                    <div key={weather.dt}>
                                        <ForecastedWeatherCard weather={weather}/>
                                    </div>
                                )
                            })}
                        </>
                    ): <IllustratedMessage name="NoData" size="Base"/>}
                </FlexBox>
            </Card>
        </FlexBox>
    )
}
