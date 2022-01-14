import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../FirebaseConfig";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import Group from "./Group";
import ReactLoading from "react-loading";

const Groups = () => {
  const [user] = useAuthState(auth);
  const documentRef = doc(db, "users", user.uid);
  const [data, loading] = useDocumentData(documentRef);

  return (
    <div className="groups">
      {data &&
        data.groups.map((group) => (
          <Group key={`${group} key`} title={group} />
        ))}
      {loading && <ReactLoading type="spin" className="loading" color="#fff" />}
    </div>
  );
};

export default Groups;
