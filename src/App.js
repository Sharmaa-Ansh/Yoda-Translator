import { useState } from "react";
import "./styles.css";

export default function App() {
  var serverURl = "	https://api.funtranslations.com/translate/yoda.json";
  var [input, setInput] = useState("");
  var title;
  var [answer, setAnswer] = useState("");

  function getTranslationURL(title) {
    return serverURl + "?" + "text=" + title;
  }

  function changeHandler(event) {
    setInput(event.target.value);
  }

  function clickHandler() {
    console.log(input);
    title = input;
    fetch(getTranslationURL(title))
      .then((response) => response.json())
      .then((json) => {
        var translatedtext = json.contents.translated;
        setAnswer(translatedtext);
      });
  }

  return (
    <div className="App">
      <h1>
        <strong>Yoda translator</strong>
      </h1>
      <input placeholder={"Enter Text Here"} onChange={changeHandler}></input>
      <button onClick={clickHandler}>click to translate</button>
      <h2>Translated text {answer} </h2>
    </div>
  );
}
