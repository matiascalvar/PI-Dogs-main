import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { searchBreedDetail } from "../../actions";

function Detail() {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(searchBreedDetail(id));
  }, [dispatch, id]);
  const breedDetail = useSelector((state) => state.breedDetail);
  return (
    <>
      <h1>Breed Detail</h1>
      <Link to="/home">Return to home</Link>
      <h3>Name: {breedDetail.name}</h3>
      <img
        src={`${breedDetail.image}`}
        alt={`${breedDetail.name}`}
        width="700"
      />
      <p>Temperament: {breedDetail.temperament}</p>
      <p>Weight: {breedDetail.weight} kg</p>
      <p>Height: {breedDetail.height} cm</p>
      <p>Life Span: {breedDetail.life_span}</p>
    </>
  );
}

export default Detail;
