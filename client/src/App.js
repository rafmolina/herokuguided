import './App.css';
import { useState, useEffect } from 'react'

function url(path){
  return process.env.NODE_ENV === "development" ?
  `http://locahost:1234${path}` : path
}

function App() {
const [word, setWord] = useState("hola")
useEffect(() => {
  fetch(url("/api"))
  .then(res =>res.json())
  .then(api => setWord(api.data))
},[])

  return (
    <div className="App">
      <header className="App-header">
        API Data: {word}
      </header>
    </div>
  );
}

export default App;
