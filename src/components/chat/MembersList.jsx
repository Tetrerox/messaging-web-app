import { db } from "../../FirebaseConfig";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import UserInfo from "../sidebar/UserInfo";

const MembersList = ({ group }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "rooms", group), async (document) => {
      let membersList = document.data().members;
      let temp = [];

      for (let i in membersList) {
        let res = await getDoc(doc(db, "users", membersList[i]));
        let data = res.data();
        temp.push({
          key: membersList[i],
          displayName: data.displayName,
          photoURL: data.photoURL,
        });
      }

      setMembers(temp);
    });

    return () => unsub();
  }, [group]);

  return (
    <div className="membersList">
      <header>Members</header>
      <div className="members">
        {members.map((member) => (
          <UserInfo
            key={member.key}
            displayName={member.displayName}
            photoURL={member.photoURL}
          />
        ))}
      </div>
    </div>
  );
};

export default MembersList;
