import {
    BusyIndicator,
    FlexBox,
    FlexBoxJustifyContent,
    FlexBoxWrap
} from "@ui5/webcomponents-react";
import {spacing} from "@ui5/webcomponents-react-base";
import {LocationType} from "../SavedLocation/SavedLocationItem.tsx";
import {GPSButton} from "./GPSButton.tsx";
import {SearchLocationInput} from "./SearchLocationInput.tsx";
import {useState} from "react";


export function SearchLocation({handleSuggestionItemClick}: {handleSuggestionItemClick: (location: LocationType)=>void,}) {
    const [isSearchInputLoading, setIsSearchInputLoading] = useState(false)
    const [isGetLocationLoading, setIsGetLocationLoading] = useState(false)
    return (
        <FlexBox
            justifyContent={FlexBoxJustifyContent.Center}
            wrap={FlexBoxWrap.Wrap}
            alignItems="Center"
            style={spacing.sapUiContentPadding}
        >
            <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL12 L12 M12 S12'>
                <GPSButton
                    isSearchInputLoading={isSearchInputLoading}
                    setIsGetLocationLoading={setIsGetLocationLoading}
                    handleSuggestionItemClick={handleSuggestionItemClick}
                />
            </div>
            <div data-layout-indent='XL0 L0 M0 S0' data-layout-span='XL12 L12 M12 S12'>
                <SearchLocationInput
                    isGetLocationLoading={isGetLocationLoading}
                    setIsSearchInputLoading={setIsSearchInputLoading}
                    handleSuggestionItemClick={handleSuggestionItemClick}
                />
            </div>
            <BusyIndicator
                active={isSearchInputLoading || isGetLocationLoading}
                delay={0}
                size="Large"
            />
        </FlexBox>
    )

}
