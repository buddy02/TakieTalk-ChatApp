import { TiMessages } from "react-icons/ti";
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import useConversation from "../../store/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation()
  useEffect(() => {
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (<NoChatSelected />) : (<>
        <span className="px-4 py-2 mb-2 font-bold bg-gray-800">To: {selectedConversation.fullName}</span>
        <Messages />
        <MessageInput />
      </>)}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center sm:text-lg md:text-xl">
      <p>Welcome {authUser.fullName}</p>
      <p>Select a chat to start messaging</p>
      <TiMessages className="text-3xl md:text-6xl" />
    </div>
  )
}
