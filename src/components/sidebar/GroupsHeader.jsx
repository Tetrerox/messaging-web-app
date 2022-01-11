import { IoIosAdd, IoIosArrowDown } from "react-icons/io";
import { auth, db } from "../../FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { arrayUnion, doc, setDoc, getDoc } from "firebase/firestore";

const GroupsHeader = () => {
  const [user] = useAuthState(auth);

  const addGroup = async () => {
    let groupName = prompt("Add a group");

    if (groupName === null) {
      return;
    } else if (groupName === "") {
      alert("The name of the group cannot be empty!");
    } else {
      const docSnap = await getDoc(doc(db, "rooms", groupName));
      if (docSnap.exists()) {
        alert("This group name already exists publicly!");
        return;
      }
    }

    groupName = groupName.trim();

    await setDoc(doc(db, "rooms", groupName), {
      name: groupName,
      createdBy: user.uid,
      members: [user.uid],
    });

    await setDoc(
      doc(db, "users", user.uid),
      {
        groups: arrayUnion(groupName),
      },
      { merge: true }
    );
  };

  return (
    <div className="groupsHeader">
      <IoIosArrowDown size={17} />
      <p>Groups</p>
      <button className="addGroupButton" onClick={addGroup}>
        <IoIosAdd size={17} />
        <p>Add</p>
      </button>
    </div>
  );
};

export default GroupsHeader;
