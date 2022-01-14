import Messages from "./Messages";
import MessagesForm from "./MessagesForm";

const ChatRoom = ({ group }) => {
  return (
    <div className="chatRoom">
      <header># {group}</header>
      <Messages group={group} />
      <MessagesForm group={group} />
    </div>
  );
};

export default ChatRoom;
