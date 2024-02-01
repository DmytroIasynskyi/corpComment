import {TFeedbackItem} from "../../lib/types.ts";
import {TriangleUpIcon} from "@radix-ui/react-icons";

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
            <p>{daysAgo ? `${daysAgo}d` : 'NEW'}</p>
        </li>

    )
}

export default FeedBackItem;