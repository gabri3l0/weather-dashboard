import {
    FlexBox,
    Text
} from "@ui5/webcomponents-react";
import {spacing} from "@ui5/webcomponents-react-base";
import {ForecastedWeatherType} from "./ForecastedWeather.tsx";
import {roundTemp} from "../../utils/roundTemp.tsx";


export function ForecastedWeatherCard({weather}: {weather: ForecastedWeatherType}) {
    const dayName = new Date(weather.dt * 1000).toLocaleString('en-us', {weekday:'long'})
    return(
        <FlexBox key={weather.dt}
                 direction="Column"
                 alignItems="Center"
                 style={spacing.sapUiContentPadding}
        >
            <Text>
                <img
                    alt='weather'
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    style={{width: "6em"}}
                />
            </Text>
            <Text style={{fontWeight: 'bold'}}>
                {`${roundTemp(weather.temp.min)}°C / ${roundTemp(weather.temp.max)}°C`}
            </Text>
            <Text style={{fontWeight: 'bold', fontSize:"1.2em", ...spacing.sapUiContentPadding}}>
                {dayName}
            </Text>
        </FlexBox>
    )
}
