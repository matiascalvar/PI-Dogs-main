import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import {
  weightAndAlpha,
  searchBreed,
  getBreeds,
  filterTemp,
} from "../../actions";
// Traigo el state, hago una accion que filtre en base al input y cambio el store
function Nav() {
  // console.log(breeds);
  const dispatch = useDispatch();

  const weightAndAlphaAction = function (option) {
    dispatch(weightAndAlpha(option));
  };

  const search = function (value) {
    if (!value) {
      dispatch(getBreeds());
    } else {
      dispatch(searchBreed(value));
    }
  };

  const filterTempAction = function (option) {
    option === "reset" ? dispatch(getBreeds()) : dispatch(filterTemp(option));
  };
  // Creo una function que reciba el input desde abajo y lo pase al action creator.
  // El accion creator pasa esa info como payload y el reducer hace el filtro en breeds
  return (
    <>
      <h2>----This is a navbar----</h2>
      <SearchBar
        weightAlpha={weightAndAlphaAction}
        search={search}
        filterTemp={filterTempAction}
      />
    </>
  );
}

export default Nav;
