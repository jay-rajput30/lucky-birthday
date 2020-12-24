import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [bday, setBday] = useState("");
  let [luckyNumber, setLuckyNumber] = useState();
  let [luckyBday, setLuckyBday] = useState("");

  let inputLuckNum = 0;
  let sumOfBday = 0;

  function getSum(n) {
    let s = 0;
    for (let i = 0; n > 0; i++) {
      s += n % 10;
      n = Math.round(n / 10);
    }
    return s;
  }

  function checkBday(e) {
    let d = new Date(e.target.value);
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let year = d.getFullYear();
    sumOfBday = getSum(date) + getSum(month) + getSum(year);
    setBday(sumOfBday);
    console.log(sumOfBday);
  }

  function luckyNumChange(e) {
    inputLuckNum = +e.target.value;
    setLuckyNumber(inputLuckNum);
  }

  function checkLucky() {
    let s = bday % luckyNumber;
    if (s === 0) {
      console.log(bday, luckyNumber, s);
      setLuckyBday("Your bday is lucky");
    } else {
      setLuckyBday("Your bday is not lucky");
    }
  }

  function reloadData() {
    setBday("");
    setLuckyBday("");
    setLuckyNumber("");
  }

  return (
    <div className="App" style={{}}>
      <div className="container">
        <h1>Is your birthday lucky?</h1>
        <div>
          <label for="birthdate" id="bdayLabel">
            Select your birthdate :{" "}
          </label>
          <input
            type="date"
            id="birthdate"
            className="birthdate"
            onChange={checkBday}
            // value={bday}
          />
        </div>
        <div>
          <label for="luckyNum" id="luckNumLabel">
            Enter your lucky number :{" "}
          </label>
          <input
            onChange={luckyNumChange}
            // value={luckyNumber}
            type="number"
            id="luckyNum"
          />
        </div>
        <button className="checkBtn" onClick={checkLucky}>
          Am I lucky?
        </button>
        {/* <span className="reload" onClick={reloadData}>
          🔄
        </span> */}

        <p className="result">{luckyBday}</p>
      </div>
      <footer>
        <ul className="footer-list">
          <li>
            <a href="https://twitter.com/jay_r30">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
