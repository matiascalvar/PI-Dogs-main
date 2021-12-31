import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

import {
  weightAndAlpha,
  searchBreed,
  getBreeds,
  filterTemp,
  filterOrigin,
} from "../../actions";
// Traigo el state, hago una accion que filtre en base al input y cambio el store
function Nav() {
  // console.log(breeds);
  const dispatch = useDispatch();

  const weightAndAlphaAction = function (option) {
    dispatch(weightAndAlpha(option));
  };

  const search = function (value) {
    // !value ? dispatch(getBreeds()) : dispatch(searchBreed(value));
    !value ? dispatch(searchBreed("ALL")) : dispatch(searchBreed(value));
    // dispatch(searchBreed(value));
  };

  const filterTempAction = function (option) {
    dispatch(filterTemp(option));
  };
  const filterOrigins = async function (option) {
    dispatch(filterOrigin(option));
  };
  // Creo una function que reciba el input desde abajo y lo pase al action creator.
  // El accion creator pasa esa info como payload y el reducer hace el filtro en breeds
  return (
    <div className={styles.body}>
      <div className={styles.head}>
        <span className={styles.title}>Dogs</span>
      </div>

      <div className={styles.filterorder}>
        <SearchBar
          weightAlpha={weightAndAlphaAction}
          search={search}
          filterTemp={filterTempAction}
          filterOrigin={filterOrigins}
        />
      </div>
    </div>
  );
}

export default Nav;
