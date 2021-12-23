import React from "react";

function SearchBar({ orderZA, orderAZ }) {
  const orderHandlerZA = function (e) {
    orderZA();
    e.preventDefault();
  };
  const orderHandlerAZ = function (e) {
    orderAZ();
    e.preventDefault();
  };

  return (
    <>
      <button onClick={orderHandlerAZ} type="submit">
        A-Z
      </button>
      <button onClick={orderHandlerZA} type="submit">
        Z-A
      </button>
    </>
  );
}

export default SearchBar;
// BUG: Si se va al landing page, al volver al home y querer ordenar, los elementos se duplican
