const ChatMessage = ({ message, uid }) => {
  const messageClass = message.createdBy === uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={message.profilePic} alt="Display Pic" />
      <p>{message.text}</p>
    </div>
  );
};

export default ChatMessage;
