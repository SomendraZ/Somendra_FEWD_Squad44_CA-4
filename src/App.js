import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";



function App() {

  const [showResults, setShowResults] = useState(false);
  const [current, setcurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [theme, setTheme] = useState(true)
  const [themeName, setThemeName] = useState("dark")


  const optionClicked = (isCorrect) => {

    if (isCorrect) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setcurrent(current + 1);
    } else {
      setShowResults(true);
    }
  };


  const handleToggle = ()=>{
    setTheme(theme?false:true);
  }

  function backGroundColors(color){

    document.body.style.backgroundColor = color? "white":"red";
    return{
      backgroundColor : color? "white":"red",
    }
  }

  function textColor(color){
    return{
      color:color?"red":"white",
    }
  }

  useEffect(()=>{
    setThemeName(themeName==="Light"?"Light":"Dark")
  },[theme])


  return (
      <div className="App" style={backGroundColors(theme)}>
        <div className="flex">
          <h2 style={textColor(theme)}>Kalvium Quizzy</h2>
          <button className="toggle-button" onClick={handleToggle}>{themeName}</button>
        </div>
      
        {
          showResults ? <Result setScore={setScore} score={score} setcurrent={setcurrent} setShowResults={setShowResults} length={questions.length}/> : 
          <QuestionBox questions={questions} optionClicked={optionClicked} current={current}/>
        }
        <br />
        <marquee behavior="scroll" direction="left" width="60%" scrollamount="20">Made by :- Somendra ;)</marquee>
      </div>
  );
}

export default App;