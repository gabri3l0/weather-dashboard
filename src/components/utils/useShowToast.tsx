import {Modals} from "@ui5/webcomponents-react";
import {customErrorMessage} from "../../utils/customErrorMessage.tsx";


export function useShowToast() {
    const showToast = Modals.useShowToast();
    const displayErrorToast = (errorMessage: string) => {
        showToast({
            children: customErrorMessage(errorMessage)
        });
    }
    return { displayErrorToast }
}
