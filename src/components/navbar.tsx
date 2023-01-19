import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h1>Aben Cermeño</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/createpost">Create Post</Link>
        )}
      </div>

      <div className="user">
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img
              src={user?.photoURL || ""}
              width="40"
              height="40"
              alt="user-pic"
            />
            <button className="logout-button" onClick={signUserOut}>
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}
