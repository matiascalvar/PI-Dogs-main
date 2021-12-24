import React from "react";
import { weightDESC } from "../../actions";

function SearchBar({ orderZA, orderAZ, weightASC, weightDESC }) {
  // const orderHandlerZA = function (e) {
  //   orderZA();
  //   e.preventDefault();
  // };
  // const orderHandlerAZ = function (e) {
  //   orderAZ();
  //   e.preventDefault();
  // };

  // Podria hacer un action creator
  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <button onClick={orderAZ} type="submit">
        A-Z
      </button>
      <button onClick={orderZA} type="submit">
        Z-A
      </button>
      <button onClick={weightASC} type="submit">
        Weight ASC
      </button>
      <button onClick={weightDESC} type="submit">
        Weight DESC
      </button>
      <button type="submit">Temperaments</button>
      <button type="submit">API or DB</button>
      {/* https://www.w3schools.com/howto/howto_css_switch.asp */}

      <select name="weight" id="weight" onChange={handleChange}>
        <option value="">Weight Sort</option>
        <option value="ASC">Ascending Order</option>
        <option value="DESC">Descending Order</option>
      </select>
    </>
  );
}

export default SearchBar;
