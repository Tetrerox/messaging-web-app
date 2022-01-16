import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { BsGoogle } from "react-icons/bs";

const SignInPage = () => {
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="signInPage">
      <button className="signInButton" onClick={signInWithGoogle}>
        <BsGoogle />
        <p>Sign in with Google</p>
      </button>
    </div>
  );
};

export default SignInPage;
