import { auth } from "../../FirebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  const logOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <>
      <button className="signOutButton" onClick={logOut}>
        Sign Out
      </button>
    </>
  );
};

export default SignOut;
