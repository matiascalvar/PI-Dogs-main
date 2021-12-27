import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Form() {
  const temperaments = useSelector((state) => state.temperaments);
  const handleSubmit = () => {
    return true;
  };
  return (
    <>
      <Link to="/form">
        <p>Return to home</p>
      </Link>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" /> <br />
        <input type="number" placeholder="Min Height" />
        <input type="number" placeholder="Max Height" /> <br />
        <input type="text" placeholder="Min Weight" />
        <input type="text" placeholder="Max Weight" /> <br />
        <input type="text" placeholder="Life Span" /> <br />
        <select multiple name="temperaments" id="temperaments">
          <option value="A Temperament">-Choose one or more-</option>
          {temperaments.map((e) => (
            <option value={e.name} key={e.id}>
              {e.name}
            </option>
          ))}
        </select>
        <br />
        {temperaments.map((e) => (
          <span>
            <input type="checkbox" name={e.name} id={e.id} />
            <label for={e.name}>{e.name}</label>
          </span>
        ))}{" "}
        <br />
        <button type="submit">Create new breed</button>
      </form>
    </>
  );
}

export default Form;

// Un formulario controlado con los siguientes campos
//      Nombre
//      Altura (Diferenciar entre altura mínima y máxima)
//      Peso (Diferenciar entre peso mínimo y máximo)
//      Años de vida
//  Posibilidad de seleccionar/agregar uno o más temperamentos
//  Botón/Opción para crear una nueva raza de perro
