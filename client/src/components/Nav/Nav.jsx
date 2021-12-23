import React, { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { breedZA, breedAZ } from "../../actions";

function Nav() {
  const dispatch = useDispatch();
  // const breeds = useSelector((state) => state.breeds.slice(0, 8));
  // useEffect(() => {
  //   dispatch(breedZA);
  // }, [dispatch]);

  const orderZA = function () {
    dispatch(breedZA);
  };
  const orderAZ = function () {
    dispatch(breedAZ);
  };

  return (
    <>
      <h1>----This is a navbar----</h1>
      <SearchBar orderZA={orderZA} orderAZ={orderAZ} />
    </>
  );
}

export default Nav;
