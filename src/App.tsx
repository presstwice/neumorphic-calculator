import React, { useState } from 'react';
import './App.css';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');
  const [currentValue, setCurrentValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  const handleNumberClick = (value: string) => {
    if (display === '0') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const handleOperatorClick = (op: string) => {
    if (currentValue !== null) {
      calculate();
      setOperator(op);
    } else {
      setCurrentValue(parseFloat(display));
      setOperator(op);
      setDisplay('0');
    }
  };

  const handleEqualsClick = () => {
    if (currentValue !== null && operator !== null) {
      calculate();
      setOperator(null);
    }
  };

  const calculate = () => {
    if (currentValue !== null && operator !== null) {
      const inputValue = parseFloat(display);
      let result;

      switch (operator) {
        case '+':
          result = currentValue + inputValue;
          break;
        case '-':
          result = currentValue - inputValue;
          break;
        case '*':
          result = currentValue * inputValue;
          break;
        case '/':
          result = currentValue / inputValue;
          break;
        default:
          return;
      }

      setCurrentValue(result);
      setDisplay(result.toString());
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setCurrentValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
          <button onClick={() => handleOperatorClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('3')}>3</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick('0')}>0</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleEqualsClick}>=</button>
          <button onClick={() => handleOperatorClick('+')}>+</button>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
};

export default App;
