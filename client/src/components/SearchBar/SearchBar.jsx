import React from "react";
// import { weightDESC } from "../../actions";

function SearchBar({ weightAlpha }) {
  function handleChange(e) {
    weightAlpha(e.target.value);
  }

  return (
    <>
      <label htmlFor="">
        <span> Alphabetical Order: </span>
        <select name="abcorder" id="abcorder" onChange={handleChange}>
          <option value="ORDER_AZ">A - Z</option>
          <option value="ORDER_ZA">Z - A</option>
        </select>
      </label>
      &nbsp;
      <label htmlFor="">
        <span> Weight: </span>
        <select name="weight" id="weight" onChange={handleChange}>
          {/* <option value="">Weight Sort</option> */}
          <option value="WEIGHT_ASC">🡇</option>
          <option value="WEIGHT_DESC">🡅</option>
        </select>
      </label>
      &nbsp;
      <button type="submit">Temperaments</button>
      &nbsp;
      <button type="submit">API or DB or All</button>
      {/* https://www.w3schools.com/howto/howto_css_switch.asp */}
    </>
  );
}

export default SearchBar;
