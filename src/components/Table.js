import React from "react";
import Table from "react-bootstrap/Table";
import employeeData from "../../data/mock.json";

function employeeTable(props) {
  let { users } = props;

  const reducer = (state, action) => {
    let usersNow = [...users];
    if (action === state.type){
      switch (action){
        default:
        case "Last Name":
          if (state.order === "ASC"){
            usersNow.sort((a,b) => b.lastName.localCompare(a.lastName));
          } else{
            usersNow.sort((a,b) => a.lastName.localCompare(b.lastName));
          }
          break;
        case "First Name":
          if (state.order === "ASC") {
            usersNow.sort((a, b) => b.firstName.localeCompare(a.firstName));
          } else {
            usersNow.sort((a, b) => a.firstName.localeCompare(b.firstName));
          }
          break;
        case "Email":
          if (state.order === "ASC") {
            usersNow.sort((a, b) => b.email.localeCompare(a.email));
          } else {
            usersNow.sort((a, b) => a.email.localeCompare(b.email));
          }
          break;
        case "Age":
          if (state.order === "ASC") {
            usersNow.sort((a, b) => b.age - a.age);
          } else {
            usersNow.sort((a, b) => a.age - b.age);
          }
          break;
        case "Phone Number":
          if (state.order === "ASC") {
            usersNow.sort(
              (a, b) =>
                b.phoneNumber.replace(/[() -]/gi, "") -
                a.phoneNumber.replace(/[() -]/gi, "")
            );
          } else {
            usersNow.sort(
              (a, b) =>
                a.phoneNumber.replace(/[() -]/gi, "") -
                b.phoneNumber.replace(/[() -]/gi, "")
            );
          }
          break;
      }
      users = usersNow;
      return { ...state, order: state.order === "ASC" ? "DESC" : "ASC" };
    } else {
      switch (action) {
        default:
        case "Last Name":
          usersNow.sort((a, b) => a.lastName.localeCompare(b.lastName));
          break;
        case "First Name":
          usersNow.sort((a, b) => a.firstName.localeCompare(b.firstName));
          break;
        case "Email":
          usersNow.sort((a, b) => a.email.localeCompare(b.email));
          break;
        case "Age":
          usersNow.sort((a, b) => a.age - b.age);
          break;
        case "Phone Number":
          usersNow.sort(
            (a, b) =>
              a.phoneNumber.replace(/[() -]/gi, "") -
              b.phoneNumber.replace(/[() -]/gi, "")
          );
          break;
      }
      users = usersNow;

      return { type: action, order: "ASC" };
    }
  };

  const [sort, changeSortOrder] = useReducer(reducer, {
    type: "Last Name",
    order: "ASC"
  });

  return (
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

      <Tablebody />
    </Table>
  );
}

export default employeeTable;
