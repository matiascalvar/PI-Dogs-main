function Cards({ name, image, temperament, weight }) {
  // console.log(breeds);
  return (
    <>
      <h3>Name: {name}</h3>
      <img src={`${image}`} alt={`${name}`} width="630" />
      <p>Temperament: {temperament}</p>
      <p>Weight: {weight}</p>
    </>
  );
}

export default Cards;
