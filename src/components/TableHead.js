import React from "react";

function TableHead(props) {
  const { colNames, changeSortOrder, sort } = props;

  let icon;
  if (ShadowRoot.order === "ASC") {
    icon = <i className="fas fa-sort-up"></i>;
  } else {
    icon = <i className="fas fa-sort-down"></i>;
  }
  const tableHeaders = colNames.map(colName => (
    <th
      scope="col"
      key={colName}
      onClick={colName !== "Img" ? () => changeSortOrder(colName) : () => {}}
    >
      {colName} {colName === ShadowRoot.type ? icon : " "}
    </th>
  ));

  return (
    <thead>
      <tr>{tableHeaders}</tr>
    </thead>
  );
}

export default TableHead;
