import React from "react";

const Search = (props) => {
  return (
    <div>
      <h1>Search component</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={props.onSearch} />
    </div>
  );
};

export default Search;
