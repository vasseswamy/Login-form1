import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';


const App = () => {
  const [input,setInput] = useState("");
  const [result,setResult] = useState(0);
  const handler = e =>{
    setInput(e.target.value);
  }
  return (
    <div className="container">
     
        <form>
        <input type="text"  value={input} name="input" onChange={handler}/>
        </form>
        <br />

       <button onClick={() => setResult(eval(input))}>Result</button>
       <h4 className='result1'>Result is : {result}</h4>
       <div className='keypad'>
       <button onClick={() => setInput(input+'1')}>1</button>
       <button onClick={() => setInput(input+'2')}>2</button>
       <button onClick={() => setInput(input+'3')}>3</button>
       <button onClick={() => setInput(input+'4')}>4</button>
       <button onClick={() => setInput(input+'5')}>5</button><br/>

       <button onClick={() => setInput(input+'6')}>6</button>
       <button onClick={() => setInput(input+'7')}>7</button>
       <button onClick={() => setInput(input+'8')}>8</button>
       <button onClick={() => setInput(input+'9')}>9</button>
       <button onClick={() => setInput(input+'0')}>0</button><br />

       <button onClick={() => setInput(input+'+')}>+</button>
       <button onClick={() => setInput(input+'-')}>-</button>
       <button onClick={() => setInput(input+'*')}>*</button>
       <button onClick={() => setInput(input+'/')}>/</button>
       <button onClick={() => setInput('')}>clr</button>
       </div>
       </div>
  );
}

export default App;
