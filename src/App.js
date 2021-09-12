import { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😆": "Grinning Squinting Face",
  "😂": "Face with Tears of Joy",
  "😉": "Winking Face",
  "😍": "Smiling Face with Heart-Eyes",
  "❤️": "Red Heart",
  "🔥": "Fire",
  "💫": "Dizzy",
  "✨": "Sparkles",
  "💌": "Love Letter",
  "🐈": "Cat",
  "🐎": "Horse",
  "😪": "Sleepy Face",
  "😢": "Crying Face",
  "💀": "Skull",
  "👽": "Alien",
  "✌️": "Victory Hand",
  "👍": "Thumbs Up",
  "💣": "Bomb",
  "⌚": "Watch",
  "🎈": "Balloon",
  "🎉": "Party Popper",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "😬": "Grimacing Face",
  "😮‍💨": "Face Exhaling",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😷": "Face with Medical Mask",
  "☹️": "Frowning Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face"
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
