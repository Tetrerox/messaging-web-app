import { auth } from "../../FirebaseConfig";
import { signOut } from "firebase/auth";

const SignOut = () => {
  return (
    <>
      <button className="signOutButton" onClick={() => signOut(auth)}>
        Sign Out
      </button>
    </>
  );
};

export default SignOut;
