// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// function Form() {
//   const temperaments = useSelector((state) => state.temperaments);
//   const handleSubmit = () => {
//     return true;
//   };
//   return (
//     <>
//       <Link to="/home">
//         <p>Return to home</p>
//       </Link>
//       <form action="" onSubmit={handleSubmit}>
//         <input type="text" placeholder="Name" /> <br />
//         <input type="url" name="image" id="image" placeholder="Image" /> <br />
//         <input type="number" placeholder="Min Height" />
//         <input type="number" placeholder="Max Height" /> <br />
//         <input type="text" placeholder="Min Weight" />
//         <input type="text" placeholder="Max Weight" /> <br />
//         <input type="text" placeholder="Life Span" /> <br />
//         <select multiple name="temperaments" id="temperaments">
//           <option value="A Temperament">-Choose one or more-</option>
//           {temperaments.map((e) => (
//             <option value={e.name} key={e.id}>
//               {e.name}
//             </option>
//           ))}
//         </select>
//         <br />
//         <button type="submit">Create new breed</button>
//       </form>
//     </>
//   );
// }

// export default Form;

// Un formulario controlado con los siguientes campos
//      Nombre
//      Altura (Diferenciar entre altura mínima y máxima)
//      Peso (Diferenciar entre peso mínimo y máximo)
//      Años de vida
//  Posibilidad de seleccionar/agregar uno o más temperamentos
//  Botón/Opción para crear una nueva raza de perro
// Para los temperamentos. Se puede ir pusheando desde el select a un html y luego de ahi enviarlos por form

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Form() {
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
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
    console.log(input);
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
    console.log(input);
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

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
    // ACA EL DISPATCH
    setInput({
      name: "",
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
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          name="name"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          onChange={handleInputChange}
          name="minHeight"
          type="number"
          placeholder="minHeight"
        />
        {errors.minHeight && <p>{errors.minHeight}</p>}
        <input
          onChange={handleInputChange}
          name="maxHeight"
          type="number"
          placeholder="maxHeight"
        />
        {errors.maxHeight && <p>{errors.maxHeight}</p>}
        <input
          onChange={handleInputChange}
          name="minWeight"
          type="number"
          placeholder="minWeight"
        />
        {errors.minWeight && <p>{errors.minWeight}</p>}
        <input
          onChange={handleInputChange}
          name="maxWeight"
          type="number"
          placeholder="maxWeight"
        />
        {errors.maxWeight && <p>{errors.maxWeight}</p>}
        <input
          onChange={handleInputChange}
          name="minLifeSpan"
          type="number"
          placeholder="minLifeSpan"
        />
        {errors.minLifeSpan && <p>{errors.minLifeSpan}</p>}
        <input
          onChange={handleInputChange}
          name="maxLifeSpan"
          type="number"
          placeholder="maxLifeSpan"
        />
        {errors.maxLifeSpan && <p>{errors.maxLifeSpan}</p>}
        {/* Temperaments Select  */}
        <select onChange={handleTemps} name="temperaments" id="temperaments">
          <option value="">-Choose one or more-</option>
          {temperaments.map((e) => (
            <option value={e.name} key={e.id}>
              {e.name}
            </option>
          ))}
        </select>

        <div>
          <ul>
            {input.temperaments.length
              ? input.temperaments.map((e, i) => <li key={i}>{e}</li>)
              : null}
          </ul>
        </div>
        <button>Create new breed!</button>
      </form>
    </>
  );
}
