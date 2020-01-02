import React, { useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  const handleChange = e => {
    setInput(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleChange} />
      <button>검색</button>
    </>
  );
};

export default Search;
