import Header from "./Header.tsx";
import FeedbackList from "./FeedbackList.tsx";

function Container() {
    return (
        <main className={'container'}>
            <Header />
            <FeedbackList />
        </main>
    );
}

export default Container;