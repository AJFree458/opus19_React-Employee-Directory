import React from "react";

function Search() {
  return (
    <div className="Searchbox">
        <div className="input-group">
          <div className= "input-group-prepend">
            <span className="input-group-text" id="">
              Search
            </span>
          </div>
          <input 
            className="form-control mr-sm-2"
            type="search"
            placeholder="name"
            aria-label="search"
          />
        </div>
      </div>
  )
}

export default Search;
