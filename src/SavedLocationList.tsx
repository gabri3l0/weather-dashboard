import {Card, FlexBox, FlexBoxJustifyContent, FlexBoxWrap, List} from "@ui5/webcomponents-react";
import {LocationType, SavedLocationItem} from "./SavedLocationItem.tsx";
import {spacing} from "@ui5/webcomponents-react-base";

type SavedLocationListProps = {
    locations: Array<LocationType>,
    handleSelectLocationClick: any,
    handleRemoveLocationClick: any
}

export function SavedLocationList({locations, handleSelectLocationClick, handleRemoveLocationClick}: SavedLocationListProps) {
    return (
        <FlexBox
            justifyContent={FlexBoxJustifyContent.Center}
            wrap={FlexBoxWrap.Wrap}
            style={spacing.sapUiContentPadding}
        >
            <Card
                style={{height: "26rem"}}
            >
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
            </Card>
        </FlexBox>
    )
}