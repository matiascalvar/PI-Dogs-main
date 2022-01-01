import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { clearDetail, searchBreedDetail } from "../../actions";
import Header from "../Header/Header.jsx";
import Loading from "../Loading/Loading";
import styles from "./Detail.module.css";
function Detail() {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(searchBreedDetail(id));
    dispatch(clearDetail());
  }, [dispatch, id]);
  const breedDetail = useSelector((state) => state.breedDetail);

  if (Object.keys(breedDetail).length === 0)
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  else {
    return (
      <>
        <Header />
        <div className={styles.card}>
          <h1>{breedDetail.name}</h1>
          <img src={breedDetail.image} alt={breedDetail.name} width="700" />
          <div className={styles.foot}>
            <p>Height: {breedDetail.height} cm</p>
            <p>Weight: {breedDetail.weight} kg</p>
            <p>Temperaments: {breedDetail.temperament}</p>
            <p>Life Span: {breedDetail.life_span}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Detail;
