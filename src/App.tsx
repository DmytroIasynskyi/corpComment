import Footer from "./components/layout/Footer.tsx";
import Container from "./components/layout/Container.tsx";
import HashtagList from "./components/HashtagList.tsx";
import FeedbackItemsContextProvider from "./contexts/FeedbackItemsContextProvider.tsx";


function App() {
  return (
    <div className={'app'}>
        <FeedbackItemsContextProvider>
            <Footer />
            <Container />
            <HashtagList />
        </FeedbackItemsContextProvider>
    </div>
  )
}

export default App
