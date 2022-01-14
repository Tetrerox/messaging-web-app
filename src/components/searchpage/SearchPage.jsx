import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../FirebaseConfig";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  const [user] = useAuthState(auth);
  const colRef = collection(db, "rooms");
  const [results, setResults] = useState([]);
  let { input } = useParams();

  useEffect(() => {
    const getGroups = async () => {
      const querySnapshot = await getDocs(colRef);
      let results = [];
      querySnapshot.forEach((doc) => {
        let groupName = doc.data().name;
        if (
          groupName
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(input.toLowerCase().replace(/\s/g, "")) &&
          !doc.data().members.includes(user.uid)
        ) {
          results.push(groupName);
        }
      });
      setResults(results);
    };

    getGroups();
  }, [input]);

  return (
    <div className="searchPage">
      <p className="notice">
        Only groups that you are not a member of will show.
      </p>
      {results.map((result) => (
        <SearchResult key={`${result} key`} result={result} />
      ))}
    </div>
  );
};

export default SearchPage;
