import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Table />
    </React.Fragment>   
  );
}

export default App;
