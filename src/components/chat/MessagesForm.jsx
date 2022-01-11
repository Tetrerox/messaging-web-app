import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../FirebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const MessagesForm = ({ group }) => {
  const [user] = useAuthState(auth);

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    let text = formValue;
    setFormValue("");

    await addDoc(collection(db, "rooms", group, "messages"), {
      text: text,
      createdAt: serverTimestamp(),
      createdBy: user.uid,
      profilePic: user.photoURL,
      displayName: user.displayName,
    });
  };

  return (
    <form className="messagesForm" onSubmit={sendMessage}>
      <input
        type="text"
        placeholder={`Message ${group}`}
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
      />
    </form>
  );
};

export default MessagesForm;
