import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('white')
  const colors = ["white", "green", "pink", "beige", "black", "brown", "blue", "yellow"]
  const randomTheme = colors[Math.floor(Math.random() * colors.length)]
  useEffect(() => {
    document.title = `You clicked ${count} times`;

  })

  return (
    <div className="App">
      <h1>Hooks</h1>
      <div>
        <h3>Click Counter</h3>
        <p className="prompt">You clicked {count} times</p>
        <button className="button" onClick={() => setCount(count + 1)}>
          Click
        </button>
      </div>
      <div>
        <h3>Color Picker</h3>
        <p> Your color is {theme}</p>
        <button className="button" onClick={() => setTheme(randomTheme)}>
          Click
        </button>
      </div>
    </div>
  );
}

export default App;
