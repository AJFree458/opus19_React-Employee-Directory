import React from "react";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center">
          Employee Directory
        </h1>
        <p className="lead text-center">
          Filter by First name, Last name, or role in the table headings, or use the search to find a specific person.
        </p>
      </div>
    </div>
  )
};

export default Jumbotron;
