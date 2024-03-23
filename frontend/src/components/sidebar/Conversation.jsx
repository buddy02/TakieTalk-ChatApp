import useConversation from "../../store/useConversation"

const Conversation = ({ conversation, emoji, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div className={`${isSelected && "bg-sky-500"} flex items-center gap-2 hover:bg-blue-500 rounded p-2 cursor-pointer`} onClick={() => setSelectedConversation(conversation)}>

        <div className="avatar online">
          <div className="w-12 rounded-full ring ring-primary">
            <img src={conversation.profilePic} />
          </div>
        </div>

        <div><p>{conversation.fullName} {emoji}</p></div>
      </div>
      <div className={`${!lastIdx && "divider"} my-0 py-0 h-1`}></div >
    </>
  )
}

export default Conversation
