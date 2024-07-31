import {Card, FlexBox, FlexBoxAlignItems, FlexBoxJustifyContent, FlexBoxWrap, Text} from "@ui5/webcomponents-react";
import {spacing} from "@ui5/webcomponents-react-base";


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
    "minutely": [
        {
            "dt": 1722380280,
            "precipitation": 0
        },
        {
            "dt": 1722380340,
            "precipitation": 0
        },
        {
            "dt": 1722380400,
            "precipitation": 0
        },
        {
            "dt": 1722380460,
            "precipitation": 0
        },
        {
            "dt": 1722380520,
            "precipitation": 0
        },
        {
            "dt": 1722380580,
            "precipitation": 0
        },
        {
            "dt": 1722380640,
            "precipitation": 0
        },
        {
            "dt": 1722380700,
            "precipitation": 0
        },
        {
            "dt": 1722380760,
            "precipitation": 0
        },
        {
            "dt": 1722380820,
            "precipitation": 0
        },
        {
            "dt": 1722380880,
            "precipitation": 0
        },
        {
            "dt": 1722380940,
            "precipitation": 0
        },
        {
            "dt": 1722381000,
            "precipitation": 0
        },
        {
            "dt": 1722381060,
            "precipitation": 0
        },
        {
            "dt": 1722381120,
            "precipitation": 0
        },
        {
            "dt": 1722381180,
            "precipitation": 0
        },
        {
            "dt": 1722381240,
            "precipitation": 0
        },
        {
            "dt": 1722381300,
            "precipitation": 0
        },
        {
            "dt": 1722381360,
            "precipitation": 0
        },
        {
            "dt": 1722381420,
            "precipitation": 0
        },
        {
            "dt": 1722381480,
            "precipitation": 0
        },
        {
            "dt": 1722381540,
            "precipitation": 0
        },
        {
            "dt": 1722381600,
            "precipitation": 0
        },
        {
            "dt": 1722381660,
            "precipitation": 0
        },
        {
            "dt": 1722381720,
            "precipitation": 0
        },
        {
            "dt": 1722381780,
            "precipitation": 0
        },
        {
            "dt": 1722381840,
            "precipitation": 0
        },
        {
            "dt": 1722381900,
            "precipitation": 0
        },
        {
            "dt": 1722381960,
            "precipitation": 0
        },
        {
            "dt": 1722382020,
            "precipitation": 0
        },
        {
            "dt": 1722382080,
            "precipitation": 0
        },
        {
            "dt": 1722382140,
            "precipitation": 0
        },
        {
            "dt": 1722382200,
            "precipitation": 0
        },
        {
            "dt": 1722382260,
            "precipitation": 0
        },
        {
            "dt": 1722382320,
            "precipitation": 0
        },
        {
            "dt": 1722382380,
            "precipitation": 0
        },
        {
            "dt": 1722382440,
            "precipitation": 0
        },
        {
            "dt": 1722382500,
            "precipitation": 0
        },
        {
            "dt": 1722382560,
            "precipitation": 0
        },
        {
            "dt": 1722382620,
            "precipitation": 0
        },
        {
            "dt": 1722382680,
            "precipitation": 0
        },
        {
            "dt": 1722382740,
            "precipitation": 0
        },
        {
            "dt": 1722382800,
            "precipitation": 0
        },
        {
            "dt": 1722382860,
            "precipitation": 0
        },
        {
            "dt": 1722382920,
            "precipitation": 0
        },
        {
            "dt": 1722382980,
            "precipitation": 0
        },
        {
            "dt": 1722383040,
            "precipitation": 0
        },
        {
            "dt": 1722383100,
            "precipitation": 0
        },
        {
            "dt": 1722383160,
            "precipitation": 0
        },
        {
            "dt": 1722383220,
            "precipitation": 0
        },
        {
            "dt": 1722383280,
            "precipitation": 0
        },
        {
            "dt": 1722383340,
            "precipitation": 0
        },
        {
            "dt": 1722383400,
            "precipitation": 0
        },
        {
            "dt": 1722383460,
            "precipitation": 0
        },
        {
            "dt": 1722383520,
            "precipitation": 0
        },
        {
            "dt": 1722383580,
            "precipitation": 0
        },
        {
            "dt": 1722383640,
            "precipitation": 0
        },
        {
            "dt": 1722383700,
            "precipitation": 0
        },
        {
            "dt": 1722383760,
            "precipitation": 0
        },
        {
            "dt": 1722383820,
            "precipitation": 0
        }
    ],
    "hourly": [
        {
            "dt": 1722376800,
            "temp": 33.32,
            "feels_like": 33.86,
            "pressure": 1011,
            "humidity": 38,
            "dew_point": 17.08,
            "uvi": 5.05,
            "clouds": 4,
            "visibility": 10000,
            "wind_speed": 3.75,
            "wind_deg": 100,
            "wind_gust": 4.2,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.34,
            "rain": {
                "1h": 0.13
            }
        },
        {
            "dt": 1722380400,
            "temp": 33.27,
            "feels_like": 33.18,
            "pressure": 1011,
            "humidity": 35,
            "dew_point": 15.74,
            "uvi": 2.3,
            "clouds": 4,
            "visibility": 10000,
            "wind_speed": 4.38,
            "wind_deg": 107,
            "wind_gust": 5.11,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.34
        },
        {
            "dt": 1722384000,
            "temp": 32.98,
            "feels_like": 33.54,
            "pressure": 1011,
            "humidity": 39,
            "dew_point": 17.19,
            "uvi": 0.69,
            "clouds": 4,
            "visibility": 10000,
            "wind_speed": 5.2,
            "wind_deg": 116,
            "wind_gust": 6.2,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.31
        },
        {
            "dt": 1722387600,
            "temp": 31.96,
            "feels_like": 33.39,
            "pressure": 1011,
            "humidity": 46,
            "dew_point": 18.9,
            "uvi": 0,
            "clouds": 2,
            "visibility": 10000,
            "wind_speed": 4.92,
            "wind_deg": 125,
            "wind_gust": 7.18,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.27
        },
        {
            "dt": 1722391200,
            "temp": 30.43,
            "feels_like": 32.63,
            "pressure": 1012,
            "humidity": 55,
            "dew_point": 20.37,
            "uvi": 0,
            "clouds": 2,
            "visibility": 10000,
            "wind_speed": 4.01,
            "wind_deg": 134,
            "wind_gust": 7.25,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.32,
            "rain": {
                "1h": 0.1
            }
        },
        {
            "dt": 1722394800,
            "temp": 28.85,
            "feels_like": 31.24,
            "pressure": 1012,
            "humidity": 63,
            "dew_point": 21.1,
            "uvi": 0,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 3.74,
            "wind_deg": 127,
            "wind_gust": 6.95,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0.23
        },
        {
            "dt": 1722398400,
            "temp": 26.98,
            "feels_like": 28.99,
            "pressure": 1013,
            "humidity": 72,
            "dew_point": 19.87,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.97,
            "wind_deg": 122,
            "wind_gust": 5.47,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0.16
        },
        {
            "dt": 1722402000,
            "temp": 26.25,
            "feels_like": 26.25,
            "pressure": 1013,
            "humidity": 75,
            "dew_point": 19.99,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.32,
            "wind_deg": 120,
            "wind_gust": 4.03,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0.11
        },
        {
            "dt": 1722405600,
            "temp": 25.62,
            "feels_like": 26.27,
            "pressure": 1013,
            "humidity": 78,
            "dew_point": 19.89,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 1.43,
            "wind_deg": 102,
            "wind_gust": 3.11,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0.07
        },
        {
            "dt": 1722409200,
            "temp": 24.99,
            "feels_like": 25.63,
            "pressure": 1013,
            "humidity": 80,
            "dew_point": 19.85,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 0.84,
            "wind_deg": 85,
            "wind_gust": 2.06,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0.05
        },
        {
            "dt": 1722412800,
            "temp": 24.43,
            "feels_like": 25.07,
            "pressure": 1013,
            "humidity": 82,
            "dew_point": 19.61,
            "uvi": 0,
            "clouds": 4,
            "visibility": 10000,
            "wind_speed": 0.56,
            "wind_deg": 72,
            "wind_gust": 1.38,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722416400,
            "temp": 24.22,
            "feels_like": 24.81,
            "pressure": 1012,
            "humidity": 81,
            "dew_point": 19.35,
            "uvi": 0,
            "clouds": 8,
            "visibility": 10000,
            "wind_speed": 0.41,
            "wind_deg": 29,
            "wind_gust": 0.9,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722420000,
            "temp": 24.06,
            "feels_like": 24.64,
            "pressure": 1012,
            "humidity": 81,
            "dew_point": 19.18,
            "uvi": 0,
            "clouds": 22,
            "visibility": 10000,
            "wind_speed": 0.61,
            "wind_deg": 348,
            "wind_gust": 0.81,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722423600,
            "temp": 23.87,
            "feels_like": 24.45,
            "pressure": 1013,
            "humidity": 82,
            "dew_point": 19.2,
            "uvi": 0,
            "clouds": 37,
            "visibility": 10000,
            "wind_speed": 0.93,
            "wind_deg": 334,
            "wind_gust": 0.64,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722427200,
            "temp": 23.64,
            "feels_like": 24.23,
            "pressure": 1013,
            "humidity": 83,
            "dew_point": 19.15,
            "uvi": 0,
            "clouds": 47,
            "visibility": 10000,
            "wind_speed": 0.79,
            "wind_deg": 334,
            "wind_gust": 0.84,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722430800,
            "temp": 24.2,
            "feels_like": 24.79,
            "pressure": 1014,
            "humidity": 81,
            "dew_point": 19.18,
            "uvi": 0.36,
            "clouds": 96,
            "visibility": 10000,
            "wind_speed": 0.79,
            "wind_deg": 346,
            "wind_gust": 0.88,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722434400,
            "temp": 25.75,
            "feels_like": 26.31,
            "pressure": 1014,
            "humidity": 74,
            "dew_point": 19.19,
            "uvi": 1.5,
            "clouds": 99,
            "visibility": 10000,
            "wind_speed": 1.43,
            "wind_deg": 3,
            "wind_gust": 0.9,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722438000,
            "temp": 27.1,
            "feels_like": 28.85,
            "pressure": 1015,
            "humidity": 68,
            "dew_point": 19.31,
            "uvi": 3.83,
            "clouds": 76,
            "visibility": 10000,
            "wind_speed": 1.97,
            "wind_deg": 29,
            "wind_gust": 0.64,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722441600,
            "temp": 28.71,
            "feels_like": 30.99,
            "pressure": 1015,
            "humidity": 63,
            "dew_point": 19.65,
            "uvi": 6.91,
            "clouds": 57,
            "visibility": 10000,
            "wind_speed": 2.23,
            "wind_deg": 35,
            "wind_gust": 0.6,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722445200,
            "temp": 30.36,
            "feels_like": 33.11,
            "pressure": 1015,
            "humidity": 58,
            "dew_point": 19.8,
            "uvi": 9.9,
            "clouds": 46,
            "visibility": 10000,
            "wind_speed": 2.2,
            "wind_deg": 40,
            "wind_gust": 0.77,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722448800,
            "temp": 31.72,
            "feels_like": 34.57,
            "pressure": 1014,
            "humidity": 53,
            "dew_point": 19.63,
            "uvi": 11.95,
            "clouds": 38,
            "visibility": 10000,
            "wind_speed": 2.26,
            "wind_deg": 50,
            "wind_gust": 1.18,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722452400,
            "temp": 32.71,
            "feels_like": 35.71,
            "pressure": 1013,
            "humidity": 50,
            "dew_point": 19.66,
            "uvi": 12.36,
            "clouds": 6,
            "visibility": 10000,
            "wind_speed": 2.59,
            "wind_deg": 62,
            "wind_gust": 1.93,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.41,
            "rain": {
                "1h": 0.1
            }
        },
        {
            "dt": 1722456000,
            "temp": 33.25,
            "feels_like": 36.22,
            "pressure": 1013,
            "humidity": 48,
            "dew_point": 19.61,
            "uvi": 10.86,
            "clouds": 8,
            "visibility": 10000,
            "wind_speed": 2.89,
            "wind_deg": 76,
            "wind_gust": 2.83,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.39,
            "rain": {
                "1h": 0.1
            }
        },
        {
            "dt": 1722459600,
            "temp": 33.5,
            "feels_like": 36.42,
            "pressure": 1012,
            "humidity": 47,
            "dew_point": 19.28,
            "uvi": 8.09,
            "clouds": 8,
            "visibility": 10000,
            "wind_speed": 3.29,
            "wind_deg": 91,
            "wind_gust": 3.75,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.39,
            "rain": {
                "1h": 0.11
            }
        },
        {
            "dt": 1722463200,
            "temp": 33.62,
            "feels_like": 35.81,
            "pressure": 1012,
            "humidity": 44,
            "dew_point": 18.19,
            "uvi": 4.92,
            "clouds": 7,
            "visibility": 10000,
            "wind_speed": 4.08,
            "wind_deg": 99,
            "wind_gust": 4.7,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.4,
            "rain": {
                "1h": 0.15
            }
        },
        {
            "dt": 1722466800,
            "temp": 32.92,
            "feels_like": 34.32,
            "pressure": 1012,
            "humidity": 43,
            "dew_point": 16.99,
            "uvi": 2.26,
            "clouds": 8,
            "visibility": 10000,
            "wind_speed": 5.03,
            "wind_deg": 109,
            "wind_gust": 6.05,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.38
        },
        {
            "dt": 1722470400,
            "temp": 31.57,
            "feels_like": 32.95,
            "pressure": 1012,
            "humidity": 47,
            "dew_point": 17.05,
            "uvi": 0.67,
            "clouds": 8,
            "visibility": 10000,
            "wind_speed": 5.5,
            "wind_deg": 118,
            "wind_gust": 7.69,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.36
        },
        {
            "dt": 1722474000,
            "temp": 29.7,
            "feels_like": 31.23,
            "pressure": 1013,
            "humidity": 54,
            "dew_point": 17.73,
            "uvi": 0,
            "clouds": 6,
            "visibility": 10000,
            "wind_speed": 5.19,
            "wind_deg": 128,
            "wind_gust": 8.71,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.03
        },
        {
            "dt": 1722477600,
            "temp": 28.19,
            "feels_like": 29.85,
            "pressure": 1013,
            "humidity": 61,
            "dew_point": 18.25,
            "uvi": 0,
            "clouds": 3,
            "visibility": 10000,
            "wind_speed": 4.5,
            "wind_deg": 141,
            "wind_gust": 9.65,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722481200,
            "temp": 27.56,
            "feels_like": 29.11,
            "pressure": 1014,
            "humidity": 63,
            "dew_point": 18.54,
            "uvi": 0,
            "clouds": 2,
            "visibility": 10000,
            "wind_speed": 3.69,
            "wind_deg": 126,
            "wind_gust": 7.96,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722484800,
            "temp": 26.68,
            "feels_like": 28.26,
            "pressure": 1015,
            "humidity": 69,
            "dew_point": 19.13,
            "uvi": 0,
            "clouds": 2,
            "visibility": 10000,
            "wind_speed": 2.98,
            "wind_deg": 124,
            "wind_gust": 5.36,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722488400,
            "temp": 25.79,
            "feels_like": 26.33,
            "pressure": 1015,
            "humidity": 73,
            "dew_point": 19.12,
            "uvi": 0,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 2.16,
            "wind_deg": 130,
            "wind_gust": 3.89,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722492000,
            "temp": 25.13,
            "feels_like": 25.66,
            "pressure": 1015,
            "humidity": 75,
            "dew_point": 18.83,
            "uvi": 0,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 1.45,
            "wind_deg": 113,
            "wind_gust": 3.23,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722495600,
            "temp": 24.57,
            "feels_like": 25.07,
            "pressure": 1015,
            "humidity": 76,
            "dew_point": 18.58,
            "uvi": 0,
            "clouds": 4,
            "visibility": 10000,
            "wind_speed": 0.97,
            "wind_deg": 116,
            "wind_gust": 2.52,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722499200,
            "temp": 24.22,
            "feels_like": 24.68,
            "pressure": 1015,
            "humidity": 76,
            "dew_point": 18.29,
            "uvi": 0,
            "clouds": 9,
            "visibility": 10000,
            "wind_speed": 0.53,
            "wind_deg": 109,
            "wind_gust": 1.72,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722502800,
            "temp": 23.98,
            "feels_like": 24.44,
            "pressure": 1015,
            "humidity": 77,
            "dew_point": 17.99,
            "uvi": 0,
            "clouds": 13,
            "visibility": 10000,
            "wind_speed": 0.49,
            "wind_deg": 103,
            "wind_gust": 1.45,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722506400,
            "temp": 23.86,
            "feels_like": 24.31,
            "pressure": 1015,
            "humidity": 77,
            "dew_point": 17.92,
            "uvi": 0,
            "clouds": 17,
            "visibility": 10000,
            "wind_speed": 0.32,
            "wind_deg": 104,
            "wind_gust": 1.02,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722510000,
            "temp": 23.85,
            "feels_like": 24.25,
            "pressure": 1015,
            "humidity": 75,
            "dew_point": 17.44,
            "uvi": 0,
            "clouds": 21,
            "visibility": 10000,
            "wind_speed": 0.22,
            "wind_deg": 112,
            "wind_gust": 0.79,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722513600,
            "temp": 23.72,
            "feels_like": 24.08,
            "pressure": 1016,
            "humidity": 74,
            "dew_point": 17.07,
            "uvi": 0,
            "clouds": 22,
            "visibility": 10000,
            "wind_speed": 0.23,
            "wind_deg": 59,
            "wind_gust": 0.84,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722517200,
            "temp": 24.02,
            "feels_like": 24.41,
            "pressure": 1017,
            "humidity": 74,
            "dew_point": 17.46,
            "uvi": 0.31,
            "clouds": 52,
            "visibility": 10000,
            "wind_speed": 0.35,
            "wind_deg": 18,
            "wind_gust": 0.58,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722520800,
            "temp": 25.13,
            "feels_like": 25.58,
            "pressure": 1017,
            "humidity": 72,
            "dew_point": 17.94,
            "uvi": 1.25,
            "clouds": 55,
            "visibility": 10000,
            "wind_speed": 1.12,
            "wind_deg": 31,
            "wind_gust": 0.48,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722524400,
            "temp": 26.05,
            "feels_like": 26.05,
            "pressure": 1018,
            "humidity": 70,
            "dew_point": 18.39,
            "uvi": 3.22,
            "clouds": 55,
            "visibility": 10000,
            "wind_speed": 1.58,
            "wind_deg": 43,
            "wind_gust": 0.78,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722528000,
            "temp": 27.48,
            "feels_like": 29.18,
            "pressure": 1018,
            "humidity": 65,
            "dew_point": 18.73,
            "uvi": 6.7,
            "clouds": 53,
            "visibility": 10000,
            "wind_speed": 1.93,
            "wind_deg": 47,
            "wind_gust": 1.26,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722531600,
            "temp": 29.27,
            "feels_like": 31.17,
            "pressure": 1018,
            "humidity": 58,
            "dew_point": 18.64,
            "uvi": 10.04,
            "clouds": 45,
            "visibility": 10000,
            "wind_speed": 2.3,
            "wind_deg": 56,
            "wind_gust": 2.16,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722535200,
            "temp": 30.93,
            "feels_like": 32.7,
            "pressure": 1017,
            "humidity": 51,
            "dew_point": 18.16,
            "uvi": 12.06,
            "clouds": 37,
            "visibility": 10000,
            "wind_speed": 2.69,
            "wind_deg": 70,
            "wind_gust": 3.39,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722538800,
            "temp": 32.04,
            "feels_like": 33.31,
            "pressure": 1017,
            "humidity": 45,
            "dew_point": 17.33,
            "uvi": 12.52,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.19,
            "wind_deg": 86,
            "wind_gust": 4.5,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722542400,
            "temp": 32.89,
            "feels_like": 33.82,
            "pressure": 1016,
            "humidity": 41,
            "dew_point": 16.73,
            "uvi": 11.01,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 4.12,
            "wind_deg": 100,
            "wind_gust": 5.71,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1722546000,
            "temp": 33.35,
            "feels_like": 34.12,
            "pressure": 1015,
            "humidity": 39,
            "dew_point": 16.2,
            "uvi": 8.17,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 5.11,
            "wind_deg": 108,
            "wind_gust": 6.62,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        }
    ],
    "daily": [
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
}
export function CurrentWeather() {
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
                            Monterrey, MX
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
                </FlexBox>
            </Card>
        </FlexBox>
    )
}
