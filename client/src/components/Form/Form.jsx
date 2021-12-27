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

import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      minHeight: "",
      maxHeight: "",
      minWeight: "",
      maxWeight: "",
      lifeSpan: "",
      temperaments: "",
      errors: {
        name: "",
        minHeight: "",
        maxHeight: "",
        minWeight: "",
        maxWeight: "",
        lifeSpan: "",
        temperaments: "",
      },
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  validateForm(errors) {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    if (valid) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name =
          value.length < 4 ? "Name must have four characters at least" : "";
        break;
      case "minHeight":
        errors.minHeight =
          isNaN(value) || value < 0
            ? "Min Height must be a number and greater than zero"
            : "";
        break;
      case "maxHeight":
        errors.maxHeight =
          !isNaN(value) || (value > 0 && value < 99)
            ? ""
            : "Max Height must be a number, more than zero and less than 99";
        break;
      case "minWeight":
        errors.minWeight =
          isNaN(value) || value < 0
            ? "Min Weight must be a number and greater than zero"
            : "";
        break;
      case "maxWeight":
        errors.maxWeight =
          !isNaN(value) || (value > 0 && value < 99)
            ? ""
            : "Max Weight must be a number, more than zero and less than 99";
        break;
      case "lifeSpan":
        var lifeSpanPattern = /[0-9]+ - [0-9]+/i; // Expresion Regular para validar Emails.
        errors.lifeSpan = lifeSpanPattern.test(value)
          ? ""
          : "Life Span should be two numbers separated by a slash -";
        break;
      default:
        break;
    }
    this.setState({
      [name]: value,
      errors,
    });

    this.validateForm(this.state.errors);
  }

  render() {
    console.log(this.state);
    return (
      <form>
        <input
          name="name"
          type="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        {!this.state.errors.name ? null : <div>{this.state.errors.name}</div>}
        <input
          name="minHeight"
          type="name"
          value={this.state.minHeight}
          onChange={this.handleChange}
          placeholder="minHeight"
        />
        {!this.state.errors.minHeight ? null : (
          <div>{this.state.errors.minHeight}</div>
        )}
        <input
          name="maxHeight"
          type="name"
          value={this.state.maxHeight}
          onChange={this.handleChange}
          placeholder="maxHeight"
        />
        {!this.state.errors.maxHeight ? null : (
          <div>{this.state.errors.maxHeight}</div>
        )}
        <input
          name="minWeight"
          type="name"
          value={this.state.minWeight}
          onChange={this.handleChange}
          placeholder="minWeight"
        />
        {!this.state.errors.minWeight ? null : (
          <div>{this.state.errors.minWeight}</div>
        )}
        <input
          name="maxWeight"
          type="name"
          value={this.state.maxWeight}
          onChange={this.handleChange}
          placeholder="maxWeight"
        />
        {!this.state.errors.maxWeight ? null : (
          <div>{this.state.errors.maxWeight}</div>
        )}
        <input
          name="lifeSpan"
          type="name"
          value={this.state.lifeSpan}
          onChange={this.handleChange}
          placeholder="lifeSpan"
        />
        {!this.state.errors.lifeSpan ? null : (
          <div>{this.state.errors.lifeSpan}</div>
        )}
        <input
          name="temperaments"
          type="name"
          value={this.state.temperaments}
          onChange={this.handleChange}
          placeholder="temperaments"
        />

        {/* submit */}
        <input disabled={this.state.disabled} type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
