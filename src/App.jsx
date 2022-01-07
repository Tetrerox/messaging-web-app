import { auth } from "./FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import ReactLoading from "react-loading";

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <ReactLoading type="spin" className="loading" color="#fff" />;
  }

  return <div>{user ? <HomePage /> : <SignIn />}</div>;
};

export default App;
