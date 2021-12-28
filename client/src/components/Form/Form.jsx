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
    temperaments,
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
    if (!input.minHeight) errors.minHeight = "minHeight can't be blank";
    else if (input.minHeight <= 0) errors.minHeight = "Must be above zero";
    if (!input.maxHeight) errors.maxHeight = "maxHeight can't be blank";
    else if (input.maxHeight <= 0) errors.maxHeight = "Must be above zero";

    // if errors no tiene elementos disabled = false, else true
    return errors;
  }
  /////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <form>
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
        {/*  */}
        <select onChange={handleTemps} name="temperaments" id="temperaments">
          <option value="">-Choose one or more-</option>
          {temperaments.map((e) => (
            <option value={e.name} key={e.id}>
              {e.name}
            </option>
          ))}
        </select>

        {/* submit */}
        <input type="submit" value="Submit" />
      </form>
      <div>
        {input.temperaments.map((e) => (
          <p>{e}</p>
        ))}
      </div>
    </>
  );
}

// function handleChange(e) {
//   const { name, value } = e.target;
//   let errors = this.state.errors;

//   switch (name) {
//     case "name":
//       errors.name =
//         value.length < 4 ? "Name must have four characters at least" : "";
//       break;
//     case "minHeight":
//       errors.minHeight =
//         isNaN(value) || value < 0
//           ? "Min Height must be a number and greater than zero"
//           : "";
//       break;
//     case "maxHeight":
//       errors.maxHeight =
//         !isNaN(value) || (value > 0 && value < 99)
//           ? ""
//           : "Max Height must be a number, more than zero and less than 99";
//       break;
//     case "minWeight":
//       errors.minWeight =
//         isNaN(value) || value < 0
//           ? "Min Weight must be a number and greater than zero"
//           : "";
//       break;
//     case "maxWeight":
//       errors.maxWeight =
//         !isNaN(value) || (value > 0 && value < 99)
//           ? ""
//           : "Max Weight must be a number, more than zero and less than 99";
//       break;
//     case "lifeSpan":
//       var lifeSpanPattern = /[0-9]+ - [0-9]+/i; // Expresion Regular para validar Emails.
//       errors.lifeSpan = lifeSpanPattern.test(value)
//         ? ""
//         : "Life Span should be two numbers separated by a slash -";
//       break;
//     default:
//       break;
//   }
//   this.setState({
//     [name]: value,
//     errors,
//   });
//   this.validateForm(this.state.errors);
// }
