import {TFeedbackItem} from "../../lib/types.ts";
import {TriangleUpIcon} from "@radix-ui/react-icons";
import {useState} from "react";

function FeedBackItem({feedbackItem}: {feedbackItem: TFeedbackItem}) {
    const { company, badgeLetter, text, daysAgo, upvoteCount } = feedbackItem;
    const [open, setOpen] = useState(false);
    const [upvote, setUpvote] = useState(upvoteCount);

    function handleUpvote(e: React.MouseEvent<HTMLButtonElement>) {
        setUpvote(prev => prev + 1)
        e.currentTarget.disabled = true;
        e.stopPropagation();
    }

    return (
        <li
            onClick={() => setOpen(prev => !prev)}
            className={`feedback ${open && "feedback--expand"}`}
        >
            <button onClick={handleUpvote}>
                <TriangleUpIcon/>
                <span>{upvote}</span>
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