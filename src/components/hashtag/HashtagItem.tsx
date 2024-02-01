import {useFeedbackItemContext} from "../../hooks/hooks.ts";

function HashtagItem({ companyName }: { companyName: string}) {
    const { setSelectedCompany } = useFeedbackItemContext();
    return (
        <li>
            <button onClick={() => setSelectedCompany(companyName)}>#{companyName}</button>
        </li>
    );
}

export default HashtagItem;