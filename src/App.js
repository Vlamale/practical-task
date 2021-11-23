import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0)
  let isEvenNumber = number % 2 === 0

  const increment = () => {
    setNumber(prev => prev + 1)
  }


  const decrement = () => {
    if (number > 0) {
      setNumber(prev => prev - 1)
    }
  }

  return (
    <div className="counter" style={{'backgroundColor': isEvenNumber ? '#f0caf7' : '#e0dde1'}}>
      <div className="counter__number">{number}</div>
      <div className="counter__status">{isEvenNumber ? "Введено четное число" : "Введено нечетное число"}</div>
      <div className="counter__btns">
        <button className="counter__btn" onClick={decrement}>-</button>
        <button className="counter__btn" onClick={() => setNumber(0)}>Reset</button>
        <button className="counter__btn" onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
