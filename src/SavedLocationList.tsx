import {Card, FlexBox, FlexBoxJustifyContent, FlexBoxWrap, List} from "@ui5/webcomponents-react";
import {SavedLocationItem} from "./SavedLocationItem.tsx";
import {spacing} from "@ui5/webcomponents-react-base";

type SavedLocationListProps = {
    locations: any,
    handleItemClick: any,
    handleDelete: any
}
export function SavedLocationList({locations, handleItemClick, handleDelete}: SavedLocationListProps) {
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
                                   handleDelete={handleDelete}
                                   handleItemClick={handleItemClick}
                               />
                           </>
                        )
                    })}
                </List>
            </Card>
        </FlexBox>
    )
}
