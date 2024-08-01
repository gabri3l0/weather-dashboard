import {
    Card,
    FlexBox, IllustratedMessage,
    Text
} from "@ui5/webcomponents-react";
import {spacing} from "@ui5/webcomponents-react-base";

type ForecastedWeatherProps = {
    forecastedWeather: Array<ForecastedWeatherType>,
}

type ForecastedWeatherType = {
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

function ForecastedWeatherCard({weather}: {weather: ForecastedWeatherType}) {
    const dayName = new Date(weather.dt * 1000).toLocaleString('en-us', {weekday:'long'})
    return(
        <FlexBox key={weather.dt}
                 direction="Column"
                 alignItems="Center"
        >
            <Text>
                <img
                    alt='weather'
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    style={{width: "6em"}}
                />
            </Text>
            <Text style={{fontWeight: 'bold'}}>
                {`${(weather.temp.min).toFixed(0)}°C / ${(weather.temp.max).toFixed(0)}°C`}
            </Text>
            <Text style={{fontWeight: 'bold', fontSize:"1.2em", ...spacing.sapUiContentPadding}}>
                {dayName}
            </Text>
        </FlexBox>
    )
}
