const UserInfo = ({ displayName, photoURL }) => {
  return (
    <div className="userInfo">
      <img src={photoURL} alt={displayName} />
      <p>{displayName}</p>
    </div>
  );
};

export default UserInfo;
