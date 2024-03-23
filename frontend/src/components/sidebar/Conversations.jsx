import Conversation from "./Conversation"
import { getRandomEmoji } from "../../utils/emojis";
import useGetConversations from "../../hooks/useGetConversations";
const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  if (loading) {
    return <span className="loading loading-dots loading-xs"></span>
  }

  return (
    <div className="overflow-auto py-2">
      {conversations.map((conversation, idx) => <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()} lastIdx={idx === conversations.length - 1} />)}
    </div>
  )
}

export default Conversations
