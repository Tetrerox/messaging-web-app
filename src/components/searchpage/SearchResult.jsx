import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../FirebaseConfig";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";

const SearchResult = ({ result }) => {
  const [user] = useAuthState(auth);

  const addGroup = async () => {
    await updateDoc(doc(db, "rooms", result), {
      members: arrayUnion(user.uid),
    });

    await setDoc(
      doc(db, "users", user.uid),
      {
        groups: arrayUnion(result),
      },
      { merge: true }
    );
  };

  return (
    <div className="searchResult">
      <p>{result}</p>
      <button className="joinButton" onClick={addGroup}>
        Join
      </button>
    </div>
  );
};

export default SearchResult;
