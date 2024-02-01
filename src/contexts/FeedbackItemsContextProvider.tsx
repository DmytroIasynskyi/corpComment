import {createContext, ReactNode, useEffect, useState} from "react";
import {TFeedbackItem} from "../lib/types.ts";


export const FeedbackItemsContext = createContext<{
    feedbackItems: TFeedbackItem[];
    isLoading: boolean;
    errorMessage: string;
    handleAddToList: (text: string) => void;
}>({
    feedbackItems: [],
    isLoading: false,
    errorMessage: "",
    handleAddToList: () => {},
});

function FeedbackItemsContextProvider({children}: {children: ReactNode}) {
    const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function handleAddToList(text: string) {
        const companyName = text
            .split(' ')
            .find((word: string) => word.startsWith('#'))!
            .substring(1);

        const newItem: TFeedbackItem = {
            id: Date.now(),
            company: companyName,
            badgeLetter: companyName.substring(0,1).toUpperCase(),
            text: text,
            daysAgo: 0,
            upvoteCount: 0
        }

        setFeedbackItems([...feedbackItems, newItem])

        await fetch(`https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
    }

    useEffect(() => {
        setIsLoading(true);
        fetch('https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks')
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

    return (
        <FeedbackItemsContext.Provider value={{
            feedbackItems,
            isLoading,
            errorMessage,
            handleAddToList,
        }}>
            {children}
        </FeedbackItemsContext.Provider>
    )
}

export default FeedbackItemsContextProvider;