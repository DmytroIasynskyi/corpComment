import React, {useState} from "react";
import {MAX_CHARACTERS} from "../../lib/constants.ts";
import {useFeedbackItemContext} from "../../hooks/hooks.ts";

function FeedbackForm() {
    const [text, setText] = useState("");
    const [showValidIndicator, setShowValidIndicator] = useState(false);
    const [showInValidIndicator, setShowInValidIndicator] = useState(false);
    const charactersLeft = MAX_CHARACTERS - text.length;
    const {handleAddToList} = useFeedbackItemContext();

    return (
        <form className={`form ${showValidIndicator && 'form--valid'} ${showInValidIndicator && 'form--invalid'}`} onSubmit={handleSubmit}>
            <textarea
              id="feedback-textarea"
              placeholder="blabla"
              spellCheck={false}
              value={text}
              onChange={handleChange}
              maxLength={MAX_CHARACTERS}
            />
            <label htmlFor="feedback-textarea">
                Enter your feedback here, remember to #hashtag the company
            </label>
            <div>
                <p className="u-italic">{charactersLeft}</p>
                <button>
                    <span>Submit</span>
                </button>
            </div>
        </form>
    );

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        //basic validation
        if(text.includes("#") && text.length >= 5) {
            handleAddToList(text);
            setText("");
            setShowValidIndicator(true);
            setTimeout(() => {
                setShowValidIndicator(false);
            }, 2000)
        } else {
            setShowInValidIndicator(true);
            setTimeout(() => {
                setShowInValidIndicator(false);
            }, 2000)
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const newText = event.target.value;
        if (newText.length > MAX_CHARACTERS) {
            return;
        }
        setText(newText);
    }

}

export default FeedbackForm;