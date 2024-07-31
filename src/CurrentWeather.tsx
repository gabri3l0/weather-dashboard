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

export function CurrentWeather({weather, handleClick}: {weather: any, handleClick:any}) {
    if (!weather?.current) return

    const date = new Date().toLocaleString('en-US', { timeZone: weather.timezone })

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
                        width: '100%'
                    }}
                >

                    {/*TODO set values*/}
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
                    <Text>{weather.current.temp} °C</Text>
                    <Button
                        design="Transparent"
                        icon={heart2Icon}
                        onClick={()=>handleClick(weather)}
                    />
                </FlexBox>
            </Card>
        </FlexBox>
    )
}
