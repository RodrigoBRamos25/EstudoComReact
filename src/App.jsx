import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import JsxExamples from './components/JsxExamples';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Teste React</h1>
     <JsxExamples/>
     <button onClick={() => alert("Teste")}> Clique em Mim ! </button>
    </>
  )
}

export default App
