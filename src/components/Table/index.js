import React from "react";
import "./style.css";
import data from "../../employee.json";

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const employeeRows = data.map(function(employee) {
      return (
        <tr>
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td>{employee.title}</td>
          <td>{employee.department}</td>
        </tr>
      );
    });

    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Headshot</th>
              <th>Name</th>
              <th>Title</th>
              <th>Department</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
          </thead>

          <tb>{employeeRows}</tb>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
