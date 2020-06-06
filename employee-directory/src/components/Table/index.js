import React from "react";
import TableHeader from "../TableHeader";
import TableData from "../TableData"

function Table() {
  return (
    <table className="table table-striped table-bordered mt-4">
        <TableHeader />
        <TableData />
      </table>
  )
}

export default Table;
