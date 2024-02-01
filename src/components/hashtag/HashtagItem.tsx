import {useFeedbackItemContext} from "../../hooks/hooks.ts";
import {ALL_COMPANIES} from "../../lib/constants.ts";

function HashtagItem({ companyName }: { companyName: string}) {
    const { setSelectedCompany } = useFeedbackItemContext();
    return (
        <li>
            <button onClick={() => setSelectedCompany(companyName)}>{companyName === ALL_COMPANIES ? ALL_COMPANIES : ` #${companyName}`}</button>
        </li>
    );
}

export default HashtagItem;