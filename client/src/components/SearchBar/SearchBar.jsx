import React from "react";
import { getBreeds } from "../../actions";

function SearchBar({ weightAlpha, search }) {
  function handleChange(e) {
    weightAlpha(e.target.value);
  }
  function handleChangeSearch(e) {
    search(e.target.value);
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
      <button disabled type="submit">
        Temperaments
      </button>
      &nbsp;
      <button disabled type="submit">
        API or DB or All
      </button>
      &nbsp;
      <input
        onChange={handleChangeSearch}
        type="text"
        placeholder="Search a breed!"
      />
      {/* https://www.w3schools.com/howto/howto_css_switch.asp */}
    </>
  );
}

export default SearchBar;
