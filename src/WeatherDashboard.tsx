import {SearchLocation} from "./SearchLocation.tsx";
import {CurrentWeather} from "./CurrentWeather.tsx";
import {ForecastedWeather} from "./ForecastedWeather.tsx";
import {SavedWeatherList} from "./SavedWeatherList.tsx";
import {Grid} from "@ui5/webcomponents-react";
import {useState} from "react";


export function WeatherDashboard() {
    const [weather, setWeather] = useState({})
    const [savedLocations, setSavedLocations] = useState([

    ])
    const handleItemClick = (location: any) => {
        console.log(`search location`, location)
    }

    // TODO review typo
    const handleDelete = (e: any) => {
        // TODO verify filter attr
        setSavedLocations(savedLocations.filter((location) => location.cityId !== e.target.id))
    }

    const handleClick = (location: any) => {
        console.log(`location`, location)
        setSavedLocations([location, ...savedLocations])
    }

    {/*TODO query weather*/}
    const onSuggestionItemSelect = (event: any) => {
        console.log(`QUERY GET CURRENT WEATHER`)
        const locationSelected = event.detail.item.dataset;

        setWeather({
            ...locationSelected,
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
        }
        })
        console.log(weather);
    }

    return(
        <>
            <SearchLocation
                onSuggestionItemSelect={onSuggestionItemSelect}
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
