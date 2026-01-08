import { useState } from "react";
import "./App.css";

const eemojiDictionary = {
  happy: "😃",
  love: "❤️",
  angry: "😡",
  cool: "😎",
  sad: "😔",
  hello: "👋",
  fire: "🔥",
  party: "🥳",
  sleep: "😴",
  ok: "🫡",
};

function App() {
  const [input, setInput] = useState("");
  const [translated, setTranslated] = useState("");

  const handleChnage = (e) => {
    const text = e.target.value.toLowerCase();
    setInput(text);

    const words = text.split(" ");
    const result = words
      .map((word) => eemojiDictionary[word] || word)
      .join(" ");
    setTranslated(result);
  };
  return (
    <div className="App">
      <h1>😀 Emoji Translator</h1>
      <input
        type="text"
        placeholder="Type something like : happy love fire "
        value={input}
        onChange={handleChnage}
      />
      <p style={{ fontSize: "24px", marginTop: "20px" }}>{translated}</p>
    </div>
  );
}

export default App;
