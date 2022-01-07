import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../FirebaseConfig";
import {
  addDoc,
  collection,
  doc,
  orderBy,
  serverTimestamp,
  query,
} from "firebase/firestore";
import {
  useCollectionData,
  useDocumentDataOnce,
} from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import ReactLoading from "react-loading";

const ChatRoom = () => {
  let { group } = useParams();

  const [formValue, setFormValue] = useState("");
  const [user] = useAuthState(auth);

  const messagesRef = collection(db, "rooms", group, "messages");
  const q = query(messagesRef, orderBy("createdAt"));
  const [messages, loading] = useCollectionData(q, { idField: "id" });

  const membersRef = doc(db, "rooms", group);
  const [members] = useDocumentDataOnce(membersRef);

  const sendMessage = async (e) => {
    e.preventDefault();

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      createdBy: user.uid,
      profilePic: user.photoURL,
      displayName: user.displayName,
    });

    setFormValue("");
  };

  return (
    <div className="chatRoom">
      <header># {group}</header>

      <div className="messages">
        {members &&
          members.members.includes(user.uid) &&
          messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} uid={user.uid} />
          ))}

        {members && !members.members.includes(user.uid) && (
          <p>You are not a member of this group!</p>
        )}

        {loading && (
          <ReactLoading type="spin" className="loading" color="#fff" />
        )}
      </div>

      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder={`Message ${group}`}
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ChatRoom;
