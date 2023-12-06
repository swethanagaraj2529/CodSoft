import React, { useState } from 'react';
import "./styles.css"
function ScientificCalculator() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult('');
  }

  const backspace = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  }

  const square = () => {
    setResult(Math.pow(result, 2).toString());
  }

  const squareRoot = () => {
    setResult(Math.sqrt(result).toString());
  }

  const cube = () => {
    setResult(Math.pow(result, 3).toString());
  }

  const cubeRoot = () => {
    setResult(Math.cbrt(result).toString());
  }

  return (
    <div className="calculator">
      <div className="result">
        <p>{result}</p>
      </div>
      <div className="buttons">
        <button onClick={clear} id="clear">Clear</button>
        <button onClick={backspace} id="backspace">C</button>
        <button name="." onClick={handleClick}>.</button>
        <button name="/" onClick={handleClick}>&divide;</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="*" onClick={handleClick}>&times;</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" onClick={handleClick}>&ndash;</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="+" onClick={handleClick}>+</button>
        <button name="0" onClick={handleClick}>0</button>
        <button onClick={calculate} id="result">=</button>
        <button onClick={square} id="square">x<sup>2</sup></button>
        <button onClick={squareRoot} id="square-root">&radic;</button>
        <button onClick={cube} id="cube">x<sup>3</sup></button>
        <button onClick={cubeRoot} id="cube-root">&sup3;&radic;</button>
      </div>
    </div>
  );
}

export default ScientificCalculator;