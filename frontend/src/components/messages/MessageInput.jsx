import { IoSend } from "react-icons/io5";
const MessageInput = () => {
  return (
    <form className="px-2 my-3">
      <div className="flex">
        <input type="text" placeholder="Message" className="w-full input input-bordered" />
        <button className="ml-2"><IoSend /></button>
      </div>
    </form>
  )
}

export default MessageInput
