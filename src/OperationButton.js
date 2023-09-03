import { ACTIONS } from "./App"

// This is a functional component named OperationButton. It receives two props, 'dispatch' and 'operation'.
export default function OperationButton({ dispatch, operation }) {
    return (
        // This is a button element that triggers a click event. When the button is clicked, it dispatches an action using the 'dispatch' function.
        <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } }) }>
            {/* The text inside the button is determined by the 'operation' prop. */}
            {operation}
        </button>
    )
}
