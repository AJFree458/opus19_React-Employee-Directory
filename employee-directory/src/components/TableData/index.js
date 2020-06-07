import React from 'react';

function TableData(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.role}</td>
      <td>{props.department}</td>
      <td>{props.office}</td>
      <td>{props.telephone}</td>
    </tr>
  )
}

export default TableData;
