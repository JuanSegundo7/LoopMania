import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { logout } = useAuth0();

  const handleLogout = () => {
    return logout();
  };
  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Profile;
