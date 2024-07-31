import {SearchLocation} from "./SearchLocation.tsx";
import {CurrentWeather} from "./CurrentWeather.tsx";
import {ForecastedWeather} from "./ForecastedWeather.tsx";
import {SavedWeatherList} from "./SavedWeatherList.tsx";
import {Grid} from "@ui5/webcomponents-react";
import {useState} from "react";


export function WeatherDashboard() {
    const weather = {
        "lat": 25.6667,
        "lon": -100.3167,
        "timezone": "Europe/Rome",
        "timezone_offset": -21600,
        "current": {
            "dt": 1722380248,
            "sunrise": 1722341220,
            "sunset": 1722389291,
            "temp": 33.27,
            "feels_like": 33.18,
            "pressure": 1011,
            "humidity": 35,
            "dew_point": 15.74,
            "uvi": 2.3,
            "clouds": 4,
            "visibility": 10000,
            "wind_speed": 5.81,
            "wind_deg": 204,
            "wind_gust": 13.41,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
    }
    const [savedLocations, setSavedLocations] = useState([
        {
            "dt": 1722362400,
            "sunrise": 1722341220,
            "sunset": 1722389291,
            "moonrise": 1722324420,
            "moonset": 1722376080,
            "moon_phase": 0.84,
            "temp": {
                "day": 31.14,
                "min": 24.09,
                "max": 33.39,
                "night": 26.25,
                "eve": 32.98,
                "morn": 24.09
            },
            "feels_like": {
                "day": 34.4,
                "night": 26.25,
                "eve": 33.54,
                "morn": 24.8
            },
            "pressure": 1013,
            "humidity": 57,
            "dew_point": 20.36,
            "wind_speed": 5.2,
            "wind_deg": 116,
            "wind_gust": 7.25,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 41,
            "pop": 0.34,
            "rain": 0.23,
            "uvi": 12.53
        },
        {
            "dt": 1722448800,
            "sunrise": 1722427650,
            "sunset": 1722475656,
            "moonrise": 1722413880,
            "moonset": 1722466140,
            "moon_phase": 0.88,
            "temp": {
                "day": 31.72,
                "min": 23.64,
                "max": 33.62,
                "night": 25.79,
                "eve": 31.57,
                "morn": 23.64
            },
            "feels_like": {
                "day": 34.57,
                "night": 26.33,
                "eve": 32.95,
                "morn": 24.23
            },
            "pressure": 1014,
            "humidity": 53,
            "dew_point": 19.63,
            "wind_speed": 5.5,
            "wind_deg": 118,
            "wind_gust": 9.65,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 38,
            "pop": 0.41,
            "rain": 0.46,
            "uvi": 12.36
        },
    ])
    const handleItemClick = (location: any) => {
        console.log(`search location`, location)
    }

    // TODO review typo
    const handleDelete = (e: any) => {
        // TODO verify filter attr
        setSavedLocations(savedLocations.filter((location) => location.dt.toString() !== e.target.id))
    }

    const handleClick = (location: any) => {
        console.log(`location`, location)
        // TODO fix data parser
        const data =         {
                "dt": 1722448800,
                "sunrise": 1722427650,
                "sunset": 1722475656,
                "moonrise": 1722413880,
                "moonset": 1722466140,
                "moon_phase": 0.88,
                "temp": {
                    "day": 31.72,
                    "min": 23.64,
                    "max": 33.62,
                    "night": 25.79,
                    "eve": 31.57,
                    "morn": 23.64
                },
                "feels_like": {
                    "day": 34.57,
                    "night": 26.33,
                    "eve": 32.95,
                    "morn": 24.23
                },
                "pressure": 1014,
                "humidity": 53,
                "dew_point": 19.63,
                "wind_speed": 5.5,
                "wind_deg": 118,
                "wind_gust": 9.65,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 38,
                "pop": 0.41,
                "rain": 0.46,
                "uvi": 12.36
            }
        setSavedLocations([data, ...savedLocations])
    }

    {/*TODO typo*/}
    const handleSuggestionItemSelected = (event: any) => {
        const locationSelected = event.detail.item.dataset;
        console.log(locationSelected);
    }

    return(
        <>
            <SearchLocation
                handleSuggestionItemSelected={handleSuggestionItemSelected}
            />
            <Grid>
                <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL8 L8 M12 S12'>
                    <Grid>
                        <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL12 L12 M12 S12'>
                            <CurrentWeather
                                weather={weather}
                                handleClick={handleClick}
                            />
                        </div>
                        <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL12 L12 M12 S12'>
                            <ForecastedWeather/>
                        </div>
                    </Grid>
                </div>
                <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL4 L4 M12 S12'>
                    <SavedWeatherList
                        locations={savedLocations}
                        handleItemClick={handleItemClick}
                        handleDelete={handleDelete}
                    />
                </div>
            </Grid>


        </>
    )
}
