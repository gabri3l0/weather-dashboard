import { LineChart } from "@ui5/webcomponents-react-charts";


export function WeatherLineChart({weather}: {weather: Array<any>,}) {
    const parseDate = (dt: number) =>{
        const date = new Date(dt * 1000)
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        const hour = date.getHours()
        return `${day} ${month} ${hour}:00`;
    }

    const formattedWeatherDataset = weather?.slice(0,18)?.map((weather) => ({
        ...weather,
        temp: (weather.temp).toFixed(),
        formattedDate: parseDate(weather.dt)
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
