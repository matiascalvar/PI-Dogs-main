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
            <p>
              <span>Height:</span> {breedDetail.height} cm
            </p>
            <p>
              <span>Weight:</span> {breedDetail.weight} kg
            </p>
            <p>
              <span>Temperaments:</span> {breedDetail.temperament}
            </p>
            <p>
              <span>Life Span:</span> {breedDetail.life_span}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Detail;
