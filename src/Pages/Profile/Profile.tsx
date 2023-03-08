import React from "react";
import styles from "./Profile.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../../components/Spinner/Spinner";

function Profile() {
  const { logout, user } = useAuth0();

  const handleLogout = () => {
    return logout();
  };

  console.log(user);

  return (
    <section id={styles.Profile}>
      {!user ? (
        <Spinner />
      ) : (
        <article>
          <img src={user.picture} alt="user" />
          <h3 className={styles.profileH3}>{user.name}</h3>
          <p className={styles.profileP}>@{user.nickname}</p>
          <button
            className={styles.profileButton}
            onClick={() => handleLogout()}
          >
            LOGOUT
          </button>
        </article>
      )}
    </section>
  );
}

export default Profile;
