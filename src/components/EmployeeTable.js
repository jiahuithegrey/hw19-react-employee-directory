import React, { useReducer } from "react";
import Table from "react-bootstrap/Table";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function EmployeeTable(props) {
  let { employees } = props;

  const reducer = (state, action) => {
    let employeesNow = [...employees];
    if (action === state.type){
      switch (action){
        default:
        case "Last Name":
          if (state.order === "ASC"){
            employeesNow.sort((a,b) => b.lastName.localCompare(a.lastName));
          } else{
            employeesNow.sort((a,b) => a.lastName.localCompare(b.lastName));
          }
          break;
        case "First Name":
          if (state.order === "ASC") {
            employeesNow.sort((a, b) => b.firstName.localeCompare(a.firstName));
          } else {
            employeesNow.sort((a, b) => a.firstName.localeCompare(b.firstName));
          }
          break;
        case "Email":
          if (state.order === "ASC") {
            employeesNow.sort((a, b) => b.email.localeCompare(a.email));
          } else {
            employeesNow.sort((a, b) => a.email.localeCompare(b.email));
          }
          break;
        case "Age":
          if (state.order === "ASC") {
            employeesNow.sort((a, b) => b.age - a.age);
          } else {
            employeesNow.sort((a, b) => a.age - b.age);
          }
          break;
        case "Phone Number":
          if (state.order === "ASC") {
            employeesNow.sort(
              (a, b) =>
                b.phoneNumber.replace(/[() -]/gi, "") -
                a.phoneNumber.replace(/[() -]/gi, "")
            );
          } else {
            employeesNow.sort(
              (a, b) =>
                a.phoneNumber.replace(/[() -]/gi, "") -
                b.phoneNumber.replace(/[() -]/gi, "")
            );
          }
          break;
      }
      employees = employeesNow;
      return { ...state, order: state.order === "ASC" ? "DESC" : "ASC" };
    } else {
      switch (action) {
        default:
        case "Last Name":
          employeesNow.sort((a, b) => a.lastName.localeCompare(b.lastName));
          break;
        case "First Name":
          employeesNow.sort((a, b) => a.firstName.localeCompare(b.firstName));
          break;
        case "Email":
          employeesNow.sort((a, b) => a.email.localeCompare(b.email));
          break;
        case "Age":
          employeesNow.sort((a, b) => a.age - b.age);
          break;
        case "Phone Number":
          employeesNow.sort(
            (a, b) =>
              a.phoneNumber.replace(/[() -]/gi, "") -
              b.phoneNumber.replace(/[() -]/gi, "")
          );
          break;
      }
      employees = employeesNow;

      return { type: action, order: "ASC" };
    }
  };

  const [sort, changeSortOrder] = useReducer(reducer, {
    type: "Last Name",
    order: "ASC"
  });

  return (
    <Table striped bordered hover>
      <TableHead 
        colNames = {[
          "Id",
          "Image",
          "First Name",
          "Last Name",
          "Gender",
          "Email",
          "Phone Number"
        ]}
        changeSortOrder = {changeSortOrder}
        sort = {sort}
        />

      <TableBody employees={employees} />
    </Table>
  );
}

export default EmployeeTable;
