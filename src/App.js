import { useState } from "react";
import formatInput from "./formatInput";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");

  /**
   * Keydown event handler
   */
  function onKeyDown(event) {
    // handle backspace,digits and arrows key only
    if (
      /\d/.test(event.key) ||
      event.key === "Backspace" ||
      event.key.contains("Arrow")
    ) {
      return true;
    } else {
      event.preventDefault();
    }
  }

  /**
   * Input event handler
   */
  function onInput(event) {
    // get previous caret
    const prevCaret = event.currentTarget.selectionStart;
    const formattedInput = formatInput(event.currentTarget.value);
    event.currentTarget.value = formattedInput;
    if (inputValue.length > formattedInput.length) {
      // set previous caret when removing values
      event.currentTarget.setSelectionRange(prevCaret, prevCaret);
    }
    setInputValue(formattedInput);
  }

  return (
    <div class="container text-center">
      <input
        type="tel"
        id="phone"
        maxlength="16"
        placeholder="mobile number"
        autocomplete="off"
        value={inputValue}
        onInput={onInput}
        onKeyDown={onKeyDown}
      />
      <div>
        <label for="phone">(123)456-7890</label>
      </div>
    </div>
  );
}
