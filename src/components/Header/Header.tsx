import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import appStyles from "../../App.module.css";
import { useState } from "react";

function Header() {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    setValue(!value);
  };
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">
          <img className={styles.logo} src="/favicon.ico" alt="logo" />
        </Link>
        <Link to="/today" id={appStyles.desktopVisible}>
          <button className={styles.navButton} id={appStyles.red}>
            Today
          </button>
        </Link>
        <Link to="/trendings" id={appStyles.desktopVisible}>
          <button className={styles.navButton} id={appStyles.yellow}>
            Create
          </button>
        </Link>
        <Searchbar />
        <div
          className={styles.navButtonContainer}
          id={appStyles.desktopVisible}
        >
          <button
            className={`${styles.navButton} ${styles.rightSideButton}`}
            id={appStyles.lightBlue}
          >
            <img
              className={styles.navLogos}
              src="https://icongr.am/octicons/person.svg?size=148"
              alt="user"
            />
          </button>
          <button
            className={`${styles.navButton} ${styles.rightSideButton}`}
            id={appStyles.blue}
          >
            <img
              className={styles.navLogos}
              src="https://icongr.am/octicons/bookmark.svg?size=14"
              alt="bookmark"
            />
          </button>
        </div>
        <div className={styles.menu} id={appStyles.mobileVisible}>
          <MenuIcon />
        </div>
      </nav>
    </header>
  );
}

export default Header;
