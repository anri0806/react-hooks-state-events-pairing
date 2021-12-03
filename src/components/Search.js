import React from "react";

function Search({ onChangeFilter, text }) {
  function handleText(e) {
    onChangeFilter(e.target.value);
  }

  return (
    <div>
      <p>Search by username</p>
      <input
        onChange={handleText}
        value={text}
        type="text"
        name="text"
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
