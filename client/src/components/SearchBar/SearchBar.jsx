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
    </>
  );
}

export default SearchBar;
// BUG: Si se va al landing page, al volver al home y querer ordenar, los elementos se duplican
