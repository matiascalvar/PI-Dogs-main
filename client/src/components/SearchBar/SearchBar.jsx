import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css";
import sortimg from "./img/download.png";
import filterimg from "./img/filter.png";
import { useState } from "react";
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

  const [defaultValue, setDefaultValue] = useState("ORDER_ZA");

  function handleSwitch(e) {
    if (e.target.value === "ORDER_AZ") {
      weightAlpha("ORDER_AZ");
      setDefaultValue("ORDER_ZA");
    } else if (e.target.value === "ORDER_ZA") {
      weightAlpha("ORDER_ZA");
      setDefaultValue("ORDER_AZ");
    }
  }

  const [defaultValue2, setDefaultValue2] = useState("WEIGHT_DESC");

  function handleSwitch2(e) {
    if (e.target.value === "WEIGHT_ASC") {
      weightAlpha("WEIGHT_ASC");
      setDefaultValue2("WEIGHT_DESC");
    } else if (e.target.value === "WEIGHT_DESC") {
      weightAlpha("WEIGHT_DESC");
      setDefaultValue2("WEIGHT_ASC");
    }
  }

  return (
    <>
      <img className={styles.img} src={sortimg} alt="sort icon" />
      {/* slide switch */}
      <div>
        <span> A - Z </span>
        <label className={styles.switch} htmlFor="switchalpha">
          <input
            type="checkbox"
            name="switchalpha"
            id="switchalpha"
            value={defaultValue}
            onChange={handleSwitch}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      {/* <label htmlFor="abcorder">
        <span> A - Z </span>
        <select name="abcorder" id="abcorder" onChange={handleChange}>
          <option value="ORDER_AZ">A - Z</option>
          <option value="ORDER_ZA">Z - A</option>
        </select>
      </label> */}
      &nbsp;
      <div>
        <span> Weight </span>
        <label className={styles.switch} htmlFor="switchweight">
          <input
            type="checkbox"
            name="switchweight"
            id="switchweight"
            value={defaultValue2}
            onChange={handleSwitch2}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      {/* <label htmlFor="weight">
        <span> Weight: </span>
        <select name="weight" id="weight" onChange={handleChange}>
          <option value="WEIGHT_ASC">🡇</option>
          <option value="WEIGHT_DESC">🡅</option>
        </select>
      </label> */}
      &nbsp;
      <img className={styles.img} src={filterimg} alt="filter icon" />
      <select name="temperaments" id="temps" onChange={handleChangeFilterTemp}>
        <option value="ALL">All Temperaments</option>
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
      &nbsp;
      <Link to="/form">
        <button>Create new breed</button>
      </Link>
      {/* https://www.w3schools.com/howto/howto_css_switch.asp */}
    </>
  );
}

export default SearchBar;
