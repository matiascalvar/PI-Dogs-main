import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { clearDetail, searchBreedDetail } from "../../actions";

function Detail() {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(searchBreedDetail(id));
    dispatch(clearDetail());
  }, [dispatch, id]);
  const breedDetail = useSelector((state) => state.breedDetail);

  if (Object.keys(breedDetail).length === 0) return <h2>Loading...</h2>;
  else {
    return (
      <>
        <Link to="/home">Go back to home</Link>
        <h1>{breedDetail.name}</h1>
        <img src={breedDetail.image} alt={breedDetail.name} width="700" />
        <p>Height: {breedDetail.height} cm</p>
        <p>Weight: {breedDetail.weight} kg</p>
        <p>Temperaments: {breedDetail.temperament}</p>
        <p>Life Span: {breedDetail.life_span}</p>
      </>
    );
  }
}

export default Detail;
