import React from "react";

function Search(props) {
  return (
    <div >
      <form className="form form-row my-2">
        <div className="col">
          <input
            type="text"
            name="searchTerm"
            // value={this.state.searchTerm}
            // onChange={this.handleChange}
            className="form-control"
            placeholder="Search"
          />
        </div>
        <div className="col-2">
          <button onClick={props.handleFormSubmit} className="btn btn-light btn-block">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Search;
