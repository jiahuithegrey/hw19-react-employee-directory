import React from "react";
import Table from "react-bootstrap/Table";
import "./style.css";
import employeeData from "../../data/mock.json";

class EmployeeTable extends React.Component {
  state = {
    employeeData
  };

  render() {
    return（
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        let employeeRows;
    employeeRows = this.state.employeeData.map(employee =>
      <tr>
        <td>{employee.id}</td>
        <td>{employee.image}</td>
        <td>{employee.first_name}</td>
        <td>{employee.last_name}</td>
        <td>{employee.gender}</td>
        <td>{employee.phone_number}</td>
      </tr>
    );
        <tbody>{employeeRows}</tbody>
      </Table>
    ）
  }
}
export default Table;
