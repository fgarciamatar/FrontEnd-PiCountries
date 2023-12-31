import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Filter from "../../components/Filters/Filter";
import style from "./Home.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../redux/actions";

const HomePage = () => {
  const dispatch = useDispatch();


  useEffect(() => { //cuando se renderiza Home -> se distpacha getCountries --> guarda los paises en el estado global, countries
    dispatch(getCountries())
   }, []);

  return (
    <div className={style.container}>
      <div className={style.containerFilter}>
        <Filter />
      </div>
      <div className={style.containerCard}>
        <CardsContainer />
      </div>
    </div>
  );
};

export default HomePage;
