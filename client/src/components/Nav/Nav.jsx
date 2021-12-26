import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { weightAndAlpha, searchBreed, getBreeds } from "../../actions";
// Traigo el state, hago una accion que filtre en base al input y cambio el store
function Nav() {
  const breeds = useSelector((state) => state.breeds);
  // console.log(breeds);
  const dispatch = useDispatch();

  const weightAndAlphaAction = function (option) {
    dispatch(weightAndAlpha(option));
  };

  const search = async function (value) {
    if (!value) {
      dispatch(getBreeds());
    } else {
      dispatch(searchBreed(value));
    }
  };
  // Creo una function que reciba el input desde abajo y lo pase al action creator.
  // El accion creator pasa esa info como payload y el reducer hace el filtro en breeds
  return (
    <>
      <h2>----This is a navbar----</h2>
      <SearchBar weightAlpha={weightAndAlphaAction} search={search} />
    </>
  );
}

export default Nav;
