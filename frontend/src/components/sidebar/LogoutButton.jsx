import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const { loading, logout } = useLogout();
  if (loading) {
    return <span className="loading loading-dots loading-xs"></span>
  }
  return (
    <div className="mt-auto"><CiLogout onClick={logout} className="cursor-pointer" /></div>
  )
}

export default LogoutButton
