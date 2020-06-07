import React from 'react';

function TableHeader() {
  return (
    <thead className="thead-dark">
        <th scope="col">ID</th>
        <th scope="col">First Nmae</th>
        <th scope="col">Last Name</th>
        <th scope="col">Role</th>
        <th scope="col">Department</th>
        <th scope="col">Office</th>
        <th scope="col">Telephone</th>
    </thead>

  )
}

export default TableHeader;