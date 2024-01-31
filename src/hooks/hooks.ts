import {useContext} from "react";
import {FeedbackItemsContext} from "../contexts/FeedbackItemsContextProvider.tsx";

export function useFeedbackItemContext() {
    const context = useContext(FeedbackItemsContext);
    if (!context) {
        throw new Error(
            "useFeedbackItemContext must be used within a ItemsProvider"
        );
    }
    return context;
}