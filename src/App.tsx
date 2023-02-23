import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import Clock from './Clock';
import PrimarySearchAppBar from './AppBar';

const utile = {
  name: 'Naly',
  surnom: 'Zah'
}

function TestProps(props: any) {
  return (
    <div>
      Bonjour {props.name}, <br></br>
      Izaho dia {props.surnom}
    </div>
  );
}

function App() {

  // utilisation d'une fonction composante
  const [date, setDate] = useState(new Date);

  useEffect(() => {
    setInterval(() => { setDate(new Date()) }, 1000)
  }, [])

  return (
    <div className="App">
      <PrimarySearchAppBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* <Clock /> */} {date.toString()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <TestProps name="Naly" /> */}
          <TestProps {...utile} /> Juste pour tester que ça a été arrivé ok
        </a>
      </header>
    </div>
  );
}

export default App;
