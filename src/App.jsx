import { useState } from "react";
import "./App.css";
import {
  lowercaseLetters,
  numbers,
  symbols,
  uppercaseLetters,
} from "./Data/PassCha";

function App() {
  let [uppercase, setuppercase] = useState(false);
  let [lowercase, setlowercase] = useState(false);
  let [number, setnumber] = useState(false);
  let [symbol, setsymbol] = useState(false);
  let [passwordlength, setPaswordL] = useState();
  let [Fpass, setFPass] = useState("");

  let createpassword = () => {
    let charSet = "";
    let finalPass = "";
    if (uppercase || lowercase || number || symbol) {
      if (uppercase) charSet += uppercaseLetters;
      if (lowercase) charSet += lowercaseLetters;
      if (number) charSet += numbers;
      if (symbol) charSet += symbols;
      for (let i = 0; i < passwordlength; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setFPass(finalPass);
    } else {
      alert("Please Select at Least One Check Box");
    }
  };
  let copyPass = () => {
    navigator.clipboard.writeText(Fpass);
    alert(Fpass + " is Copied....");
   
  };

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator </h2>
        <div className="passwordinpu">
          <input
            type="text"
            readOnly
            value={Fpass}
            placeholder="Click Generate"
          />
          <button onClick={copyPass}>Copy</button>
        </div>
        <div className="passlength">
          <label htmlFor="">Password Length</label>
          <input
            type="number"
            value={passwordlength}
            onChange={(event) => {
              setPaswordL(event.target.value);
            }}
            max={15}
            min={5}
            name=""
            id=""
          />
        </div>
        <div className="passlength">
          <label htmlFor="">Uppercase Letters</label>
          <input
            type="checkBox"
            checked={uppercase}
            onChange={() => {
              setuppercase(!uppercase);
            }}
            name=""
            id=""
          />
        </div>
        <div className="passlength">
          <label htmlFor="">Lowercase Letters</label>
          <input
            type="checkBox"
            name=""
            id=""
            checked={lowercase}
            onChange={() => {
              setlowercase(!lowercase);
            }}
          />
        </div>
        <div className="passlength">
          <label htmlFor="">Incalude Number</label>
          <input
            type="checkBox"
            checked={number}
            onChange={() => {
              setnumber(!number);
            }}
            name=""
            id=""
          />
        </div>
        <div className="passlength">
          <label htmlFor="">Incalude Symbol</label>
          <input
            type="checkBox"
            checked={symbol}
            onChange={() => {
              setsymbol(!symbol);
            }}
            name=""
            id=""
          />
        </div>
        <button className="generate" onClick={createpassword}>
          Generate password
        </button>
      </div>
    </>
  );
}

export default App;
