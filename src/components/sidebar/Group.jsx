import { useNavigate } from "react-router-dom";

const Group = ({ title }) => {
  const navigate = useNavigate();

  const selectGroup = () => {
    navigate(`/g/${title}`);
  };

  return (
    <button className="group" onClick={selectGroup}>
      {title}
    </button>
  );
};

export default Group;
