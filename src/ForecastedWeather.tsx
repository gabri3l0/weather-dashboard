

export function ForecastedWeather() {
    const currentWeather = [
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
        {
            "dt": 1722535200,
            "sunrise": 1722514080,
            "sunset": 1722562020,
            "moonrise": 1722503640,
            "moonset": 1722555960,
            "moon_phase": 0.91,
            "temp": {
                "day": 30.93,
                "min": 23.72,
                "max": 33.35,
                "night": 26.31,
                "eve": 31.81,
                "morn": 23.72
            },
            "feels_like": {
                "day": 32.7,
                "night": 26.31,
                "eve": 32.18,
                "morn": 24.08
            },
            "pressure": 1017,
            "humidity": 51,
            "dew_point": 18.16,
            "wind_speed": 6.09,
            "wind_deg": 114,
            "wind_gust": 8.29,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": 37,
            "pop": 0,
            "uvi": 12.52
        },
        {
            "dt": 1722621600,
            "sunrise": 1722600510,
            "sunset": 1722648383,
            "moonrise": 1722593640,
            "moonset": 1722645300,
            "moon_phase": 0.94,
            "temp": {
                "day": 30.95,
                "min": 23.65,
                "max": 33.33,
                "night": 28.48,
                "eve": 31.73,
                "morn": 23.65
            },
            "feels_like": {
                "day": 32.34,
                "night": 28.91,
                "eve": 31.9,
                "morn": 24.03
            },
            "pressure": 1018,
            "humidity": 49,
            "dew_point": 17.74,
            "wind_speed": 5.7,
            "wind_deg": 117,
            "wind_gust": 7.57,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": 12,
            "pop": 0,
            "uvi": 12.52
        },
        {
            "dt": 1722708000,
            "sunrise": 1722686940,
            "sunset": 1722734745,
            "moonrise": 1722683640,
            "moonset": 1722734340,
            "moon_phase": 0.98,
            "temp": {
                "day": 32.12,
                "min": 23.81,
                "max": 34.31,
                "night": 29,
                "eve": 32.7,
                "morn": 23.81
            },
            "feels_like": {
                "day": 33.44,
                "night": 29.31,
                "eve": 33.12,
                "morn": 24.1
            },
            "pressure": 1014,
            "humidity": 45,
            "dew_point": 17.59,
            "wind_speed": 4.72,
            "wind_deg": 121,
            "wind_gust": 6.54,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 12.45
        },
        {
            "dt": 1722794400,
            "sunrise": 1722773369,
            "sunset": 1722821105,
            "moonrise": 1722773580,
            "moonset": 1722822960,
            "moon_phase": 0,
            "temp": {
                "day": 33.12,
                "min": 24.23,
                "max": 34.95,
                "night": 28.75,
                "eve": 33.32,
                "morn": 24.23
            },
            "feels_like": {
                "day": 33.55,
                "night": 29.34,
                "eve": 33.07,
                "morn": 24.51
            },
            "pressure": 1013,
            "humidity": 38,
            "dew_point": 15.88,
            "wind_speed": 5.34,
            "wind_deg": 104,
            "wind_gust": 7.13,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": 23,
            "pop": 0,
            "uvi": 13
        },
        {
            "dt": 1722880800,
            "sunrise": 1722859799,
            "sunset": 1722907465,
            "moonrise": 1722863340,
            "moonset": 1722911340,
            "moon_phase": 0.04,
            "temp": {
                "day": 31.4,
                "min": 24.07,
                "max": 33.73,
                "night": 28.8,
                "eve": 32.49,
                "morn": 24.07
            },
            "feels_like": {
                "day": 33.29,
                "night": 29.64,
                "eve": 32.81,
                "morn": 24.54
            },
            "pressure": 1015,
            "humidity": 50,
            "dew_point": 18.44,
            "wind_speed": 5.11,
            "wind_deg": 101,
            "wind_gust": 7.46,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 65,
            "pop": 0,
            "uvi": 13
        },
        {
            "dt": 1722967200,
            "sunrise": 1722946228,
            "sunset": 1722993823,
            "moonrise": 1722952980,
            "moonset": 1722999540,
            "moon_phase": 0.07,
            "temp": {
                "day": 31.09,
                "min": 23.51,
                "max": 33.23,
                "night": 28.81,
                "eve": 31.97,
                "morn": 23.51
            },
            "feels_like": {
                "day": 32.97,
                "night": 29.53,
                "eve": 32.79,
                "morn": 23.93
            },
            "pressure": 1016,
            "humidity": 51,
            "dew_point": 18.41,
            "wind_speed": 4.88,
            "wind_deg": 109,
            "wind_gust": 5.77,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 11,
            "pop": 0.47,
            "rain": 0.99,
            "uvi": 13
        }
    ]
    return (
        <>
            {currentWeather.slice(1,6).map(weather => {

                return(
                    <img
                        alt='weather'
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        style={{width: "6em"}}
                    />
                )
            })}
        </>
    )
}
