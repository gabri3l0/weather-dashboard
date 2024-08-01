import { ShellBar } from '@ui5/webcomponents-react';
import {WeatherDashboard} from "./WeatherDashboard.tsx";

function App() {
  return (
    <>
        <ShellBar
            logo={
              <img
                src="https://experience.sap.com/fiori-design-web/wp-content/themes/guidelines/assets/sap.png"
                alt={'SAP Logo'}
              />
            }
            primaryTitle="Weather Dashboard"
        />
        <WeatherDashboard/>
    </>
  );
}

export default App;
