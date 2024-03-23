import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../store/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("")
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
    if (conversation) {
      setSelectedConversation(conversation)
      setSearch("")
    } else {
      toast.error("No such user found!")
    }
  }
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit} >
      <input type="text" placeholder="Search..." className="input input-bordered rounded-full" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button type="submit" className="btn btn-circle"><FaSearch /></button>
    </form>
  )
}

export default SearchInput
