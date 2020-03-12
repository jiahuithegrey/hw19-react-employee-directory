import React from "react";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

function SeachBar(props) {
  const { handleSearch } = props;

  function getValue() {
    let searchTerm = document
      .getElementById("search-term")
      .value()
      .trim()
      .toLowerCase();
    let searchDropDown = document.getElementById("search-dropdown");
    let searchCategory =
      searchDropDown.options[(searchDropDown, selectedIndex)].value;
    return { searchTerm, searchCategory };
  }

  return (
    <Form>
      <Form.Label>Seach Term</Form.Label>
      <Form.Control
        type="text"
        placeholder="Name, gender, etc"
        id="search-term"
      />

      <DropdownButton id="search-dropdown" title="First Name">
        <Dropdown.Item href="#/action-1">First Name</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Last Name</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Email</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Gender</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Phone Number</Dropdown.Item>
      </DropdownButton>

      <Button
        variant="primary"
        type="submit"
        onClick={() => handleSearch(getValue())}
      >
        Search
      </Button>
    </Form>
  );
}

export default SeachBar;
