import { auth } from "./FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import HomePage from "./components/HomePage";
import SignInPage from "./components/SignInPage";
import ReactLoading from "react-loading";

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <ReactLoading type="spin" className="loading" color="#fff" />;
  }

  return <div>{user ? <HomePage /> : <SignInPage />}</div>;
};

export default App;
