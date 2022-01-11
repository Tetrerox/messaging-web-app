import Dropdown from "./Dropdown";

const ChatRoomHeader = ({ group }) => {
  return (
    <ul className="chatRoomHeader">
      <li># {group}</li>
      <li>
        <Dropdown />
      </li>
    </ul>
  );
};

export default ChatRoomHeader;
