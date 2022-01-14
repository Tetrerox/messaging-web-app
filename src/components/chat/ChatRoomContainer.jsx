import { useParams } from "react-router-dom";
import ChatRoom from "./ChatRoom";
import MembersList from "./MembersList";

const ChatRoomContainer = () => {
  let { group } = useParams();

  return (
    <div className="chatRoomContainer">
      <ChatRoom group={group} />
      <MembersList group={group} />
    </div>
  );
};

export default ChatRoomContainer;
