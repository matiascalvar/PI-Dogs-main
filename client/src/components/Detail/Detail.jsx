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

  if (false) {
    return <h1> CARGANDO </h1>;
  } else {
    <h1> NO CARGANDO</h1>;
  }
}

export default Detail;
