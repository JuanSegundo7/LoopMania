import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGifs } from "../../redux/gifs_actions";
import styles from "./Searchbar.module.css";
import { useNavigate, useLocation } from "react-router-dom";

function Searchbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [name, setName] = useState("");

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: any) => {
    if (pathname.includes("/gif")) {
      navigate(`/gifs/${name}`);
    }
    e.preventDefault();
    dispatch(getGifs(name));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <span className={styles.span}>
        <img
          src="https://icongr.am/clarity/search.svg?size=128&color=5f5f5f"
          alt="search"
        />
      </span>
      <input
        type="text"
        autoComplete="off"
        className={styles.input}
        placeholder="Search"
        onChange={handleChange}
      />
    </form>
  );
}

export default Searchbar;
