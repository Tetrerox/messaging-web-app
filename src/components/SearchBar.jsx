import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const searchGroups = (e) => {
    e.preventDefault();
    if (searchInput === "") {
      alert("The search field cannot be empty!");
      return;
    }
    navigate(`search/${searchInput}`);
    setSearchInput("");
  };

  return (
    <form className="searchBar" onSubmit={searchGroups}>
      <FiSearch size="19" color="white" />
      <input
        type="text"
        spellCheck="false"
        placeholder="Search groups"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
