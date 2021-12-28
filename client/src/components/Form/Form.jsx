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
    lifeSpan: "",
    temperaments: "",
  });

  const [errors, setErrors] = useState({});
  // const [disable, setdisable] = useState(true);

  return (
    <form>
      <input name="name" type="name" value="" placeholder="Name" />
      {/* {!this.state.errors.name ? null : <div>{this.state.errors.name}</div>} */}
      <input name="minHeight" type="name" value="" placeholder="minHeight" />
      {/* {!this.state.errors.minHeight ? null : (
        <div>{this.state.errors.minHeight}</div>
      )} */}
      <input name="maxHeight" type="name" value="" placeholder="maxHeight" />
      {/* {!this.state.errors.maxHeight ? null : (
        <div>{this.state.errors.maxHeight}</div>
      )} */}
      <input name="minWeight" type="name" value="" placeholder="minWeight" />
      {/* {!this.state.errors.minWeight ? null : (
        <div>{this.state.errors.minWeight}</div>
      )} */}
      <input name="maxWeight" type="name" value="" placeholder="maxWeight" />
      {/* {!this.state.errors.maxWeight ? null : (
        <div>{this.state.errors.maxWeight}</div>
      )} */}
      <input name="lifeSpan" type="name" value="" placeholder="lifeSpan" />
      {/* {!this.state.errors.lifeSpan ? null : (
        <div>{this.state.errors.lifeSpan}</div>
      )} */}

      <select name="temperaments" id="temperaments">
        <option value="A Temperament">-Choose one or more-</option>
        {temperaments.map((e) => (
          <option value={e.name} key={e.id}>
            {e.name}
          </option>
        ))}
      </select>

      {/* submit */}
      <input type="submit" value="Submit" />
    </form>
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
