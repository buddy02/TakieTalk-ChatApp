import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"

const Messages = () => {
  const { loading, messages } = useGetMessages();
  if (!loading && messages.length === 0) {
    return <p className='flex-1 text-center'>Send a message to start the conversation</p>
  }
  return (
    <div className="flex-1 px-2 overflow-auto">
      {messages.map(message => <Message key={message._id} message={message} />)}
    </div>

  )
}

export default Messages
