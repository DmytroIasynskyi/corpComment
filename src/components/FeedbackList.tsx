import {TriangleUpIcon} from "@radix-ui/react-icons";
import {useEffect, useState} from "react";
import Spinner from "./Spinner.tsx";

function FeedbackList() {
    const [feedbackItems, setFeedbackItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks')
            .then((response) => response.json())
            .then((data) => {
                setFeedbackItems(data.feedbacks);
                setIsLoading(false);
            });
    }, []);

    return (
        <ol className={'feedback-list'}>
            {isLoading && <Spinner />}
            {feedbackItems && feedbackItems.map((feedbackItem) => (
                <FeedBackItem feedbackItem={feedbackItem} key={feedbackItem.id} />
            ))}
        </ol>
    );
}

function FeedBackItem({feedbackItem}: {feedbackItem: FeedbackItem}) {
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

type FeedbackItem = {
    id: number;
    company: string;
    badgeLetter: string;
    text: string;
    daysAgo: number;
    upvoteCount: number;
}

export default FeedbackList;