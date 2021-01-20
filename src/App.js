import React, { useState } from "react";
import "./styles.css";

var emojiDictinary = {
  "😊": "Smiling Face with Smiling Eyes",
  "😂": "Face with Tears of Joy",
  "🤣": "Rolling on the floor Laughing",
  "😍": "Smiling Face with Heart-Eyes",
  "🥺": "Pleading Face",
  "😒": "Unamused Face",
  "🥰": "Smiling Face with Hearts",
  "😎": "Smiling Face with Glass"
};

var emojisWeKnow = Object.keys(emojiDictinary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputhandler(event) {
    var val = event.target.value;
    var meaning = emojiDictinary[val];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictinary[emoji];
    // console.log(emojiMeaning);
    setMeaning(emojiMeaning);
  }
  return (
    <div className="App">
      <h1>Welcome to Emoji Interpreter</h1>
      <input onChange={emojiInputhandler} />
      <h3>{meaning}</h3>
      <hr />
      <h3>Emojis we have</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <div
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "1.5rem", padding: "0.5rem", display: "inline" }}
          >
            {emoji}
          </div>
        );
      })}
    </div>
  );
}
