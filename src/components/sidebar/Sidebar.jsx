import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../FirebaseConfig";
import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";
import SignOut from "./SignOut";
import GroupsHeader from "./GroupsHeader";
import Groups from "./Groups";

const Sidebar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="sidebar">
      <SearchBar />
      <UserInfo displayName={user.displayName} photoURL={user.photoURL} />
      <GroupsHeader />
      <Groups />
      <SignOut />
    </div>
  );
};

export default Sidebar;
