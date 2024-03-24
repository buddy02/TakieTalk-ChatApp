import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages"
import useListenMessages from "../../hooks/useListenMessages";
import Message from "./Message"
import MessageSkeleton from "../skeletons/MessageSkeleton";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }, [messages])

  if (loading) {
    return <div><MessageSkeleton /><MessageSkeleton /><MessageSkeleton /></div>
  }
  if (!loading && messages.length === 0) {
    return <p className='flex-1 text-center'>Send a message to start the conversation</p>
  }
  return (
    <div className="flex-1 px-2 overflow-auto">
      {messages.map(message => (
        <div key={message._id} ref={lastMessageRef}><Message message={message} /></div>
      ))}
    </div>

  )
}


export default Messages
