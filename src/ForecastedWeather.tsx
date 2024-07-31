import {Card, FlexBox, FlexBoxJustifyContent, FlexBoxWrap, Text} from "@ui5/webcomponents-react";
import {spacing} from "@ui5/webcomponents-react-base";


export function ForecastedWeather({forecastedWeather}: {forecastedWeather: Array<any>}) {
    if (!forecastedWeather) return
    return (
        <FlexBox
            justifyContent="SpaceAround"
            wrap={FlexBoxWrap.Wrap}
        >
            {forecastedWeather.slice(1,6).map((weather: any) => {
                const dayName = new Date(weather.dt * 1000).toLocaleString('en-us', {weekday:'long'})
                return(
                    <Card
                        style={{ width: "25%", ...spacing.sapUiContentPadding }}
                    >
                        <FlexBox
                            justifyContent={FlexBoxJustifyContent.Center}
                            wrap={FlexBoxWrap.Wrap}
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
                                {`${weather.temp.min}°C / ${weather.temp.max}°C`}
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
