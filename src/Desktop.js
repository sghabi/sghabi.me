import React from "react";
import Window from "./Window.js";
import TypingText from "./TypingText";
import WelcomeMessage from "./ressources/welcome.js";

function Desktop() {
  return (
    <Window background="#000" name="Terminal">
      <TypingText speed="50" text={WelcomeMessage} color="#56CE06" />
    </Window>
  );
}

export default Desktop;
