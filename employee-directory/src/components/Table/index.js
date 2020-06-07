import React from "react";
import TableHeader from "../TableHeader";

function Table(props) {
  return (
    <table className="table table-striped table-bordered mt-4">
      <TableHeader />
      <tbody>
        {props.children}
      </tbody>
    </table>
  )
}

export default Table;
