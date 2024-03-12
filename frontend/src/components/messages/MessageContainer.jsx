import { TiMessages } from "react-icons/ti";
import MessageInput from "./MessageInput"
import Messages from "./Messages"

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (<NoChatSelected />) : (<>
        <span className="px-4 py-2 mb-2 font-bold">Rangadu</span>
        <Messages />
        <MessageInput />
      </>)}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center sm:text-lg md:text-xl">
      <p>Welcome John</p>
      <p>Select a chat to start messaging</p>
      <TiMessages className="text-3xl md:text-6xl" />
    </div>
  )
}
