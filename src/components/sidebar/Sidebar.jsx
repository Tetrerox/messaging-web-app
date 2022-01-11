import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";
import SignOut from "./SignOut";
import GroupsHeader from "./GroupsHeader";
import Groups from "./Groups";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SearchBar />
      <UserInfo />
      <GroupsHeader />
      <Groups />
      <SignOut />
    </div>
  );
};

export default Sidebar;
