import React, { useState, useEffect } from "react";
import Table from "./Table";
import SearchBar from "./SeachBar";
import Employees from "../data/mock.json";
import employeeTable from "./Table";

let data = Employees.map(employee => {
  let {
    name: { first: firstName, last: lastName },
    email,
    phone: phoneNumber,
    picture: { thumbnail }
  } = employee;
  return { id, firstName, lastName, email, gender, thumbnail, phoneNumber };
});
data.sort((a, b) => a.lastName.localeCompare(b.lastName));
const initialState = data;

function Main() {
  const [emoployee, setEmployee] = useState([]);

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
      <searchBar handleSubmit={handleSubmit} />
      <employeeTable employees={employees} />
    </div>
  );
}

export default Main;
