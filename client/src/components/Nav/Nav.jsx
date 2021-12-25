import React, { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { weightAndAlpha } from "../../actions";

function Nav() {
  const dispatch = useDispatch();
  // const breeds = useSelector((state) => state.breeds.slice(0, 8));
  // useEffect(() => {
  //   dispatch(breedZA);
  // }, [dispatch]);

  const weightAndAlphaAction = function (option) {
    dispatch(weightAndAlpha(option));
  };

  return (
    <>
      <h2>----This is a navbar----</h2>
      <SearchBar weightAlpha={weightAndAlphaAction} />
    </>
  );
}

export default Nav;
