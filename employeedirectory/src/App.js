import React from 'react';
import Table from './components/Table';
import "./App.css";

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
   
      <Table />
    </React.Fragment>
      
  );
}

export default App;