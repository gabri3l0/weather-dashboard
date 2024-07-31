import {
    Card,
    FlexBox,
    Text
} from "@ui5/webcomponents-react";
import {spacing} from "@ui5/webcomponents-react-base";

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

// FORECASTED LIST
// FORECASTEDITEM

export function ForecastedWeather({forecastedWeather}: { forecastedWeather: Array<ForecastedWeatherType> }) {
    console.log(forecastedWeather)
    if (!forecastedWeather) return
    return (
        <FlexBox
            justifyContent="SpaceAround"
            style={{ height: 'fit-content'}}
        >
            {forecastedWeather?.slice(1,6).map((weather) => {
                const dayName = new Date(weather.dt * 1000).toLocaleString('en-us', {weekday:'long'})
                return(
                    <Card key={weather.dt} style={{height: "10rem", ...spacing.sapUiContentPadding }}>
                        <FlexBox key={weather.dt} justifyContent="Center" direction="Column" alignItems="Center">
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
                    </Card>
                )
            })}
        </FlexBox>
    )
}
