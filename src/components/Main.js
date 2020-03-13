import React, { useState, useEffect } from "react";
import EmployeeTable from "./EmployeeTable";
import SearchBar from "./SeachBar";
import Users from "../data/mock.js";

let data = Users.map(user => {
  let {
    login: { uuid: id },
    name: { first: firstName, last: lastName },
    email,
    gender,
    phone: phoneNumber,
    picture: { thumbnail }
  } = user;
  return { id, firstName, lastName, email, gender, thumbnail, phoneNumber };
});

data.sort((a, b) => a.lastName.localeCompare(b.lastName));
const initialState = data;

function Main() {
  const [users, setUsers] = useState([]);

  const handleSubmit = data => {
    const { searchTerm, searchCategory } = data;
    let allUsers = initialState;
    if (searchTerm) {
      let usersFiltered = allUsers.filter(user =>
        user[searchCategory]
          .toString()
          .toLowerCase()
          .includes(searchTerm)
      );
      setUsers(usersFiltered);
    } else {
      setUsers(initialState);
    }
  };

  useEffect(() => {
    setUsers(initialState);
  }, []);
  return (
    <div className="col-12">
      <SearchBar handleSubmit={handleSubmit} />
      <EmployeeTable users={users} />
    </div>
  );
}

export default Main;
