import React from "react";

function TableBody(props) {
  const employees = props.employees;
  const rowData = employees.map(employee => {
    return (
      <tr key={employee.id}>
        <td className="border-left border-right">{employee.lastName}</td>
        <td className="border-left border-right">{employee.firstName}</td>
        <td className="border-left border-right">{employee.age}</td>
        <td className="border-left border-right">{employee.email}</td>
        <td className="border-left border-right">{employee.phoneNumber}</td>
        <td className="border-left border-right">
          <img
            src={employee.thumbnail}
            alt={`${employee.firstName} ${employee.lastName}'s thumbnail.`}
          />
        </td>
      </tr>
    );
  });
  return <tbody>{rowData}</tbody>
}

export default TableBody;
