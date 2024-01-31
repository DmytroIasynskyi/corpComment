import {TriangleUpIcon} from "@radix-ui/react-icons";
import Spinner from "./Spinner.tsx";
import ErrorMessage from "./ErrorMessage.tsx";
import {TFeedbackItem} from "../lib/types.ts";
import {useFeedbackItemContext} from "../hooks/hooks.ts";

function FeedbackList() {
    const {isLoading, errorMessage, feedbackItems} = useFeedbackItemContext();

    return (
        <ol className={'feedback-list'}>
            {isLoading && <Spinner />}
            {errorMessage && <ErrorMessage errorMessage={errorMessage}/>}
            {feedbackItems && feedbackItems.map((feedbackItem) => (
                <FeedBackItem feedbackItem={feedbackItem} key={feedbackItem.id} />
            ))}
        </ol>
    );
}


function FeedBackItem({feedbackItem}: {feedbackItem: TFeedbackItem}) {
    const { company, badgeLetter, text, daysAgo, upvoteCount } = feedbackItem;
    return (
        <li className={'feedback'} >
            <button>
                <TriangleUpIcon/>
                <span>{upvoteCount}</span>
            </button>
            <div>
                <p>{badgeLetter}</p>
            </div>
            <div>
                <p>{company}</p>
                <p>{text}</p>
            </div>
            <p>{daysAgo}d</p>
        </li>

    )
}


export default FeedbackList;