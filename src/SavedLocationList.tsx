import {Card, FlexBox, FlexBoxJustifyContent, FlexBoxWrap, List} from "@ui5/webcomponents-react";
import {SavedLocationItem} from "./SavedLocationItem.tsx";
import {spacing} from "@ui5/webcomponents-react-base";

type SavedLocationListProps = {
    locations: any,
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
            <Card>
                <List
                    headerText="Saved Location List"
                >
                    {locations.map((location: any)=> {
                        return (
                           <>
                               <SavedLocationItem
                                   location={location}
                                   handleSelectLocationClick={handleSelectLocationClick}
                                   handleRemoveLocationClick={handleRemoveLocationClick}
                               />
                           </>
                        )
                    })}
                </List>
            </Card>
        </FlexBox>
    )
}
