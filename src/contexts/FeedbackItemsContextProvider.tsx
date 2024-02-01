import {createContext, ReactNode,  useState} from "react";
import {TFeedbackItem} from "../lib/types.ts";
import {ALL_COMPANIES, BASE_URL} from "../lib/constants.ts";
import {useFeedbackItems} from "../hooks/hooks.ts";

export const FeedbackItemsContext = createContext<{
    isLoading: boolean;
    errorMessage: string;
    handleAddToList: (text: string) => void;
    uniqCompanyList: string[];
    selectedFeedbackItems: TFeedbackItem[];
    setSelectedCompany: (company: string) => void;
} | null>(null);

function FeedbackItemsContextProvider({children}: {children: ReactNode}) {
    const { feedbackItems, isLoading, errorMessage, setFeedbackItems } = useFeedbackItems();
    const [selectedCompany, setSelectedCompany] = useState(ALL_COMPANIES);

    const filteredFeedbackItems = feedbackItems.filter((feedbackItem) => feedbackItem.company === selectedCompany);
    const selectedFeedbackItems = selectedCompany === ALL_COMPANIES ? feedbackItems : filteredFeedbackItems;
    const companyList = feedbackItems.map((feedbackItem) => feedbackItem.company);
    const uniqCompanyList = [ALL_COMPANIES,...new Set(companyList)];

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

        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
    }

    return (
        <FeedbackItemsContext.Provider value={{
            isLoading,
            errorMessage,
            handleAddToList,
            uniqCompanyList,
            selectedFeedbackItems,
            setSelectedCompany
        }}>
            {children}
        </FeedbackItemsContext.Provider>
    )
}

export default FeedbackItemsContextProvider;