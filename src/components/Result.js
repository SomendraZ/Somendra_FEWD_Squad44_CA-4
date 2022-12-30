import React from 'react' 
export default function Result({setScore,score, setcurrent, setShowResults, length}) {
  
  const restartGame = () => {
    setScore(0);
    setcurrent(0);
    setShowResults(false);
  };

  return (
    <div className="final-results">
      <h1>Final Results</h1>
      <h2>
        {score} out of {length} correct
      </h2>
      <button onClick={() => restartGame()}>Restart game</button>
  </div>
  )
}
