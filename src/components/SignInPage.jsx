import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../FirebaseConfig";

const SignInPage = () => {
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="signInPage">
      <button className="signInButton" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};

export default SignInPage;
