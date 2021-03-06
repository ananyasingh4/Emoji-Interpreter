import { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "đ": "Grinning Face",
  "đ": "Grinning Face with Big Eyes",
  "đ": "Grinning Squinting Face",
  "đ": "Face with Tears of Joy",
  "đ": "Winking Face",
  "đ": "Smiling Face with Heart-Eyes",
  "â¤ī¸": "Red Heart",
  "đĨ": "Fire",
  "đĢ": "Dizzy",
  "â¨": "Sparkles",
  "đ": "Love Letter",
  "đ": "Cat",
  "đ": "Horse",
  "đĒ": "Sleepy Face",
  "đĸ": "Crying Face",
  "đ": "Skull",
  "đŊ": "Alien",
  "âī¸": "Victory Hand",
  "đ": "Thumbs Up",
  "đŖ": "Bomb",
  "â": "Watch",
  "đ": "Balloon",
  "đ": "Party Popper",
  "đ": "Neutral Face",
  "đ": "Expressionless Face",
  "đļ": "Face Without Mouth",
  "đ": "Smirking Face",
  "đ": "Unamused Face",
  "đŦ": "Grimacing Face",
  "đŽâđ¨": "Face Exhaling",
  "đ": "Relieved Face",
  "đ": "Pensive Face",
  "đˇ": "Face with Medical Mask",
  "âšī¸": "Frowning Face",
  "đŽ": "Face with Open Mouth",
  "đ¯": "Hushed Face",
  "đ˛": "Astonished Face",
  "đŗ": "Flushed Face",
  "đ§": "Anguished Face",
  "đ¨": "Fearful Face",
  "đ°": "Anxious Face with Sweat",
  "đĨ": "Sad but Relieved Face",
  "đ­": "Loudly Crying Face",
  "đą": "Face Screaming in Fear",
  "đ": "Confounded Face",
  "đŖ": "Persevering Face",
  "đ": "Disappointed Face",
  "đ": "Downcast Face with Sweat",
  "đŠ": "Weary Face"
};
var emojisweknow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning} </h2>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
