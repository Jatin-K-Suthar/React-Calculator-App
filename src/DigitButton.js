// Import the ACTIONS constant from the "App" module.
import { ACTIONS } from "./App"

// Define a functional component called DigitButton, which takes two props: dispatch and digit.
export default function DigitButton({ dispatch, digit }) {
    return (
        // Render a button element with an onClick event handler.
        <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } }) }>
            {/* Display the value of the "digit" prop as the button's label. */}
            {digit}
        </button>
    )
}
