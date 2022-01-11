import { useParams } from "react-router-dom";
import Messages from "./Messages";
import ChatRoomHeader from "./ChatRoomHeader";
import MessagesForm from "./MessagesForm";

const ChatRoom = () => {
  let { group } = useParams();

  return (
    <div className="chatRoom">
      <ChatRoomHeader group={group} />
      <Messages group={group} />
      <MessagesForm group={group} />
    </div>
  );
};

export default ChatRoom;
