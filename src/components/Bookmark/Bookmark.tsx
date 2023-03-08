import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../Models/gif.models";
import detailStyles from "../../Pages/Detail/Detail.module.css";
import { addFavorite, matchFavorite } from "../../redux/favorites_actions";

function Bookmarks(Object: data) {
  const dispatch = useDispatch();
  const allFavorites = useSelector((state: any) => state.Favorites);
  console.log(allFavorites);

  const handleFavorite = () => {
    dispatch(addFavorite(Object));
    dispatch(matchFavorite());
  };

  useEffect(() => {
    if (allFavorites && allFavorites.length) {
      localStorage.setItem("favorites", JSON.stringify(allFavorites));
    }
  }, [allFavorites]);

  return (
    <div onClick={() => handleFavorite()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className={detailStyles.socialSide}
      >
        <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
      </svg>
    </div>
  );
}

export default Bookmarks;
