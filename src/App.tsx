import actionSettingsIcon from '@ui5/webcomponents-icons/dist/action-settings.js';
import { Avatar, ShellBar } from '@ui5/webcomponents-react';
import {SavedSavedLocationList} from "./SavedLocationList.tsx";

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
        profile={<Avatar icon={actionSettingsIcon} />}
      />
      <SavedSavedLocationList/>
    </>
  );
}

export default App;
