import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  return (
    <div className="login-panel">
      <p>Sign in with Google to continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
}
