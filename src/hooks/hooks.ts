import {useContext, useEffect, useState} from "react";
import {FeedbackItemsContext} from "../contexts/FeedbackItemsContextProvider.tsx";
import {TFeedbackItem} from "../lib/types.ts";
import {BASE_URL} from "../lib/constants.ts";

export function useFeedbackItemContext() {
    const context = useContext(FeedbackItemsContext);
    if (!context) {
        throw new Error(
            "useFeedbackItemContext must be used within a ItemsProvider"
        );
    }
    return context;
}

export function useFeedbackItems() {
    const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setIsLoading(true);
        fetch(BASE_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error();
                }
                return response.json();
            })
            .then((data) => {
                setFeedbackItems(data.feedbacks);
                setIsLoading(false);
            })
            .catch((error) => {
                setErrorMessage("ERROR! " + error.message);
                setIsLoading(false);
            })
    }, []);

    return {
        feedbackItems, isLoading, errorMessage, setFeedbackItems
    }
}