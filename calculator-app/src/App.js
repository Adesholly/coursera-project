import { useState, useRef } from "react"
import './App.css';

function App() {

  const inputRef = useRef(null)
  const resultRef = useRef(null)
  const [ result, setResult ] = useState(0)

  function plus(e){
    e.preventDefault()
    setResult((result) => result + Number(inputRef.current.value))
  }

  function minus(e){
    e.preventDefault()
    setResult((result) => result - Number(inputRef.current.value))
  }

  function times(e){
    e.preventDefault()
    setResult((result) => result * Number(inputRef.current.value))
  }

  function divide(e){
    e.preventDefault()
    setResult((result) => result / Number(inputRef.current.value))
  }

  function resetInput(){
    inputRef.current.value = ''
  }

  function resetResult(){
      setResult(0)
  }


  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p
        ref={resultRef}
        >
          {result}
        </p>
      </form>
      <input 
      type="number"
      pattern="[0-9]"
      ref={inputRef}
      placeholder="Type a number"
       />

      <button onClick={plus}>add</button>
      <button onClick={minus}>subtract</button>
      <button onClick={times}>multiply</button>
      <button onClick={divide}>divide</button>
      <button onClick={resetInput}>reset input</button>
      <button onClick={resetResult}>reset result</button>
      
    </div>
  )
}

export default App;
