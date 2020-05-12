import React from "react";

export const Filter = ({ filterValue, setFilterValue }) => {
  return (
    <div>
      filter shown with:{" "}
      <input
        type="search"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value.toLowerCase())}
      />
    </div>
  );
};
