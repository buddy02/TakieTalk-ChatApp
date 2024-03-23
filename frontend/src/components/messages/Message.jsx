import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../store/useConversation"
import extractTime from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation()
  const fromMe = authUser._id === message.senderId;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const bubbleBgColor = fromMe && "bg-blue-500"
  const extractedTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`} >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>


      <div className={`chat-bubble ${bubbleBgColor}`}>{message.message}</div>
      <time className="chat-footer opacity-50 text-xs">
        {extractedTime}
      </time>
    </div >
  )
}

export default Message
