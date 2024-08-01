import { LineChart } from "@ui5/webcomponents-react-charts";
import {roundTemp} from "../../utils/roundTemp.tsx";
import {timeStampToDate} from "../../utils/timeStampToDate.tsx";


export function WeatherLineChart({weather}: {weather: Array<any>,}) {
    const dateToHourlyDate = (dt: number) =>{
        const date = timeStampToDate(dt)
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        const hour = date.getHours()
        return `${day} ${month} ${hour}:00`;
    }

    const formattedWeatherDataset = weather?.slice(0,18)?.map((weather) => ({
        ...weather,
        temp: roundTemp(weather.temp),
        formattedDate: dateToHourlyDate(weather.dt)
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
