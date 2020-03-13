import React, { useState, useEffect } from "react";
import EmployeeTable from "./EmployeeTable";
import SearchBar from "./SeachBar";
import Employees from "../data/mock.js";

let data = Employees.map(employee => {
  let {
    login: { uuid: id },
    name: { first: firstName, last: lastName },
    email,
    gender,
    phone: phoneNumber,
    picture: { thumbnail }
  } = employee;
  return { id, firstName, lastName, email, gender, thumbnail, phoneNumber };
});
data.sort((a, b) => a.lastName.localeCompare(b.lastName));
const initialState = data;

function Main() {
  const [employees, setEmployees] = useState([]);

  const handleSubmit = data => {
    const { searchTerm, searchCategory } = data;
    let allEmployees = initialState;
    if (searchTerm) {
      let usersFiltered = allEmployees.filter(employee =>
        employee[searchCategory]
          .toString()
          .toLowerCase()
          .includes(searchTerm)
      );
      setEmployees(usersFiltered);
    } else {
      setEmployees(initialState);
    }
  };

  useEffect(() => {
    setEmployees(initialState);
  }, []);

  return (
    <div className="col-12">
      <SearchBar handleSubmit={handleSubmit} />
      <EmployeeTable employees={employees} />
    </div>
  );
}

export default Main;
