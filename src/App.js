import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [bday, setBday] = useState("");
  let [luckyNumber, setLuckyNumber] = useState(1);
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
    setBday(`${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`);
    console.log(sumOfBday);
  }

  function luckyNumChange(e) {
    inputLuckNum = +e.target.value;
    setLuckyNumber(inputLuckNum);
  }

  function checkLucky() {
    let s = sumOfBday % luckyNumber;
    if (s === 0) {
      setLuckyBday("Your bday is lucky");
    } else {
      setLuckyBday("Your bday is not lucky");
    }
  }
  // function checkLucky() {
  //   if (sumOfBday % luckyNumber === 0) {
  //     setLuckyBday("Your birthday is lucky");
  //   }

  //   setLuckyBday("Your birthday is not lucky");
  // }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>Is your birthday lucky?</h1>
      <div>
        <label for="birthdate" id="bdayLabel">
          Select your birthdate :{" "}
        </label>
        <input
          type="date"
          id="birthdate"
          class="birthdate"
          onChange={checkBday}
        />
      </div>
      <div>
        <label for="luckyNum" id="luckNumLabel">
          Enter your lucky number :{" "}
        </label>
        <input onChange={luckyNumChange} type="number" id="luckyNum" />
      </div>
      <button class="checkBtn" onClick={checkLucky}>
        Check
      </button>
      <p>
        The bday value you selected is {bday} and the lucky number you selected
        is {luckyNumber}
      </p>
      <p>{luckyBday}</p>
    </div>
  );
}
