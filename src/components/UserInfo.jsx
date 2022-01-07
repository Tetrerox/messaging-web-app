import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../FirebaseConfig";

const UserInfo = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="userInfo">
      <img src={user.photoURL} alt={user.displayName} />
      <p>{user.displayName}</p>
    </div>
  );
};

export default UserInfo;
