import {
    Button,
    Text
} from "@ui5/webcomponents-react";
import heart2Icon from '@ui5/webcomponents-icons/dist/heart-2.js';
import heartIcon from '@ui5/webcomponents-icons/dist/heart.js';
import {CurrentWeatherProps} from "./Weather.tsx";
import {roundTemp} from "../../utils/roundTemp.tsx";


export function WeatherCard({weather, handleSaveLocationClick, isLocationSaved}: CurrentWeatherProps) {
    const date = new Date().toLocaleString('en-US', { timeZone: weather?.timezone })
    return (
        <>
            <div>
                <Text style={{display: "block", fontWeight: 'bold'}}>
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
            <Text>{roundTemp(weather.current.temp)} °C</Text>
            <Button
                design={isLocationSaved ? "Negative" : "Transparent"}
                icon={isLocationSaved ? heartIcon : heart2Icon}
                onClick={()=>handleSaveLocationClick(weather)}
            />
        </>
    )
}
