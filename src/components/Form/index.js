import React from "react";


function Searching({ handleSearchChange }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          //onChange event that will render search changes //
          onChange={e => handleSearchChange(e)}
        />
      </form>
    </div>
  );
}
export default Searching;
