import { MdDelete } from "react-icons/md";
import { auth, db } from "../../FirebaseConfig";
import {
  arrayRemove,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  writeBatch,
  updateDoc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const DeleteGroup = ({ group }) => {
  const [user] = useAuthState(auth);
  const docRef = doc(db, "rooms", group);
  const navigate = useNavigate();

  const deleteGroup = async () => {
    let docSnapshot = await getDoc(docRef);
    let creatorUid = docSnapshot.data().createdBy;

    if (creatorUid === user.uid) {
      let members = docSnapshot.data().members;

      const batch = writeBatch(db);

      for (let i in members) {
        batch.update(doc(db, "users", members[i]), {
          groups: arrayRemove(group),
        });
      }

      const querySnapshot = await getDocs(
        collection(db, "rooms", group, "messages")
      );
      querySnapshot.forEach((msg) => {
        batch.delete(msg.ref);
      });

      await batch.commit();

      await deleteDoc(docRef);
    } else {
      await updateDoc(docRef, {
        members: arrayRemove(user.uid),
      });

      await updateDoc(doc(db, "users", user.uid), {
        groups: arrayRemove(group),
      });
    }

    navigate("/");
  };

  return (
    <button className="deleteButton" onClick={deleteGroup}>
      <MdDelete />
      <p>Delete group</p>
    </button>
  );
};

export default DeleteGroup;
