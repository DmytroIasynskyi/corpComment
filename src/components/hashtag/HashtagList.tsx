import {useFeedbackItemContext} from "../../hooks/hooks.ts";
import HashtagItem from "./HashtagItem.tsx";

function HashtagList() {
    const { uniqCompanyList } = useFeedbackItemContext();

    return (
        <ul className={'hashtags'}>
            {uniqCompanyList && uniqCompanyList.map((companyName) => (
                <HashtagItem companyName={companyName} key={companyName}/>
            ))}
        </ul>
    );
}

export default HashtagList;