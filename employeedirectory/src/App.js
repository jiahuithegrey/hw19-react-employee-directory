import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import employees from "./employee.json";

class App extends Component {
  //what is this.state.employee???????
  //setting this.state.employee to the employee.json array
  state = { employees };

  removeEmployee = id => {
    //filter this.state.employee for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    //set this.state.employee equal to the new employees array
    this.setState({ employees });
  };

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
