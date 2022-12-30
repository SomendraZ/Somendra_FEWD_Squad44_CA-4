import React, {useRef} from 'react';

export default function QuestionBox({questions,optionClicked,current}) {

  const mainQues = useRef();

  function handleFocus(){
    mainQues.current.style.color = "red";
  }

  function handleNoFocus(){
    mainQues.current.style.color = "darkgoldenrod";
  }

  return (      
      <div className="question-card" >
        <h2>
          Question: {current + 1}/{questions.length}
        </h2>
        <h3 ref={mainQues} className="question-text">{questions[current].text}</h3>

        <ul>
          {questions[current].options.map((option) => {
            return (
              <li
                key={option.id}
                onClick={() => optionClicked(option.isCorrect)}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
        <button onClick={handleFocus}>Highlight</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={handleNoFocus}>No Highlight</button>
    </div>

          
        
      

  
  )
}
