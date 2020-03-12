import React from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

function SeachBar(){
<Form>
    <Form.Label>Seach Term</Form.Label>
    <Form.Control type="text" placeholder="Name, gender, etc" />

    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            First Name
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Last Name</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Email</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Gender</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Phone Number</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>

    <Button variant="primary" type="submit">Search</Button>
</Form>
}

return(


)

export default SeachBar;