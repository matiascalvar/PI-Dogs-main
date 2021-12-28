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

  if (Object.keys(breedDetail).length === 0) return <h2> CARGANDO </h2>;
  else {
    return (
      <>
        <Link to="/home">Go back to home</Link>
        <p>{breedDetail.name}</p>
      </>
    );
  }
}

export default Detail;
