import React, { Component } from "react";
import Navbar from "./components/Navbar";
import AddBtn from "./components/AddBtn";
import Table from "./components/Table";

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <Navbar/>
        <Table />
      </React.Fragment>   
    );
  }
}
  

export default App;
