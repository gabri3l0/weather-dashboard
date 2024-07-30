import {FlexBox, FlexBoxJustifyContent, FlexBoxWrap, Icon, Input, SuggestionItem} from "@ui5/webcomponents-react";
import '@ui5/webcomponents/dist/features/InputSuggestions.js';
import {spacing} from "@ui5/webcomponents-react-base";
import {useState} from "react";


export function SearchLocation() {
    const [locations, setLocations] = useState([])
    return (
        <FlexBox
            justifyContent={FlexBoxJustifyContent.Center}
            wrap={FlexBoxWrap.Wrap}
            style={spacing.sapUiContentPadding}
        >
            <Input
                type="Text"
                icon={<Icon name="search" />}
                placeholder="Type a city name"
                showSuggestions
                noTypeahead={true}
            >
                {locations.map((location: any) => {
                    return(
                        <SuggestionItem
                            text={'dede'}
                        />
                    )
                })}
            </Input>
        </FlexBox>
    )

}
