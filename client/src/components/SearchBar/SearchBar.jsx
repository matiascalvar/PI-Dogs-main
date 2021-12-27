import React from "react";
import { useSelector } from "react-redux";

function SearchBar({ weightAlpha, search, filterTemp, filterOrigin }) {
  const temperaments = useSelector((state) => state.temperaments);

  function handleChange(e) {
    weightAlpha(e.target.value);
  }
  function handleChangeSearch(e) {
    search(e.target.value);
  }
  function handleChangeFilterTemp(e) {
    filterTemp(e.target.value);
  }
  function handleChangeOrigin(e) {
    filterOrigin(e.target.value);
  }

  return (
    <>
      <label htmlFor="abcorder">
        <span> Alphabetical Order: </span>
        <select name="abcorder" id="abcorder" onChange={handleChange}>
          <option value="ORDER_AZ">A - Z</option>
          <option value="ORDER_ZA">Z - A</option>
        </select>
      </label>
      &nbsp;
      <label htmlFor="weight">
        <span> Weight: </span>
        <select name="weight" id="weight" onChange={handleChange}>
          {/* <option value="">Weight Sort</option> */}
          <option value="WEIGHT_ASC">🡇</option>
          <option value="WEIGHT_DESC">🡅</option>
        </select>
      </label>
      &nbsp;
      <select name="temperaments" id="temps" onChange={handleChangeFilterTemp}>
        <option value="reset">All Temperaments</option>
        {temperaments.map((e) => (
          <option value={e.name} key={e.id}>
            {e.name}
          </option>
        ))}
      </select>
      &nbsp;
      <label htmlFor="origin">
        <span>Origin: </span>
        <select name="origin" id="origin" onChange={handleChangeOrigin}>
          <option value="ALL">ALL</option>
          <option value="db">DB</option>
          <option value="api">API</option>
        </select>
      </label>
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
