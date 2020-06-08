import React from "react";

function Table(props) {
  return (
    <table className="table table-striped table-bordered mt-4">
        {props.children}
    </table>
  )
}

export default Table;
