import { useParams } from "react-router-dom";
import Messages from "./Messages";
import MessagesForm from "./MessagesForm";

const ChatRoom = () => {
  let { group } = useParams();

  return (
    <div className="chatRoom">
      <header className="chatRoomHeader"># {group}</header>
      <Messages group={group} />
      <MessagesForm group={group} />
    </div>
  );
};

export default ChatRoom;
