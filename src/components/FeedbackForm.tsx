import React, {useState} from "react";
import {MAX_CHARACTERS} from "../lib/constants.ts";

function FeedbackForm() {
    const [text, setText] = useState("");
    const charactersLeft = MAX_CHARACTERS - text.length;

    return (
        <form className={`form`}>
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

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const newText = event.target.value;
        if (newText.length > MAX_CHARACTERS) {
            return;
        }
        setText(newText);
    }

}

export default FeedbackForm;