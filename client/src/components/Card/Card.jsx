function Cards({ name, image, temperament, weight }) {
  return (
    <>
      <h3>{name}</h3>
      <img src={`${image}`} alt={`${name}`} width="700" />
      <p>Temperament: {temperament}</p>
      <p>Weight: {weight}</p>
    </>
  );
}

export default Cards;
