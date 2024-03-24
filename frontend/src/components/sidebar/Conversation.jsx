import { useSocketContext } from "../../context/socketContext";
import useConversation from "../../store/useConversation"

const Conversation = ({ conversation, emoji, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)
  return (
    <>
      <div className={`${isSelected && "bg-blue-600"} flex items-center gap-2 text-gray-200 hover:bg-blue-600 rounded p-2 cursor-pointer`} onClick={() => setSelectedConversation(conversation)}>

        <div className={`avatar ${isOnline && "online"}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>

        <div className="flex gap-3 flex-1 justify-between">
          <div>{conversation.fullName} </div>
          <div className="">{emoji}</div>
        </div>
      </div>
      <div className={`${!lastIdx && "divider"} my-0 py-0 h-1`}></div >
    </>
  )
}

export default Conversation
