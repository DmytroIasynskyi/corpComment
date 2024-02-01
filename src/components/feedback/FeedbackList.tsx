import Spinner from "../Spinner.tsx";
import ErrorMessage from "../ErrorMessage.tsx";
import {useFeedbackItemContext} from "../../hooks/hooks.ts";
import FeedBackItem from "./FeedBackItem.tsx";

function FeedbackList() {
    const {isLoading, errorMessage, feedbackItems} = useFeedbackItemContext();

    return (
        <ol className={'feedback-list'}>
            {isLoading && <Spinner/>}
            {errorMessage && <ErrorMessage errorMessage={errorMessage}/>}
            {feedbackItems && feedbackItems.map((feedbackItem) => (
                <FeedBackItem feedbackItem={feedbackItem} key={feedbackItem.id}/>
            ))}
        </ol>
    );
}

export default FeedbackList;