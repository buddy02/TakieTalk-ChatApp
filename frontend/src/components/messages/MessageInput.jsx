import { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {
  const [message, setMessage] = useState("")
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message)
    setMessage("")
  }

  return (
    <form className="px-2 my-3" onSubmit={handleSubmit}>
      <div className="w-full flex">
        <input type="text" placeholder="Message" className="w-full input input-bordered" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button className="ml-2">{loading ? <span className="loading loading-dots loading-xs"></span> : <IoSend />}</button>
      </div>
    </form>
  )
}

export default MessageInput
