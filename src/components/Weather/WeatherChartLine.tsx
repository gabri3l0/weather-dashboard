import { LineChart } from "@ui5/webcomponents-react-charts";
import {roundTemp} from "../../utils/roundTemp.tsx";
import {dateToHourlyDateString} from "../../utils/dateToHourlyDateString.tsx";


export function WeatherLineChart({weather}: {weather: Array<any>}) {
    const formattedWeatherDataset = weather?.slice(0,18)?.map((weather) => ({
        ...weather,
        temp: roundTemp(weather.temp),
        formattedDate: dateToHourlyDateString(weather.dt)
    }));

    return (
        <LineChart
            style={{height: '11rem'}}
            dimensions={[{ accessor: "formattedDate" }]}
            measures={[{ accessor: "temp", label: "Temperature °C" }]}
            dataset={formattedWeatherDataset}
        />
    )
}
