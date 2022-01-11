import ChatMessage from "./ChatMessage";
import ReactLoading from "react-loading";
import {
  useCollectionData,
  useDocumentDataOnce,
} from "react-firebase-hooks/firestore";
import { useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../FirebaseConfig";
import { collection, query, orderBy, doc } from "firebase/firestore";

const Messages = ({ group }) => {
  const [user] = useAuthState(auth);

  const messagesRef = collection(db, "rooms", group, "messages");
  const q = query(messagesRef, orderBy("createdAt"));
  const [messages, loading] = useCollectionData(q, { idField: "id" });

  const membersRef = doc(db, "rooms", group);
  const [members] = useDocumentDataOnce(membersRef);

  const dummy = useRef(null);

  const scrollToBottom = () => {
    dummy.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, group]);

  return (
    <div className="messages">
      {members &&
        members.members.includes(user.uid) &&
        messages &&
        messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} uid={user.uid} />
        ))}

      <div ref={dummy} />

      {members && !members.members.includes(user.uid) && (
        <p>You are not a member of this group!</p>
      )}

      {loading && <ReactLoading type="spin" className="loading" color="#fff" />}
    </div>
  );
};

export default Messages;
