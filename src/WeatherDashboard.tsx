import {SearchLocation} from "./SearchLocation.tsx";
import {CurrentWeather} from "./CurrentWeather.tsx";
import {ForecastedWeather} from "./ForecastedWeather.tsx";
import {SavedWeatherList} from "./SavedWeatherList.tsx";
import {Grid} from "@ui5/webcomponents-react";


export function WeatherDashboard() {
    return(
        <>
            <SearchLocation/>
            <Grid>
                <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL8 L8 M12 S12'>
                    <Grid>
                        <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL12 L12 M12 S12'>
                            <CurrentWeather/>
                        </div>
                        <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL12 L12 M12 S12'>
                            <ForecastedWeather/>
                        </div>
                    </Grid>
                </div>
                <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL4 L4 M12 S12'>
                    <SavedWeatherList/>
                </div>
            </Grid>


        </>
    )
}
