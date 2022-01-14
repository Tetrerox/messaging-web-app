import { MdDelete } from "react-icons/md";
import { auth, db } from "../../FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const DeleteGroup = ({ group }) => {
  const [user] = useAuthState(auth);
  const [isCreator, setIsCreator] = useState(false);

  useEffect(() => {
    const getCreatorStatus = async () => {
      let docSnapshot = await getDoc(doc(db, "rooms", group));
      let creatorUid = docSnapshot.data().createdBy;
      if (creatorUid === user.uid) {
        setIsCreator(true);
      }
    };

    getCreatorStatus();
  }, [group]);

  const deleteOrLeaveGroup = async () => {};

  return (
    <button className="deleteButton">
      <MdDelete />
      <p>{isCreator ? "Delete group" : "Leave Group"}</p>
    </button>
  );
};

export default DeleteGroup;
