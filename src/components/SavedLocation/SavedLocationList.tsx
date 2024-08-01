import {Card, FlexBox, FlexBoxJustifyContent, FlexBoxWrap, IllustratedMessage, List} from "@ui5/webcomponents-react";
import {LocationType, SavedLocationItem} from "./SavedLocationItem.tsx";
import {spacing} from "@ui5/webcomponents-react-base";

type SavedLocationListProps = {
    locations: Array<LocationType>,
    handleRemoveLocationClick: (cityId: string)=> void,
    handleSelectLocationClick: (location: LocationType)=> void,
}

export function SavedLocationList({locations, handleSelectLocationClick, handleRemoveLocationClick}: SavedLocationListProps) {
    return (
        <FlexBox
            justifyContent={FlexBoxJustifyContent.Center}
            wrap={FlexBoxWrap.Wrap}
            style={spacing.sapUiContentPadding}
        >
            <Card
                style={{height: "27.5rem"}}
            >
                {locations.length > 0 ? (
                    <List
                        headerText="Saved Location List"
                    >
                        {locations?.map((location)=> {
                            return (
                                <SavedLocationItem
                                    key={location.cityId}
                                    location={location}
                                    handleSelectLocationClick={handleSelectLocationClick}
                                    handleRemoveLocationClick={handleRemoveLocationClick}
                                />
                            )
                        })}
                    </List>
                ) : <IllustratedMessage  name="NoSavedItems_v1" size="Dialog"/>}

            </Card>
        </FlexBox>
    )
}
