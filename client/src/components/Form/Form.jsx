import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBreed } from "../../actions";
import Header from "../Header/Header.jsx";
import styles from "./Form.module.css";

export default function Form() {
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    image: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLifeSpan: "",
    maxLifeSpan: "",
    temperaments: [],
  });

  const [errors, setErrors] = useState({});
  // const [disable, setdisable] = useState(true);

  function handleTemps(e) {
    let concat = input[e.target.name].concat(e.target.value);
    setInput({
      ...input,
      [e.target.name]: concat,
    });
    // console.log(input);
  }
  // function remove(e) {
  //   let concat = input[e.target.name].filter((element) => element !=);
  //       setInput({
  //         ...input,
  //         [e.target.name]: concat,
  //       });
  // }
  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      // height : value en input con name height
    });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
  // console.log(errors);
  function validation(input) {
    var errors = {};
    var namePattern = /^[a-z ]+$/g;
    if (!input.name) errors.name = "Name can't be blank";
    else if (!namePattern.test(input.name)) {
      errors.name = "Only lowercase letters allowed";
    }
    // Height
    if (!input.minHeight) errors.minHeight = "minHeight can't be blank";
    else if (input.minHeight <= 0) errors.minHeight = "Must be above zero";
    if (!input.maxHeight) errors.maxHeight = "maxHeight can't be blank";
    else if (input.maxHeight <= 0) errors.maxHeight = "Must be above zero";
    // Weight
    if (!input.minWeight) errors.minWeight = "minWeight can't be blank";
    else if (input.minWeight <= 0) errors.minWeight = "Must be above zero";
    if (!input.maxWeight) errors.maxWeight = "maxWeight can't be blank";
    else if (input.maxWeight <= 0) errors.maxWeight = "Must be above zero";
    // Life Span
    if (!input.minLifeSpan) errors.minLifeSpan = "minLifeSpan can't be blank";
    else if (input.minLifeSpan <= 0) errors.minLifeSpan = "Must be above zero";
    if (!input.maxLifeSpan) errors.maxLifeSpan = "maxLifeSpan can't be blank";
    else if (input.maxLifeSpan <= 0) errors.maxLifeSpan = "Must be above zero";
    // if errors no tiene elementos disabled = false, else true
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    let dogToDispatch = {
      name: input.name,
      height: `${input.minHeight} - ${input.maxHeight}`,
      weight: `${input.minWeight} - ${input.maxWeight}`,
      lifeSpan: `${input.minLifeSpan} - ${input.minLifeSpan}`,
      temps: input.temperaments,
    };

    if (!input.image === undefined) {
      dogToDispatch["image"] = input.image;
    }
    console.log(dogToDispatch.image);
    dispatch(addBreed(dogToDispatch));
    setInput({
      name: "",
      image: "",
      minHeight: "",
      maxHeight: "",
      minWeight: "",
      maxWeight: "",
      minLifeSpan: "",
      maxLifeSpan: "",
      temperaments: [],
    });
  }
  /////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <Header />
      <form className={styles.card} onSubmit={handleSubmit}>
        <div className={styles.inputdiv}>
          <input
            onChange={handleInputChange}
            name="name"
            type="text"
            placeholder="Name"
            value={input.name}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.inputdiv}>
          <input
            onChange={handleInputChange}
            name="image"
            type="text"
            placeholder="Image"
            value={input.image}
          />
        </div>
        <div className={styles.inputdivhalf}>
          <div>
            <input
              onChange={handleInputChange}
              name="minHeight"
              type="number"
              placeholder="minHeight"
              value={input.minHeight}
            />

            <input
              onChange={handleInputChange}
              name="maxHeight"
              type="number"
              placeholder="maxHeight"
              value={input.maxHeight}
            />
          </div>
          {errors.maxHeight && <span>{errors.maxHeight}</span>}
          {errors.minHeight && <span>{errors.minHeight}</span>}
        </div>

        <div className={styles.inputdivhalf}>
          <div>
            <input
              onChange={handleInputChange}
              name="minWeight"
              type="number"
              placeholder="minWeight"
            />
            <input
              onChange={handleInputChange}
              name="maxWeight"
              type="number"
              placeholder="maxWeight"
            />
          </div>
          {errors.minWeight && <span>{errors.minWeight}</span>}
          {errors.maxWeight && <span>{errors.maxWeight}</span>}
        </div>

        <div className={styles.inputdivhalf}>
          <div>
            <input
              onChange={handleInputChange}
              name="minLifeSpan"
              type="number"
              placeholder="minLifeSpan"
            />
            <input
              onChange={handleInputChange}
              name="maxLifeSpan"
              type="number"
              placeholder="maxLifeSpan"
            />
          </div>
          {errors.minLifeSpan && <span>{errors.minLifeSpan}</span>}
          {errors.maxLifeSpan && <span>{errors.maxLifeSpan}</span>}
        </div>

        {/* Temperaments Select  */}
        <select
          className={styles.select}
          onChange={handleTemps}
          name="temperaments"
          id="temperaments"
        >
          <option value="">-Choose one or more-</option>
          {temperaments.map((e) => (
            <option value={e.name} key={e.id}>
              {e.name}
            </option>
          ))}
        </select>

        <div className={styles.inputdiv}>
          <ul>
            {input.temperaments.length
              ? input.temperaments.map((e, i) => (
                  <li key={i}>
                    {e} <span>x</span>
                  </li>
                ))
              : null}
          </ul>
        </div>
        <button
          className={styles.button}
          disabled={Object.keys(errors).length === 0 ? "" : true}
        >
          Create new breed!
        </button>
      </form>
    </>
  );
}
